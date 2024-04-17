import Image from "next/image";

export default function Footer() {
  return <footer className="bg-stone-950">
    <div className="flex flex-row mx-auto max-w-screen-md justify-between py-8 px-4">
      <div className="text-stone-100 text-left text-base">
        <p className="mb-6">
          © 2024 bikegroups.org
        </p>
        <p className="mb-6 underline">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScPW7ebBicE7QIR-66SfbchiL86r2XT9wR6vVHKMatNmB-eUg/viewform">
            submit an update
          </a>
        </p>
        <p className="mb-6">
          design by <a className="underline" href="https://subdavis.com">subdavis.com</a>
        </p>
      </div>
      <div className="invert w-32 h-32">
        <Image
          src="/bicycle.webp"
          alt="A spinning wheel"
          width={48}
          height={48}
          layout="responsive"
        />
      </div>
    </div>
  </footer>
}