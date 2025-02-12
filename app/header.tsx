import WinterBanner from './winterBanner';

function inlineBlockWord(word: string) {
  return <span className="inline-block sm:block mr-2">
    <span className="inline rounded bg-stone-950 text-stone-100 px-2">{word}</span>
  </span>
}

function bigwheel() {
  return <div className="
    flex justify-center -mt-[420px]
    sm:ml-0 sm:mt-0 sm:relative
    ">
    <div className="
      -z-10 bg-[url('/wheel.small.webp')] bg-contain bg-no-repeat w-[512px] h-[512px] min-w-[512px] min-h-[512px]
      sm:absolute animate-spin-slow sm:-top-[286px] sm:-right-16" />
  </div>
}

function filterButton(extraClasses: string, content: JSX.Element) {
  return <div className="flex-1 mx-2">
    <button className={`block w-full p-3 rounded-lg text-stone-100 text-xl font-semibold text-center cursor-pointer ${extraClasses}`}>
      {content}
    </button>
  </div>
}

export default function Header() {
  return <header>
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
    <WinterBanner />
    <p className="my-3 z-10 bg-white">

    </p>
    <div className="z-10 bg-stone-100 rounded-xl rounded-tr-xl p-3 text-base mb-8">
      <div className="flex">
        <p className="text-2xl pr-3">ℹ️</p>
        <div>
          Join a group bicycle ride with a community of cyclists in Minneapolis.
          This is a list of active teams and clubs that host rides throughout the season.
          <span className="font-semibold"> Notice something missing?</span>
          <a className='pl-1' href="https://docs.google.com/forms/d/e/1FAIpQLScPW7ebBicE7QIR-66SfbchiL86r2XT9wR6vVHKMatNmB-eUg/viewform">
            Let us know!
          </a>
          <br />
          <br />
          <p className="mb-2">Updated for Spring 2025. Schedules change, so it's best to use the facebook event page, instagram, calendar, or other links below to confirm the exact details of the ride.</p>
          <p className="font-bold">Helmet always required.</p>
          <p>Bring a flat kit if you can.</p>
          <p>Bring lights for evening rides</p>
        </div>
      </div>
    </div>
    {/* Continue on this later */}
    {/* <div className="flex mb-10 -ml-2 -mr-2">
      {filterButton('bg-mn-accent-teal', <p>🙌 Social</p>)}
      {filterButton('bg-mn-accent-purple', <p>🪽 Speedy</p>)}
      {filterButton('bg-mn-accent-orange', <p>🌟 Popular</p>)}
    </div> */}
  </header>
}
