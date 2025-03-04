import { BikeGroup } from "../BikeGroup";

export let bikeGroups: Map<string, BikeGroup> = new Map([
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
          <a href="https://www.Instagram.com/behindbarsbicycleshop/p/C6r8q-ZsDyv/">
            a series of beginner bikepacking classes and trips
          </a>
          .
        </p>
      ),
      image: "images/Behind_Bars_Ambassador_Solstice.jpg",
      Facebook: "https://www.Facebook.com/BehindBarsBicycleShopMN/events",
      Instagram: "https://www.Instagram.com/behindbarsbicycleshop/",
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
          <a href="https://www.Instagram.com/p/C6R5axsp5ID">
            announced on Instagram
          </a>
          .
        </p>
      ),
      image: "/images/Biking_With_Baddies_Group.png",
      Instagram: "https://www.Instagram.com/bikingwithbaddies/",
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
      Instagram: "https://www.Instagram.com/bonesawcyclingcollective/",
      Facebook: "https://www.Facebook.com/bonesawcyclingcollective/",
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
      Facebook: "https://www.Facebook.com/corpsewhaleracing/",
      Instagram: "https://www.Instagram.com/corpsewhaleracing/",
    },
  ],
  [
    "CycleSisters",
    {
      name: "Cycle Sisters",
      quote:
        "We host fun-ass themed bike rides while supporting Minneapolis businesses owned by women and BIPOC owners. BIPOC woman safe space. Open 2 all. ",
      description:
        "Get ride updates and notifications using the google form on their Instagram page.",
      image: "/images/Cycle_Sisters_Minneapolis.jpg",
      Facebook: "https://www.Facebook.com/CycleSistersMpls/",
      Instagram: "https://www.Instagram.com/CycleSistersMpls/",
      active: false,
    },
  ],
  [
    "EZBikeClub",
    {
      name: "EZ Bike Club",
      quote:
        "El Zapatero was started because of our love and passion for style, fashion, sneakers and the exclusivity that came along with it. The sneaker and fashion community welcomed us with open arms and within that community we noticed a group of individuals who also had a love and passion for cycling, health and fitness. We decided to get this group of individuals together for bicycle rides.",
      description:
        "Rides and other community engagement events announced through Instagram.",
      image: "/images/EZ.jpeg",
      Instagram: "https://www.Instagram.com/ez.bikeclub/",
      website: "https://www.ezbikeclub.org/",
    },
  ],
  [
    "HandupSocialSeries",
    {
      name: "Handup Social Series",
      quote:
        "twin cities bike team that supports dirt-focused racers, hosts community rides, and shows up to events with heckles, handups, and cheers 🍻",
      description:
        "The team leads themed Thursday social rides that start at Behind Bars and typically end at Bauhaus Brewery.",
      image: "/images/Behind_Bars_Bike_Shop.jpg",
      days: ["Th"],
      Facebook: "https://www.Facebook.com/handupracing",
      Instagram: "https://www.Instagram.com/handupracing/",
      location: "Northeast",
    },
  ],
  [
    "Genosack",
    {
      name: "Genosack Summer Monday Rides",
      days: ["M"],
      quote:
        "Our events are for people who love experiencing bicycles, outdoor spaces, and unity.  We take pride in creating an environment of inclusivity, respect, and fun for all people of all abilities.",
      description: (
        <p>
          Monday summer group rides{" "}
          <a href="https://www.Instagram.com/p/C6T9ZAcuekb">
            announced for the season on Instagram
          </a>
          .
        </p>
      ),
      Instagram: "https://www.Instagram.com/genosack/",
      image: "/images/Genosack_Bikes_Leaning.jpeg",
    },
  ],
  /**
   * 
      <Org
        name="Grease Rag"
        quote="Grease Rag encourages and empowers FTW (Femme/Trans/Women, Non-binary, Two-spirit) cyclists in a collaborative and fun learning environment through rides, discussions, shop nights and educational seminars in a safer space."
        description={
          <p>
            Annual FTW (femme/trans/women, non-binary, two-spirit) bikepacking
            trip to Carver State Park for all skill levels August 17-18{" "}
            <a href="https://www.Instagram.com/p/C6SoQMuM0x-/">announcement</a>.
          </p>
        }
        website="https://greaserag.org/"
        Instagram="https://www.Instagram.com/greaseragbikes/"
        Facebook="https://www.Facebook.com/groups/greaserag"
        location="Seward"
        image="/images/Grease_Rag_Group.jpg"
      />
   */
  [
    "GreaseRag",
    {
      name: "Grease Rag",
      quote:
        "Grease Rag encourages and empowers FTW (Femme/Trans/Women, Non-binary, Two-spirit) cyclists in a collaborative and fun learning environment through rides, discussions, shop nights and educational seminars in a safer space.",

      description: (
        <p>
          Annual FTW (femme/trans/women, non-binary, two-spirit) bikepacking
          trip to Carver State Park for all skill levels August 17-18{" "}
          <a href="https://www.Instagram.com/p/C6SoQMuM0x-/">announcement</a>.
        </p>
      ),
      website: "https://greaserag.org/",
      Instagram: "https://www.Instagram.com/greaseragbikes/",
      Facebook: "https://www.Facebook.com/groups/greaserag",
      location: "Seward",
      image: "/images/Grease_Rag_Group.jpg",
    },
  ],
]);
