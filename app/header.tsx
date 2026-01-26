import type { JSX } from 'react';
import Image from 'next/image';
import WinterBanner from './winterBanner';

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
          aria-hidden="true"
          loading="eager"
          fetchPriority="high"
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
        {inlineBlockWord('2026')}
        <span> </span>
        {inlineBlockWord('Minneapolis')}
        <span> </span>
        {inlineBlockWord('Bike')}
        <span> </span>
        {inlineBlockWord('Clubs')}
      </h1>

      <p className="my-3 z-10 bg-white"></p>

      <div className="flex flex-col sm:flex-row my-12">
        <div className="sm:w-[320px] sm:mr-6">
          <img
            src="/images/alex-pretti-memorial-ride.webp"
            alt="Behind Bars Alex Pretti Memorial Ride"
            className="mr-4 rounded"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-3">Unity Ride in honor of Alex Pretti</h2>
          <p className="mb-3">
            Alex was one of us, could&apos;ve been any of us, so as we mourn, all of us can come
            together in unity to remember Alex for what he was. A kind and caring soul put on this
            earth to be the light for others. Although his light has been extinguished by this
            fascist regime, it hasn&apos;t been lost. If anything, those sparks fell and ignited
            something in us that&apos;s been hiding all along. We are stronger together, and they
            can&apos;t take us all. We&apos;ve gathered together a community of cyclists to remember
            Alex Pretti. Please join in, near or far this Saturday, 1/31 1:00 PM Central Time
          </p>
          <p className="mb-3">
            Minneapolis joins together Angry Catfish Bicycle, Bonesaw Cycling Collective, GenoSack,
            Melanin In Motion, The Price Brothers, Unsanctioned Ride group and others. We hope folks
            from all over join together in unity as well!”
          </p>
          <p className="mb-2">
            <a
              data-umami-event="click event"
              data-umami-event-name="Alex Pretti Memorial Ride"
              href="https://www.reddit.com/r/CyclingMSP/comments/1qnp9vg/alex_pretti_memorial_ride_100pm_on_sat_131_at/"
            >
              More details here
            </a>
          </p>
        </div>
      </div>

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
            active teams and clubs that host rides throughout the season, updated for winter 2026.
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
            <InlineLink href="https://docs.google.com/document/u/0/d/12_6WkT0G6DEzY_fsLS8GMCLkFR237u8MW8fu1a_-NyA/mobilebasic?pli=1">
              this Google Doc
            </InlineLink>
            {' and '}
            <InlineLink href="https://www.bikemn.org/all-events/">BikeMN</InlineLink>
            .
            <br />
          </div>
        </div>
        <WinterBanner />
      </div>
    </header>
  );
}
