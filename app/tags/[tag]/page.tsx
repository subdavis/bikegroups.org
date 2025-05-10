import Organization from '@/app/org';
import OrgList from '@/app/orglist';
import { OrgTags, TagName } from '@/app/orgTags';
import { TagDescriptions, TagNavigator, TagPageHeader } from '@/app/tags';
import { Metadata } from 'next';

export async function generateStaticParams() {
  const allTags = Object.values(OrgTags);
  return allTags.map((tag) => ({ tag }));
}

export async function generateMetadata({ params }: { params: Promise<{ tag: OrgTags }> }) {
  const { tag } = await params;
  return {
    title: `${TagName[tag]} | 2025 Minneapolis Bike Clubs`,
    description: `2025 Minneapolis Bike Clubs tagged as ${TagName[tag]}. ${TagDescriptions[tag]}`,
    alternates: {
      canonical: `https://bikegroups.org/tags/${tag}`,
      languages: {
        'en-US': `https://bikegroups.org/tags/${tag}`,
      },
    },
  };
}

export default async function Page({ params }: { params: Promise<{ tag: OrgTags }> }) {
  const { tag } = await params;
  const matching = OrgList().filter((org) => org.tags?.includes(tag) || tag === OrgTags.Everything);

  return (
    <div>
      <div className="my-10">
        <TagNavigator activeTag={tag} className="mb-2" />
        <TagPageHeader tag={tag} />
      </div>
      <main>
        {matching.map((org) => (
          <Organization key={org.name} {...org} />
        ))}
      </main>
    </div>
  );
}
