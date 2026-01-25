import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './header';
import Footer from './footer';
import LinkPile from './linkPile';
import WinterBanner from './winterBanner';
import { Banner } from './Banner';

const inter = Inter({ subsets: ['latin'] });
const description =
  'This is a list of active cycling clubs in minneapolis that host regular bike rides throughout the season.';
export const metadata: Metadata = {
  title: '2026 Minneapolis Bike Clubs',
  description,
  keywords: 'bicycle, bike, ride, group, minneapolis, minnesota, club, team, social',
  openGraph: {
    title: '2026 Minneapolis Bike Clubs',
    siteName: 'Minneapolis Bike Groups',
    description,
    images: [
      {
        url: 'https://bikegroups.org/images/Behind_Bars_Bike_Shop.jpg',
        width: 1440,
        height: 929,
        alt: 'Behind Bars Bike Shop',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://bikegroups.org/',
    languages: {
      'en-US': 'https://bikegroups.org/',
    },
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Banner />
        <div className="flex flex-col mx-auto max-w-screen-md pt-20 px-4">
          <Header />
          {children}
          <div>
            <hr />
            <LinkPile
              title="💬 Discussion"
              links={[
                { href: 'https://www.reddit.com/r/CyclingMSP/', text: 'r/CyclingMSP' },
                { href: 'https://www.facebook.com/groups/TCMNBikeTalk', text: 'TCMN Bike Talk' },
                {
                  href: 'https://www.facebook.com/groups/451259884926066/',
                  text: 'Minnesota Bike Camping and Bikepacking',
                },
                {
                  href: 'https://www.facebook.com/groups/TwinCitiesBicycleTradingPost',
                  text: 'TC Bicycle Trading Post',
                },
                {
                  href: 'https://www.facebook.com/groups/smallframesbighearts/',
                  text: 'Small Frames Big Hearts',
                },
                { href: 'https://www.facebook.com/groups/tcwtfbikes', text: 'FTWNB Trading Post' },
              ]}
            />

            <LinkPile
              title="📝 Blogs"
              links={[
                { href: 'https://mnbiketrailnavigator.blogspot.com/', text: 'MN Trail Navigator' },
                { href: 'https://mplsbikelove.com/', text: 'MPLS Bike Love' },
                { href: 'https://streets.mn/', text: 'Streets.mn' },
                { href: 'https://www.ourstreetsmpls.org/current_news', text: 'Our Streets' },
                { href: 'https://www.bikemn.org/blog/', text: 'Bicycle Alliance of MN' },
              ]}
            />

            <LinkPile
              title="📅 Calendars"
              links={[
                { href: 'https://www.bikemn.org/all-events/', text: 'BikeMN Events' },
                {
                  href: 'https://docs.google.com/document/u/0/d/12_6WkT0G6DEzY_fsLS8GMCLkFR237u8MW8fu1a_-NyA/mobilebasic?pli=1',
                  text: 'Community Google Doc',
                },
                {
                  href: 'https://mnbiketrailnavigator.blogspot.com/p/event-calendars.html?m=1',
                  text: 'MN Trail Navigation Calendar',
                },
              ]}
            />
          </div>
        </div>
        <Footer />
        {/* Only show the umami script if the user is not on localhost */}
        <script
          defer
          src="https://umami.subdavis.com/script.js"
          data-website-id="2bae8950-19d8-4090-8302-af54ae4e3a6b"
          data-domains="bikegroups.org"
        />
      </body>
    </html>
  );
}
