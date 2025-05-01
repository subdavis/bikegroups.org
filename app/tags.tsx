import clsx from "clsx";
import { OrgTags } from "./orgTags";

export const TagDescriptions: Record<OrgTags, string> = {
    [OrgTags.Everything]: 'All groups',
    [OrgTags.TRAINING]: 'These groups offer faster paced rides.',
    [OrgTags.SOCIAL]: 'Social rides for when you\'re just looking for a cruise with friends and maybe a beverage or some snacks at the end.',
    [OrgTags.MOUNTAIN]: 'Groups that offer mountain biking, often on singletrack at a local park like Theodore Wirth.',
    [OrgTags.MEMBERS_ONLY]: 'Groups tagged "members-only" have at lease some rides restricted to dues-paying members. They may also have open rides, check with the group for details.',
    [OrgTags.FAMILY]: 'Groups that specifically advertise family-friendly rides.',
    [OrgTags.FTW]: 'Groups tagged "FTW" (Femme, Trans, Women) have at lease one ride or activity advertised as such. They might have other open rides, check with the group for details.',
}

const tagColors = {
    [OrgTags.Everything]: '[--tag-bg:theme(colors.stone.900)]',
    [OrgTags.TRAINING]: '[--tag-bg:theme(colors.blue.500)]',
    [OrgTags.SOCIAL]: '[--tag-bg:theme(colors.green.500)]',
    [OrgTags.MOUNTAIN]: '[--tag-bg:theme(colors.red.500)]',
    [OrgTags.MEMBERS_ONLY]: '[--tag-bg:theme(colors.yellow.500)]',
    [OrgTags.FAMILY]: '[--tag-bg:theme(colors.purple.500)]',
    [OrgTags.FTW]: '[--tag-bg:theme(colors.orange.500)]',
}

const tagSoftBgColors = {
    [OrgTags.Everything]: '[--tag-soft-bg:theme(colors.stone.50)]',
    [OrgTags.TRAINING]: '[--tag-soft-bg:theme(colors.blue.50)]',
    [OrgTags.SOCIAL]: '[--tag-soft-bg:theme(colors.green.50)]',
    [OrgTags.MOUNTAIN]: '[--tag-soft-bg:theme(colors.red.50)]',
    [OrgTags.MEMBERS_ONLY]: '[--tag-soft-bg:theme(colors.yellow.50)]',
    [OrgTags.FAMILY]: '[--tag-soft-bg:theme(colors.purple.50)]',
    [OrgTags.FTW]: '[--tag-soft-bg:theme(colors.orange.50)]',
}

export function TagDot(params: { tag: OrgTags, className?: string }) {
    const linkTarget = params.tag === OrgTags.Everything ? '/' : `/tags/${params.tag}`;
    return <a 
        className={clsx(
            'rounded-full w-5 h-5',
            'group relative',
            tagColors[params.tag],
            'bg-[var(--tag-bg)]',
            params.className,
        )} 
        href={linkTarget}
        role="button"
        aria-label={`Filter by ${params.tag} tag`}
        aria-pressed={params.tag === OrgTags.Everything ? undefined : "false"}
    >
        <span className="
            absolute bottom-full left-1/2 -translate-x-1/2 mb-2
            px-1 py-0 rounded
            bg-stone-900 text-white text-sm
            opacity-0 group-hover:opacity-100
            transition-opacity duration-75
            whitespace-nowrap
            pointer-events-none
        " aria-hidden="true">
            {params.tag}
        </span>
    </a>
}

export function Tag(params: { tag: OrgTags, active: boolean, className?: string }) {
    const linkTarget = params.tag === OrgTags.Everything ? '/' : `/tags/${params.tag}`;

    return (
        <a href={linkTarget} 
            className={clsx(
                'rounded-md px-2 text-xl',
                'border-2 no-underline font-bold',
                tagColors[params.tag],
                tagSoftBgColors[params.tag],
                !params.active && [
                    'bg-[var(--tag-soft-bg)]',
                    'text-stone-900',
                    'border-[var(--tag-bg)]'
                ],
                params.active && [
                    'bg-[var(--tag-bg)]',
                    'text-white',
                    'border-transparent',
                ],
                params.className,
            )}
            role="button"
            aria-label={`Filter by ${params.tag} tag`}
            aria-pressed={params.active ? "true" : "false"}
        >
            <span>{params.tag}</span>
        </a>
    )
}

export function TagNavigator(params: { activeTag?: OrgTags, className?: string }) {
    const allTags = Object.values(OrgTags);
    const activeTag = params.activeTag ?? OrgTags.Everything;
    return <nav 
        className={clsx('flex flex-wrap', params.className)}
        aria-label="Filter organizations by tag"
    >
        {allTags.map(tag => <Tag key={tag} tag={tag} active={tag === activeTag} className="mr-2 mb-2" />)}
    </nav>
}

export function TagPageHeader(params: { tag: OrgTags }) {
    return <>
        <p className="text-stone-900">{TagDescriptions[params.tag]}</p>
    </>
}
