import Image from "next/image";
import Quote from "./quote";
import WeekIndicator, { Day } from "./weekIndicator";
import clsx from "clsx";

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
        data-umami-event={`Click: ${params.name} ${prop}`}
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
  return <>
    <section className={clsx(
      "text-base sm:flex mb-16 px-6",
      params.highlight && "border py-6 border-amber-400 bg-amber-50 rounded-lg",
    )}
    >
      {params.image && <div className="sm:w-72 sm:pr-4 mb-2">
        <Image
          className="rounded shadow-xl"
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
          {link(params, 'location')}
        </div>
      </div>
    </section>
  </>
}
