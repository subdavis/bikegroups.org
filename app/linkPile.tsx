import LinkChip, { LinkParams } from "./linkChip";

export default function LinkPile(params: { title: string, links: LinkParams[]}) {
  return <section className="my-10">
    <h2 className="text-xl font-semibold mb-4">
      <span className="bg-stone-800 text-stone-100 px-2 py-1 rounded">
        {params.title}
      </span>
    </h2>
    <div className="flex flex-wrap">
      {params.links.map((l) => <LinkChip key={l.text} {...l} />)}
    </div>
  </section>
}