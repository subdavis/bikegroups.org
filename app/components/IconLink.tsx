import { linkIcons } from "../BikeGroup";
import { BikeGroup } from "../BikeGroup";
export function IconLink(params: BikeGroup, prop: keyof typeof linkIcons) {
  if (params[prop]) {
    if (params[prop]?.startsWith("http")) {
      return (
        <a
          className="inline-flex whitespace-nowrap inline-block mb-2 px-3 py-1 bg-stone-100 rounded-md mr-2 text-stone-900 hover:text-stone-950 hover:bg-stone-200 transition-all border border-stone-300 hover:border-stone-400"
          href={params[prop]}
        >
          {linkIcons[prop]} <span className="underline">{prop}</span>
        </a>
      );
    } else {
      return (
        <span className="inline-flex whitespace-nowrap pr-2 drop-shadow-lg">
          {linkIcons[prop]}
          {params[prop]}
        </span>
      );
    }
  }
}
