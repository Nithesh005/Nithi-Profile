import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Nithesh Kumar - Software Engineer",
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
  authors: [{ name: "Nithesh Kumar" }],
  creator: "Nithesh Kumar",
  publisher: "Nithesh Kumar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://nithesh.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nithesh Kumar - Software Engineer",
    description: "Experienced Software Engineer specializing in full-stack development, React, Node.js, and modern web technologies.",
    url: "https://nithesh.dev",
    siteName: "Nithesh Kumar Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nithesh Kumar - Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nithesh Kumar - Software Engineer",
    description: "Experienced Software Engineer specializing in full-stack development, React, Node.js, and modern web technologies.",
    images: ["/og-image.jpg"],
    creator: "@nithesh_kumar",
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
      </head>
      <body className="antialiased">
        {children}
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
