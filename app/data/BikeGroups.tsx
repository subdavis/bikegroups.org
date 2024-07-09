import { OrganizationParams } from "../Organization";

export let bikeGroups: Map<string, OrganizationParams> = new Map([
  [
    "AngryCatfish",
    {
      name: "Angry Catfish Group Rides",
      days: ["M", "W", "Th"],
      quote:
        "Want to discover great local bike routes? We'd love to ride with you. Here you'll find shop rides, events, and fun biking things we're part of. Explore some of our favorites on our Strave Club page. Riding bikes is about the fun, the adventure, and the stories we’re left with when we get home. We hope you feel the same way.",
      description:
        "ACF hosts a Monday speedy training ride, a wednesday social open ride, and a thursday FTW social ride. Check their website for the details.",
      image: "/images/Angry_Catfish_Group.jpg",
      website:
        "https://www.angrycatfishbicycle.com/articles/group-rides-events-pg260.htm",
    },
  ],
  [
    "BehindBars",
    {
      name: "Behind Bars Social Rides",
      description: (
        <p>
          Rides lead by Behind Bars Bicycle Shop ambassadors. This year Behind
          Bars shop ambassadors are also hosting{" "}
          <a href="https://www.instagram.com/behindbarsbicycleshop/p/C6r8q-ZsDyv/">
            a series of beginner bikepacking classes and trips
          </a>
          .
        </p>
      ),
      image: "images/Behind_Bars_Ambassador_Solstice.jpg",
      facebook: "https://www.facebook.com/BehindBarsBicycleShopMN/events",
      instagram: "https://www.instagram.com/behindbarsbicycleshop/",
      location: "13th Ave Northeast",
    },
  ],
  [
    "BikingWithBaddies",
    {
      name: "Biking with Baddies",
      days: ["F"],
      quote:
        "Come bike with some Beautiful, Authentic, Divine, Determined, Intelligent, Energetic Sistas.",
      description: (
        <p>
          Monthly Friday ride schedule for summer has been{" "}
          <a href="https://www.instagram.com/p/C6R5axsp5ID">
            announced on instagram
          </a>
          .
        </p>
      ),
      image: "/images/Biking_With_Baddies_Group.png",
      instagram: "https://www.instagram.com/bikingwithbaddies/",
    },
  ],
  [
    "BoneSaw",
    {
      name: "Bone Saw Cycling Collective",
      days: ["T"],
      quote:
        "Making cycling better for all by improving its members skill in any and all cycling disciplines, while fostering a non-judgmental atmosphere.",
      description:
        "Bone Saw rides on the last Tuesday of each month and meets at the top of Martin Olav Sabo Bridge. It’s one of the larger groups by ridership in the city. Follow their social channels for additional trans/GNC rides.",
      image: "/images/Bonesaw_Cycling_Collective_Bridge_Photo.jpg",
      instagram: "https://www.instagram.com/bonesawcyclingcollective/",
      facebook: "https://www.facebook.com/bonesawcyclingcollective/",
      location: "Sabo Bridge",
      highlight: true,
    },
  ],
  [
    "CorpseWhaleRacing",
    {
      name: "Corpse Whale Racing",
      quote:
        "MPLS made cycling team. We race track, road, criteriums, cyclocross and endurance, party on bikes, and give back to our community.",
      description:
        "Racing team that has hosted social rides in the past and might try some clinics or skills sessions this year. Follow their socials for updates!",
      image: "/images/Corpse_Whale_Racing_Team.jpg",
      days: ["Th"],
      facebook: "https://www.facebook.com/corpsewhaleracing/",
      instagram: "https://www.instagram.com/corpsewhaleracing/",
    },
  ],
  [
    "CycleSisters",
    {
      name: "Cycle Sisters",
      quote:
        "We host fun-ass themed bike rides while supporting Minneapolis businesses owned by women and BIPOC owners. BIPOC woman safe space. Open 2 all. ",
      description:
        "Get ride updates and notifications using the google form on their instagram page.",
      image: "/images/Cycle_Sisters_Minneapolis.jpg",
      facebook: "https://www.facebook.com/CycleSistersMpls/",
      instagram: "https://www.instagram.com/CycleSistersMpls/",
      active: false,
    },
  ],
]);
