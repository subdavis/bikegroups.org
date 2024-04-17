import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./header";
import Footer from "./footer";

const inter = Inter({ subsets: ["latin"] });
const description = 'Join a group ride with a community of cyclists in Minneapolis. This is a list of active groups that host regular rides throughout the season. Come make friends.'
export const metadata: Metadata = {
  title: "2024 Minneapolis Bike Groups",
  description,
};

export default function RootLayout(params: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col mx-auto max-w-screen-md pt-8 px-4" >
          <Header />
          {params.children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
