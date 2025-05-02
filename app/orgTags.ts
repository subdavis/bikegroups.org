export enum OrgTags {
  Everything = 'Everything',
  FAMILY = 'Family',
  FTW = 'FTW',
  MEMBERS_ONLY = 'MembersOnly',
  MOUNTAIN = 'MountainBiking',
  SOCIAL = 'Social',
  TRAINING = 'Training',
}

export const TagName: Record<OrgTags, string> = {
  [OrgTags.Everything]: 'Everything',
  [OrgTags.FAMILY]: 'Family',
  [OrgTags.FTW]: 'FTW',
  [OrgTags.MEMBERS_ONLY]: 'Members Only',
  [OrgTags.MOUNTAIN]: 'Mountain Biking',
  [OrgTags.SOCIAL]: 'Social',
  [OrgTags.TRAINING]: 'Training',
};
