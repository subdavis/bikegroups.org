import Image from "next/image";

export default function Footer() {
  const buildTime = new Date(process.env.BUILD_TIME || '');
  return <footer className="bg-stone-950">
    <div className="flex flex-row mx-auto max-w-screen-md justify-between py-6 px-4">
      <div className="text-stone-100 text-left text-sm font-mono">
        <p className="mb-3">
          bikegroups.org 2025
        </p>
        <p className="mb-3">
          last updated on <time dateTime={buildTime.toISOString()}>{buildTime.toLocaleDateString()}</time>
        </p>
        <p className="mb-3">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScPW7ebBicE7QIR-66SfbchiL86r2XT9wR6vVHKMatNmB-eUg/viewform">
            submit an update
          </a>
        </p>
        <p>
          <a href="https://github.com/subdavis/bikegroups.org" className="text-stone-100">
            edit the code
          </a>
        </p> 
      </div>
      <div className="w-[148px]">
        <Image
          src="/rainbow_bike.png"
          alt="A rainbow bike"
          width={48}
          height={48}
          layout="responsive"
        />
      </div>
    </div>
  </footer>
}
