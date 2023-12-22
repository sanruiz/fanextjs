#stage 1
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
# Create a Virtual directory inside the docker image
WORKDIR /app
COPY package.json package.json ./
COPY package-lock.json package-lock.json ./
COPY .eslintrc.json .eslintrc.json ./

# Copy files to virtual directory
# Run command in Virtual directory
RUN npm cache clean --force
# Copy files from local machine to virtual directory in docker image
#COPY . .
RUN npm install --production

#stage 2
FROM node:20-alpine AS builder
ARG WORDPRESS_API_URL
ARG WORDPRESS_API_URL_STG
ARG CCDS_API_URL
ARG CCDS_API_URL_STG
ARG URL_LOCAL
ARG URL_PROD
ARG NEXT_PUBLIC_GEOCODE_API_KEY
ARG NEXT_PUBLIC_CCDS_API_URL
ARG CCDS_API_TOKEN
ARG CCDS_API_COMPLEMENT
ARG CCDS_API_COMPLEMENT_STG
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1
ENV WORDPRESS_API_URL=$WORDPRESS_API_URL
ENV WORDPRESS_API_URL_STG=$WORDPRESS_API_URL_STG
ENV CCDS_API_URL=$CCDS_API_URL
ENV CCDS_API_URL_STG=$CCDS_API_URL_STG
ENV URL_LOCAL=$URL_LOCAL
ENV URL_PROD=$URL_PROD
ENV NEXT_PUBLIC_GEOCODE_API_KEY=$NEXT_PUBLIC_GEOCODE_API_KEY
ENV NEXT_PUBLIC_CCDS_API_URL=$NEXT_PUBLIC_CCDS_API_URL
ENV CCDS_API_TOKEN=$CCDS_API_TOKEN
ENV CCDS_API_COMPLEMENT=$CCDS_API_COMPLEMENT
ENV CCDS_API_COMPLEMENT_STG=$CCDS_API_COMPLEMENT_STG

RUN npm run build

#stage 3
FROM nginx:1.24.0-alpine-perl
ARG WORDPRESS_API_URL
ARG WORDPRESS_API_URL_STG
ARG CCDS_API_URL
ARG CCDS_API_URL_STG
ARG URL_LOCAL
ARG URL_PROD
ARG NEXT_PUBLIC_GEOCODE_API_KEY
ARG NEXT_PUBLIC_CCDS_API_URL
ARG CCDS_API_TOKEN
ARG CCDS_API_COMPLEMENT
ARG CCDS_API_COMPLEMENT_STG
WORKDIR /app
LABEL name="familyassets-nextjs"
LABEL maintainer="Dustin Mason"
LABEL Version="0.0.1"

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
ENV WORDPRESS_API_URL=$WORDPRESS_API_URL
ENV WORDPRESS_API_URL_STG=$WORDPRESS_API_URL_STG
ENV CCDS_API_URL=$CCDS_API_URL
ENV CCDS_API_URL_STG=$CCDS_API_URL_STG
ENV URL_LOCAL=$URL_LOCAL
ENV URL_PROD=$URL_PROD
ENV NEXT_PUBLIC_GEOCODE_API_KEY=$NEXT_PUBLIC_GEOCODE_API_KEY
ENV NEXT_PUBLIC_CCDS_API_URL=$NEXT_PUBLIC_CCDS_API_URL
ENV CCDS_API_TOKEN=$CCDS_API_TOKEN
ENV CCDS_API_COMPLEMENT=$CCDS_API_COMPLEMENT
ENV CCDS_API_COMPLEMENT_STG=$CCDS_API_COMPLEMENT_STG

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next-env.d.ts ./
COPY --from=builder /app/app ./app
COPY --from=builder /usr/lib /usr/lib
COPY --from=builder /usr/local/lib /usr/local/lib
COPY --from=builder /usr/local/include /usr/local/include
COPY --from=builder /usr/local/bin /usr/local/bin

#Copy public folder
COPY public ./public
COPY next.config.js ./
COPY tailwind.config.js ./
COPY tsconfig.json ./
COPY postcss.config.js ./
EXPOSE 3000

RUN apk add supervisor bash

#Copy the configuration files
COPY docker/conf/nginx.conf /etc/nginx/nginx.conf
COPY docker/conf/familyassets-nextjs.conf /etc/nginx/conf.d/familyassets-nextjs.conf

#remove the default nginx conf
RUN mv /etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf.disabled

COPY docker/conf/supervisord.conf /etc/supervisord.conf
RUN mkdir -p /var/www/html

RUN chown -R nginx:nginx /var/www/html
EXPOSE 80

#make supervisor log directory for nextjs
#RUN mkdir -p /var/log/supervisor
#let's have nginx log to STDOUT and STDERR
RUN ln -sf /dev/stdout /var/log/nginx/access.log
RUN ln -sf /dev/stderr /var/log/nginx/error.log

CMD ["/usr/bin/supervisord"]