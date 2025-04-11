import Image from "next/image";
import Quote from "./quote";
import WeekIndicator, { Day } from "./weekIndicator";
import clsx from "clsx";
import OrgEvents from "./OrgEvents";

interface Params {
  name: string;
  quote?: string | JSX.Element | React.ReactNode;
  description?: string | JSX.Element | React.ReactNode;
  image?: string;
  days?: Day[];
  instagram?: string;
  facebook?: string;
  website?: string;
  calendar?: string;
  location?: string;
  highlight?: boolean;
  verified?: boolean;
  eager?: boolean;
}

const linkIcons = {
  website: '🌐',
  instagram: '🌅',
  facebook: '👥',
  calendar: '📅',
  location: '📍',
}

function link(params: Params, prop: keyof typeof linkIcons) {
  if (params[prop]) {
    if (params[prop]?.startsWith('http')) {
      return <a
        data-umami-event="click org link"
        data-umami-event-name={params.name}
        data-umami-event-type={prop}
        className="whitespace-nowrap inline-block mb-2 px-3 py-1 bg-stone-100 rounded-md mr-2 text-stone-900 hover:text-stone-950 hover:bg-stone-200 transition-all border border-stone-300 hover:border-stone-400"
        href={params[prop]}>
        {linkIcons[prop]} <span className="underline">{prop}</span>
      </a>
    } else {
      return <span className="whitespace-nowrap pr-2 drop-shadow-lg">
        {linkIcons[prop]}{params[prop]}
      </span>
    }
  }
}

function title(params: Params) {
  return <h3 className="mb-2 flex items-center flex-wrap">
    <span className="text-xl font-semibold px-2 bg-stone-900 text-white rounded mr-2">{params.name}</span>
   
  </h3>
}

export default function Organization(params: Params) {
  const instagramHandle = params.instagram?.split('instagram.com/')[1].replace('/', '')

  return <>
    <section className="text-base sm:flex mb-16 px-6">
      {params.image && <div className="sm:w-72 sm:pr-4 mb-2">
        <Image
          className="rounded [filter:drop-shadow(0_4px_6px_rgba(0,0,0,0.2))]"
          src={params.image + '.webp'}
          alt={params.name}
          width={600}
          height={400}
          loading={params.eager ? 'eager' : 'lazy'}
        />
      </div>}
      <div className="flex-1">
        {title(params)}
        {params.days && <WeekIndicator days={params.days} />}
        <OrgEvents instagramHandle={instagramHandle} />
        {params.quote && <Quote>
          {params.quote}
        </Quote>}
        <div className="my-4">
          {typeof params.description in ['string', 'number', 'boolean']
            ? <p>{params.description}</p>
            : params.description
          }
        </div>
        
        <div>
          {link(params, 'website')}
          {link(params, 'instagram')}
          {link(params, 'facebook')}
          {link(params, 'calendar')}
          {/* {link(params, 'location')} */}
        </div>
      </div>
    </section>
  </>
}
