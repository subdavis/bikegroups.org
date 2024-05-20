// an announcement has a link and a description
export default function Announcement(
  params: { link: string, description: string }
) {
  return <div className="flex items-center bg-yellow-50 p-3 rounded my-4 border-l-4 border-yellow-400">
    <span className="text-3xl">📢</span>
    <p className="px-3 text-sm">
      <span>{params.description} </span>
      <a className="block font-semibold" href={params.link}>Read the announcement.</a>
    </p>
    
  </div>
}