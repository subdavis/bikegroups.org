export interface LinkParams {
  href: string;
  icon?: string;
  text: string;
}

export default function LinkChip(params: LinkParams) {
  return <a
    className="whitespace-nowrap text-base px-3 py-1 mb-4 bg-stone-100 rounded-md mr-2 text-stone-900 hover:text-stone-950 hover:bg-stone-200 transition-all border border-stone-300 hover:border-stone-400"
    href={params.href}
    data-umami-event="click footer chip"
    data-umami-event-href={params.href}
    data-umami-event-name={params.text}>
    {params.icon} <span>{params.text}</span>
  </a>
}