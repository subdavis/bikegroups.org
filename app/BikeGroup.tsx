import Image from "next/image";
import Quote from "./quote";
import WeekIndicator from "./weekIndicator";
import clsx from "clsx";
import Head from "next/head";
import { Title } from "./components/Title";
import { Day } from "./weekIndicator";
import { Link } from "./components/Link";

export interface BikeGroup {
  name: string;
  quote?: string | JSX.Element | React.ReactNode;
  description?: string | JSX.Element | React.ReactNode;
  image?: string;
  days?: Day[];
  instagram?: string;
  facebook?: string;
  website?: string;
  calendar?: string;
  location?: string;
  highlight?: boolean;
  verified?: boolean;
  active?: boolean;
}

export default function BikeGroup({ params }: { params: BikeGroup }) {
  return (
    params.active !== false && (
      <>
        <Head>
          <meta name="check-this" />
        </Head>
        <section
          className={clsx(
            "text-base sm:flex mb-16 border-2 border-black p-2 rounded-md",
            params.highlight &&
              "border-2 border-amber-400 bg-amber-50 p-4 rounded-lg"
          )}
        >
          {params.image && (
            <div className="sm:w-72 sm:pr-4 mb-2">
              <Image
                className="rounded shadow-xl"
                src={params.image + ".webp"}
                alt={params.name}
                width={600}
                height={400}
              />
            </div>
          )}
          <div className="flex-1">
            {Title(params)}
            {params.days && <WeekIndicator days={params.days} />}
            {params.quote && <Quote>{params.quote}</Quote>}
            <div className="my-4">
              {typeof params.description in ["string", "number", "boolean"] ? (
                <p>{params.description}</p>
              ) : (
                params.description
              )}
            </div>
            <div>
              {Link(params, "website")}
              {Link(params, "instagram")}
              {Link(params, "facebook")}
              {Link(params, "calendar")}
              {Link(params, "location")}
            </div>
          </div>
        </section>
      </>
    )
  );
}
