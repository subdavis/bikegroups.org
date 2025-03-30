import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./header";
import Footer from "./footer";

const inter = Inter({ subsets: ["latin"] });
const description = 'Updated for Spring 2025. This is a list of active cycling clubs in minneapolis that host regular bike rides throughout the season.'
export const metadata: Metadata = {
  title: "2025 Minneapolis Bike Clubs",
  description,
  keywords: "bicycle, bike, ride, group, minneapolis, minnesota, club, team, social",
  openGraph: {
    title: '2025 Minneapolis Bike Clubs',
    siteName: 'Minneapolis Bike Groups',
    description,
    images: [
      {
        url: 'https://bikegroups.org/images/Behind_Bars_Bike_Shop.jpg',
        width: 1440,
        height: 929,
        alt: 'Behind Bars Bike Shop'
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://bikegroups.org/',
    languages: {
      'en-US': 'https://bikegroups.org/'
    },
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col mx-auto max-w-screen-md pt-8 px-4" >
          <Header />
          {children}
        </div>
        <Footer />
        <script defer src="https://umami.subdavis.com/script.js" data-website-id="2bae8950-19d8-4090-8302-af54ae4e3a6b" />
      </body>
    </html>
  );
}
