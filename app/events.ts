interface Event {
  title: string;
  organizer?: string
  description: string;
  date: string; // something parseable by Date.parse
  location: string;
  link?: string;
}

export default function GetEvents() {
  const events: Event[] = [
    {
      title: 'Freedom From Pants',
      description: 'The biggest pantsless party of the year!',
      date: '2024-07-04T6:00:00',
      location: 'Nicollet Island under Hennepin Ave Bridge',
    },
    {
      title: 'Behind Bars Bikepacking Intro',
      organizer: 'behind-bars',
      description: 'Behind Bars Bicycle Shop and our helpful crew of Shop Ambassadors are putting together our first bikepacking trip of the season.',
      date: '2024-06-14',
      location: 'Behind Bars Bicycle Shop',
      link: 'https://www.facebook.com/BehindBarsBicycleShopMN/posts/pfbid0hLCRyDdojsME724Yipi9AhchHBUCkR8FiGrdPtejhfeVe4bRvSiSKKXR2hn3UGYXl',
    }
  ]
}