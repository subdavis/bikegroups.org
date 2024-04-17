import Image from "next/image";
import Quote from "./quote";
import WeekIndicator, { Day } from "./weekIndicator";

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
        className="whitespace-nowrap inline-block mb-2 px-3 py-1 bg-stone-100 rounded-md mr-2 text-stone-900 hover:text-stone-950 hover:bg-stone-200 transition-all border border-stone-300 hover:border-stone-400"
        href={params[prop]}>
        {linkIcons[prop]} <span>{prop}</span>
      </a>
    } else {
      return <span className="whitespace-nowrap pr-2 drop-shadow-lg">
        {linkIcons[prop]}{params[prop]}
      </span>
    }
  }
}

function randomRotate() {
  /** Return a random rotation of either -rotate-2 or rotate-2 */
  // return Math.random() > 0.5 ? 'sm:rotate-2' : 'sm:-rotate-2';
  return ''
}

export default function Organization(params: Params) {
  return <>
    <section className="text-base sm:flex mb-16">
      {params.image && <div className="sm:w-72 sm:pr-4 mb-2">
        <Image
          className={"rounded shadow-xl" + randomRotate()}
          src={params.image + '.webp'}
          alt={params.name}
          width={600}
          height={400}
        />
      </div>}
      <div className="flex-1">
        <h2 className="text-xl font-semibold mb-2">
          <span className="bg-stone-800 text-stone-100 px-2 rounded">{params.name}</span>
        </h2>
        { params.days && <WeekIndicator days={params.days} /> }
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