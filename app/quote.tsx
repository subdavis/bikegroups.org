export default function Quote(params: { children: JSX.Element | React.ReactNode}) {
  return <p className="border-l-4 rounded bg-stone-100 border-black border-solid pl-4 py-1 text-stone-950 border-stone-950	">
    &quot;{params.children}&quot;
  </p>
}