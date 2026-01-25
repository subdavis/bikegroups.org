export function Banner() {
  const text = 'ICE OUT 🧊 ';
  const repeatedText = text.repeat(20);

  return (
    <div className="w-full h-16 bg-black flex items-center overflow-hidden fixed top-0 z-20">
      <div className="animate-marquee whitespace-nowrap flex">
        <p className="text-white font-bold uppercase text-5xl">{repeatedText}</p>
        <p className="text-white font-bold uppercase text-5xl">{repeatedText}</p>
      </div>
    </div>
  );
}
