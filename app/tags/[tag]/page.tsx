import Organization from '@/app/org';
import OrgList from '@/app/orglist';
import { OrgTags } from '@/app/orgTags';
import { TagNavigator, TagPageHeader } from '@/app/tags';

export async function generateStaticParams() {
  const allTags = Object.values(OrgTags);
  return allTags.map((tag) => ({ tag: encodeURIComponent(tag) }));
}

export default async function Page({ params }: { params: Promise<{ tag: string }> }) {
  const tag = decodeURIComponent((await params).tag);
  const matching = OrgList().filter(
    (org) => org.tags?.includes(tag as OrgTags) || tag === OrgTags.Everything
  );

  return (
    <div>
      <div className="my-10">
        <TagNavigator activeTag={tag as OrgTags} className="mb-2" />
        <TagPageHeader tag={tag as OrgTags} />
      </div>
      {matching.map((org) => (
        <Organization key={org.name} {...org} />
      ))}
    </div>
  );
}
