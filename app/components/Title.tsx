import { OrganizationParams } from "../Organization";

export function Title(params: OrganizationParams) {
  return (
    <h3 className="mb-2 flex items-center flex-wrap">
      <span className="text-xl font-semibold px-2 bg-stone-900 text-white rounded mr-2">
        {params.name}
      </span>
      {params.verified && (
        <span className="text-xs font-semibold text-stone-100 bg-green-600 border-2 border-green-800 px-2 py-0 my-1 rounded-full">
          ✔ verified
        </span>
      )}
    </h3>
  );
}
