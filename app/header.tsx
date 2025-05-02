import type { JSX } from 'react';
import Image from 'next/image';

function inlineBlockWord(word: string) {
  return (
    <span className="inline-block sm:block mr-2">
      <span className="inline rounded bg-stone-950 text-stone-100 px-2">{word}</span>
    </span>
  );
}

function bigwheel() {
  return (
    <div
      className="
    flex justify-center -mt-[420px]
    sm:ml-0 sm:mt-0 sm:relative
    "
    >
      <div className="-z-10 w-[512px] h-[512px] min-w-[512px] min-h-[512px] sm:absolute sm:-top-[286px] sm:-right-16">
        <Image
          src="/wheel.small.webp"
          alt=""
          width={512}
          height={512}
          priority
          fetchPriority="high"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

function InlineLink(params: { href: string; children: JSX.Element | string }) {
  return (
    <a
      className="text-stone-950 font-semibold"
      href={params.href}
      data-umami-event="click calendar"
      data-umami-event-type={params.children.toString()}
    >
      {params.children}
    </a>
  );
}

export default function Header() {
  return (
    <header>
      {bigwheel()}
      <h1 className="z-10 text-4xl font-semibold sm:mt-0 my-4">
        {inlineBlockWord('2025')}
        <span> </span>
        {inlineBlockWord('Minneapolis')}
        <span> </span>
        {inlineBlockWord('Bike')}
        <span> </span>
        {inlineBlockWord('Clubs')}
      </h1>

      <p className="my-3 z-10 bg-white"></p>
      <div
        className="z-10 bg-stone-100 rounded-xl rounded-tr-xl p-3 text-base mt-10 border-2 border-stone-300"
        role="complementary"
      >
        <div className="flex">
          <p className="text-2xl pr-3" aria-hidden="true">
            ℹ️
          </p>
          <div>
            Join a group bicycle ride with a community of cyclists in Minneapolis. This is a list of
            active teams and clubs that host rides throughout the season, updated for spring 2025.
            Schedules change, so check with the organizers to confirm exact details of the ride.
            <p className="font-semibold">
              {' '}
              Notice something missing?
              <a
                className="pl-1"
                href="https://docs.google.com/forms/d/e/1FAIpQLScPW7ebBicE7QIR-66SfbchiL86r2XT9wR6vVHKMatNmB-eUg/viewform"
              >
                Let us know!
              </a>
            </p>
          </div>
        </div>
        <div className="flex items-center mt-4">
          <p className="text-2xl pr-3" aria-hidden="true">
            📅
          </p>
          <div>
            {'Others have also put together event calendars, including '}
            <InlineLink href="https://www.bikemn.org/all-events/">BikeMN</InlineLink>
            {' and this '}
            <InlineLink href="https://docs.google.com/document/u/0/d/12_6WkT0G6DEzY_fsLS8GMCLkFR237u8MW8fu1a_-NyA/mobilebasic?pli=1">
              Google Doc
            </InlineLink>
            .
            <br />
          </div>
        </div>
      </div>
    </header>
  );
}
