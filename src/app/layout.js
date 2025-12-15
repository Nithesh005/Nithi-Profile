import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Script from "next/script";
import ChatBot from "../../components/ChatBot";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Nitheshwaran - Software Engineer",
  description: "Experienced Software Engineer specializing in full-stack development, React, Node.js, and modern web technologies. Building scalable applications that make a difference.",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "Web Development",
    "JavaScript",
    "TypeScript",
    "MongoDB",
    "PostgreSQL",
    "AWS",
    "Chennai",
    "India"
  ],
  authors: [{ name: "Nitheshwaran" }],
  creator: "Nitheshwaran",
  publisher: "Nitheshwaran",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://nithi.xyz"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nitheshwaran - Software Engineer",
    description: "Experienced Software Engineer specializing in full-stack development, React, Node.js, and modern web technologies.",
    url: "https://nithi.xyz",
    siteName: "Nitheshwaran Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nitheshwaran - Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nitheshwaran - Software Engineer",
    description: "Experienced Software Engineer specializing in full-stack development, React, Node.js, and modern web technologies.",
    images: ["/og-image.jpg"],
    creator: "@nithesh_waran",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#eab308" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5NYKF5NTP4"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5NYKF5NTP4', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `}
        </Script>
      </head>
      <body className="antialiased">
        {children}
        <ChatBot />
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: "#363636",
              color: "#fff",
            },
            success: {
              duration: 3000,
              iconTheme: {
                primary: "#10b981",
                secondary: "#fff",
              },
            },
            error: {
              duration: 5000,
              iconTheme: {
                primary: "#ef4444",
                secondary: "#fff",
              },
            },
          }}
        />
      </body>
    </html>
  );
}
