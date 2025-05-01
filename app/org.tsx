import Image from "next/image";
import Quote from "./quote";
import WeekIndicator, { Day } from "./weekIndicator";
import OrgEvents from "./OrgEvents";
import { OrgTags } from "./orgTags";
import type { JSX } from "react";
import { TagDot } from "./tags";

export interface OrgParams {
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
  tags?: OrgTags[];
}

const linkIcons = {
  website: '🌐',
  instagram: '🌅',
  facebook: '👥',
  calendar: '📅',
  location: '📍',
}

function link(params: OrgParams, prop: keyof typeof linkIcons) {
  if (params[prop]) {
    if (params[prop]?.startsWith('http')) {
      return <a
        data-umami-event="click org link"
        data-umami-event-name={params.name}
        data-umami-event-type={prop}
        className="whitespace-nowrap inline-block mb-2 px-3 py-1 bg-stone-100 rounded-md mr-2 text-stone-900 hover:text-stone-950 hover:bg-stone-200 transition-all border border-stone-300 hover:border-stone-400"
        href={params[prop]}
        aria-label={`${params.name} ${prop} link`}
      >
        <span aria-hidden="true">{linkIcons[prop]}</span> <span className="underline">{prop}</span>
      </a>
    } else {
      return <span className="whitespace-nowrap pr-2 drop-shadow-lg">
        <span aria-hidden="true">{linkIcons[prop]}</span>{params[prop]}
      </span>
    }
  }
}

function title(params: OrgParams) {
  return <h3 className="mb-2 flex items-center flex-wrap">
    <span className="text-xl font-semibold px-2 bg-stone-900 text-white rounded mr-2">{params.name}</span>
    {params.tags && <div className="flex flex-wrap" role="list" aria-label={`${params.name} tags`}>
      {params.tags.map(tag => <TagDot key={tag} tag={tag} className="mr-1" />)}
    </div>}
  </h3>
}

export default function Organization(params: OrgParams) {
  const instagramHandle = params.instagram?.split('instagram.com/')[1].replace('/', '')

  return <article className="text-base sm:flex mb-16">
    {params.image && <div className="sm:w-72 sm:pr-4 mb-2">
      <Image
        className="rounded [filter:drop-shadow(0_4px_6px_rgba(0,0,0,0.2))]"
        src={params.image + '.webp'}
        alt={`${params.name} organization logo`}
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

      <nav aria-label={`${params.name} links`}>
        {link(params, 'website')}
        {link(params, 'instagram')}
        {link(params, 'facebook')}
        {link(params, 'calendar')}
        {/* {link(params, 'location')} */}
      </nav>
    </div>
  </article>
}
