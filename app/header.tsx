function inlineBlockWord(word: string) {
  return <span className="inline-block sm:block mr-2">
    <span className="inline rounded bg-stone-950 text-stone-100 px-2">{word}</span>
  </span>
}

function bigwheel() {
  return <div className="relative -mt-[420px] -ml-14 sm:ml-0 sm:mt-0">
    <div className="
      -z-10 bg-[url('/wheel.small.webp')] w-[512px] h-[512px] bg-contain
      sm:absolute sm:animate-spin-slow sm:-top-[286px] sm:-right-16" />
  </div>
}

export default function Header() {
  return <header>
    {bigwheel()}
    <h1 className="z-10 text-4xl font-semibold mb-5">
      {inlineBlockWord('2024')}
      <span> </span>
      {inlineBlockWord('Minneapolis')}
      <span> </span>
      {inlineBlockWord('Bike')}
      <span> </span>
      {inlineBlockWord('Clubs')}
    </h1>
    <p className="my-3 z-10 bg-white">
      Join a group bicycle ride with a community of cyclists in Minneapolis.
      This is a list of active teams and clubs that host rides throughout the season.
      <span className="font-semibold"> Notice something missing?</span>
      <a className='pl-1' href="https://docs.google.com/forms/d/e/1FAIpQLScPW7ebBicE7QIR-66SfbchiL86r2XT9wR6vVHKMatNmB-eUg/viewform">
        Let us know!
      </a>
    </p>
    <div className="z-10 bg-stone-100 rounded p-3 text-base mb-10">
      <div className="flex">
        <p className="text-2xl pr-3">ℹ️</p>
        <div>
          <p className="mb-2">Updated for Spring 2024. Schedules change, so it’s best to use the facebook event page, instagram, calendar, or other links below to confirm the exact details of the ride.</p>
          <p className="font-bold">Helmet always required.</p>
          <p>Bring a flat kit if you can.</p>
          <p>Bring lights for evening rides</p>
        </div>
      </div>
    </div>
  </header>
}