import Image from "next/image";

export default function Footer() {
  return <footer className="bg-stone-950">
    <div className="flex flex-row mx-auto max-w-screen-md justify-between py-6 px-4">
      <div className="text-stone-100 text-left text-sm font-mono">
        <p className="mb-4">
          © 2025 bikegroups.org
        </p>
        <p className="mb-4">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScPW7ebBicE7QIR-66SfbchiL86r2XT9wR6vVHKMatNmB-eUg/viewform">
            submit an update
          </a>
        </p>
        <p className="mb-4">
          <a href="https://github.com/subdavis/bikegroups.org" className="text-stone-100">
            edit the code
          </a>
        </p>
      </div>
      <div className="invert w-32 h-32">
        <Image
          src="/bicycle.webp"
          alt="A penny farthing illustration"
          width={48}
          height={48}
          layout="responsive"
        />
      </div>
    </div>
  </footer>
}
