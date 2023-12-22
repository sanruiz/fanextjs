# State Pages with Next.js

This project aims to revamp the state pages of our website by transitioning from a PHP-based WordPress setup to a Next.js application. 
The new setup will pull data from both WordPress and CCDS APIs to create a more dynamic and user-friendly interface.

## Project Overview

The goal of this project is to improve the overall user experience and performance of our state pages. We're achieving this by transitioning from a traditional WordPress setup to a modern Next.js-based application. This approach allows us to leverage the benefits of React and server-side rendering provided by Next.js. 

Data required for each state page will be fetched from two sources: 
- WordPress API - for metadata and state descriptions.
- CCDS API - for information on top communities in each state, among other things.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository
```git clone git@bitbucket.org:silvergroup-engineering/family-nextjs.git```

2. Navigate into the project directory
```cd your_repo_name```

3. Install the dependencies
```npm install```
or
```yarn install```

4. Run the development server
```npm run dev```
or
```yarn dev```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment
Deployment is handled by AWS Amplify. The project is currently deployed to the following environments:

- [Development](https://backoffice-stg.familyassets.com/)
- [Staging](https://backoffice-stg.familyassets.com/)
- [Production](https://www.familyassets.com/assisted-living)

## Testing
Testing is handled by Jest and React Testing Library. To run the tests, run the following command:
```npm run test```
or
```yarn test```

## Built With
1. [Next.js](https://nextjs.org/)
2. [typescript](https://www.typescriptlang.org/)
3. [WordPress API](https://developer.wordpress.org/rest-api/)
4. [CCDS API](https://api.silverassist.com/)
5. [Jest](https://jestjs.io/)
6. [tailwindcss](https://tailwindcss.com/)
see package.json

## Authors
- [**Santiago Ramirez**](https://bitbucket.org/santiagorsa/workspace/overview) - [sanruiz](hrrps://github.com/sanruiz)

## License
This project and its source code are proprietary and intended for exclusive use by [SilverAssist](https://www.silverassist.com/). Distribution, reproduction, or use outside of SilverAssist is prohibited without explicit permission.

## Acknowledgments
1. [Next.js](https://nextjs.org/)
2. [WordPress API](https://developer.wordpress.org/rest-api/)
3. [WPGraphQL](https://www.wpgraphql.com/)

