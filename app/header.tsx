function inlineBlockWord(word: string) {
  return <span className="inline-block sm:block mr-2">
    <span className="inline rounded bg-stone-200 text-stone-900 px-2">{word}</span>
  </span>
}

function bigwheel() {
  return <div className="relative -mt-[420px] -ml-14 sm:ml-0 sm:mt-0">
    <div className="
      -z-10 bg-[url('/wheel.small.webp')] w-[300px] h-[300px] bg-contain
      sm:absolute sm:animate-spin-slow sm:right-16" />
  </div>
}

export default function Header() {
  return <header>
    {/* {bigwheel()} */}
    <div>
      <nav className="bg-stone-100 border-2 rounded-full border-stone-400 text-lg no-underline text-white mb-4 p-2">
        <ul className="flex justify-start">
          <li className="bg-stone-800 rounded-full p-1 px-2 mr-1">
            <a className="no-underline hover:underline" href="#rides">Groups</a>
          </li>
          <li className="bg-stone-800 rounded-full p-1 px-2 mr-1">
            <a className="no-underline hover:underline" href="#rides">Events</a>
          </li>
          <li className="bg-stone-800 rounded-full p-1 px-2 mr-1">
            <a className="no-underline hover:underline" href="#rides">Bikepacking</a>
          </li>
        </ul>
      </nav>
    </div>
    <div className="flex sm:flex-row flex-col sm:justify-between">
      <h1 className="z-10 text-4xl font-semibold mb-5">
        {inlineBlockWord('2024')}
        <span> </span>
        {inlineBlockWord('Minneapolis')}
        <span> </span>
        {inlineBlockWord('Bike')}
        <span> </span>
        {inlineBlockWord('Clubs')}
      </h1>
      <p className="sm:pl-10 z-10 bg-white text-2xl">
        Join a group bicycle ride with a community of cyclists in Minneapolis.
        This is a list of active teams and clubs that host rides throughout the season.
        <span className="font-semibold"> Notice something missing?</span>
        <a className='pl-1' href="https://docs.google.com/forms/d/e/1FAIpQLScPW7ebBicE7QIR-66SfbchiL86r2XT9wR6vVHKMatNmB-eUg/viewform">
          Let us know!
        </a>
      </p>
    </div>
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