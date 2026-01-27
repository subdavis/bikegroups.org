export function Banner() {
  const text = '🧊 ICE OUT ';
  const repeatedText = text.repeat(30);

  return (
    <div className="w-full bg-[#056bb6] text-white flex items-center overflow-hidden">
      <div className="whitespace-nowrap flex animate-marquee [&>span]:flex-shrink-0">
        <span className="font-bold uppercase text-2xl sm:text-4xl">{repeatedText}</span>
        <span className="font-bold uppercase text-2xl sm:text-4xl">{repeatedText}</span>
      </div>
    </div>
  );
}
