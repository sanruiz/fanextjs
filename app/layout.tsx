import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import { Open_Sans, Montserrat } from "next/font/google";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import BreadcrumbProvider from "@/providers/breadcrumb";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const baseURL =
  process.env.NODE_ENV === "production"
    ? process.env.URL_PROD ?? ""
    : process.env.URL_LOCAL ?? "";

export const metadata = {
  metadataBase: new URL(baseURL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body
        className="h-full bg-background1 text-faDavysGray"
      >
        <GoogleTagManager gtmId="GTM-TN6JFMR" />
        <div className={`min-h-full  ${openSans.variable} ${montserrat.variable} antialiased`}>
          <BreadcrumbProvider>
            <Navbar />
            <main>{children}</main>
          </BreadcrumbProvider>
        </div>
        <Footer />
      </body>
    </html>
  );
}
