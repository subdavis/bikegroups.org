import { BikeGroup } from "../BikeGroup";

export const bikeGroups: { [bikeGroupName: string]: BikeGroup } = {
  AngryCatfish: {
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
  BehindBars: {
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
  BikingWithBaddies: {
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
  BoneSaw: {
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
  CorpseWhaleRacing: {
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
  CycleSisters: {
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
  EZBikeClub: {
    name: "EZ Bike Club",
    quote:
      "El Zapatero was started because of our love and passion for style, fashion, sneakers and the exclusivity that came along with it. The sneaker and fashion community welcomed us with open arms and within that community we noticed a group of individuals who also had a love and passion for cycling, health and fitness. We decided to get this group of individuals together for bicycle rides.",
    description:
      "Rides and other community engagement events announced through instagram.",
    image: "/images/EZ.jpeg",
    instagram: "https://www.instagram.com/ez.bikeclub/",
    website: "https://www.ezbikeclub.org/",
  },
  HandupSocialSeries: {
    name: "Handup Social Series",
    quote:
      "twin cities bike team that supports dirt-focused racers, hosts community rides, and shows up to events with heckles, handups, and cheers 🍻",
    description:
      "The team leads themed Thursday social rides that start at Behind Bars and typically end at Bauhaus Brewery.",
    image: "/images/Behind_Bars_Bike_Shop.jpg",
    days: ["Th"],
    facebook: "https://www.facebook.com/handupracing",
    instagram: "https://www.instagram.com/handupracing/",
    location: "Northeast",
  },
  Genosack: {
    name: "Genosack Summer Monday Rides",
    days: ["M"],
    quote:
      "Our events are for people who love experiencing bicycles, outdoor spaces, and unity.  We take pride in creating an environment of inclusivity, respect, and fun for all people of all abilities.",
    description: (
      <p>
        Monday summer group rides{" "}
        <a href="https://www.instagram.com/p/C6T9ZAcuekb">
          announced for the season on instagram
        </a>
        .
      </p>
    ),
    instagram: "https://www.instagram.com/genosack/",
    image: "/images/Genosack_Bikes_Leaning.jpeg",
  },
  GreaseRag: {
    name: "Grease Rag",
    quote:
      "Grease Rag encourages and empowers FTW (Femme/Trans/Women, Non-binary, Two-spirit) cyclists in a collaborative and fun learning environment through rides, discussions, shop nights and educational seminars in a safer space.",

    description: (
      <p>
        Annual FTW (femme/trans/women, non-binary, two-spirit) bikepacking trip
        to Carver State Park for all skill levels August 17-18{" "}
        <a href="https://www.instagram.com/p/C6SoQMuM0x-/">announcement</a>.
      </p>
    ),
    website: "https://greaserag.org/",
    instagram: "https://www.instagram.com/greaseragbikes/",
    facebook: "https://www.facebook.com/groups/greaserag",
    location: "Seward",
    image: "/images/Grease_Rag_Group.jpg",
  },
  FreeWheel: {
    name: "Freewheel Shop Rides",
    days: ["M", "W"],
    quote:
      "Regular rides that leave from various freewheel shops in the Twin Cities. Various days and pace groups available.",
    description:
      "Check their website for the schedule and details on the rides.",
    image: "/images/Freewheel_Bike_Shop.jpg",
    website: "https://www.freewheelbike.com/about/event-calendar-pg1200.htm",
    facebook: "https://www.facebook.com/FreewheelBike/events",
    location: "Multiple locations",
  },
  HubCycling: {
    name: "The Hub Cycling Team Rides",
    description: (
      <p>
        Hosts regular rides through the season on Wednesdays, usually starting
        from the Minnehaha Ave shop and ending at Arbiter or Bang Brewing.{" "}
        <a href="https://www.instagram.com/p/C691XQ0sLSa">
          Read the announcement.
        </a>
      </p>
    ),
    quote:
      "The Hub Cycling Team is a group of like minded individuals who ride, race, work, and play together.",
    instagram: "https://www.instagram.com/hubcyclingteam/",
    facebook: "https://www.facebook.com/hubcyclingteam/",
    image: "/images/The_Hub_Cycling_Team.jpg",
    days: ["W"],
    location: "Longfellow",
    active: false,
  },
  JoyfulRiders: {
    name: "Joyful Riders Club",
    description:
      "Meets year-round, the second Thursday of the month at Fulton Beer, for family-friendly social rides at a casual (7–9mph) pace. Also hosts regular DJ rides in collaboration with DJ Dev and Perennial Cycle. All events promoted on Facebook and Instagram.",
    instagram: "https://www.instagram.com/joyfulridersclub/",
    facebook: "https://www.facebook.com/thejoyfulriders/",
    image: "/images/Joyful_Riders_Club.jpg",
    days: ["Th"],
    highlight: true,
  },
  MajorTaylor: {
    name: "Major Taylor Bicycling Club",
    days: ["M", "W", "Sa"],
    quote:
      "As the premier African-American bicycling club in the state of Minnesota and the Upper Midwest, we have brought diversity to the bicycling community of the Twin Cities since 1999. We invite you to learn more about our Club and our namesake - the legendary Major Taylor - the first Black world champion cyclist in 1899.",
    image: "/images/Major_Taylor_Cycling_Club.jpg",
    website: "https://major-taylor-minnesota.squarespace.com/",
    instagram: "https://www.instagram.com/majortaylorminnesota/",
    calendar: "https://major-taylor-minnesota.squarespace.com/ride-schedule",
  },
  MidwestDirtLegion: {
    name: "Midwest Dirt Legion",
    quote:
      "MIDWEST DIRT LEGION STRIVES TO CREATE AUTHENTIC AND INCLUSIVE SPACES FOR CISGENDER WOMEN, TRANSGENDER, NON-BINARY AND GENDER NON-CONFORMING FOLKS IN THE CYCLING COMMUNITY.  Since February of 2018, founders Ash Murray (they/them) and Steph Aich (she/her) have been coaching mountain bike skills sessions, hosting group rides, and educating folks on gender inclusive language. The MWDL crew continues to thrive through partnerships, community support and the ambassador program.",
    description: (
      <p>
        See their website for{" "}
        <a href="https://www.dirtlegion.com/group-ride-information">
          group rides
        </a>
        , skills clinics, and more.
      </p>
    ),
    image: "/images/Midwest_Dirt_Legion.jpg",
    website: "https://www.dirtlegion.com/",
    calendar: "https://www.dirtlegion.com/events",
    instagram: "https://www.instagram.com/midwestdirtlegion/",
  },
  NowBikes: {
    name: "NOW Bikes",
    days: ["Sa", "Su", "T", "Th"],
    quote:
      "This is where the rubber meets the road. Join us on one of our signature group rides this season. Whether you're new to cycling or a seasoned vet, we have a ride that's right for you.",
    location: "St Paul & Arden Hills",
    website: "https://www.nowbikes-fitness.com/articles/rides-events-pg161.htm",
    description:
      "Faster paced rides from both locations. Check their website for the schedule.",
    image: "/images/Now_Bikes_Group.jpg",
  },
  PerennialCycle: {
    name: "Perennial Cycle Shop Rides",
    description:
      "Perennial hosts and/or promotes all sorts of events. Family fun rides, FTW rides, and 30 Days of Biking pastry rides. Follow their Instagram for event updates. Sometimes collaborates with Joyful Riders Club.",
    image: "/images/Perennial_Queer_History_Ride.jpeg",
    instagram: "https://www.instagram.com/perennialcycle/",
    facebook: "https://www.facebook.com/perennialcycle/events",
    location: "South Uptown",
  },
  PieCycle: {
    name: "Piecycle Club",
    quote:
      "MPLS Piecycle Club is a Minneapolis based cycling club focused on building fun and inviting biking experiences for riders of all levels. We organize chill (Pastry Pace), family-friendly group rides around Minneapolis that start and/or end with delicious baked goods.",
    description:
      "Check their website for the schedule and details on the rides.",
    image: "/images/Pie_Cycle_Club.jpg",
    website: "https://pie.bike",
    instagram: "https://www.instagram.com/piecycleclub/",
  },
  PlymouthBikesAndBeer: {
    name: "Plymouth Bikes & Beer",
    days: ["Th"],
    description:
      "Medium to quick paced Thursday evening gravel rides that leave from Trailhead Plymouth and end at Luce Line Brewing.",
    facebook: "https://www.facebook.com/PlymouthBikesnBeers/",
    location: "Plymouth, MN",
  },
  RecoveryBikeShop: {
    name: "Recovery Bike Shop",
    quote:
      "Just a casual exploration of Northeast. No-drop pace. Expect about an hour of riding. We roll out from Recovery Bike Shop at 6:30. We're generally back at the shop around 8pm. Sometimes we get ice cream after.",
    description: (
      <>
        <h3 className="text-xl mb-2">Coffee (Outside)</h3>
        <p>
          Coffee (Outside) is our weekly excuse to start off the week on a bike.
          Everyone is always welcome. We’ll bring some treats to share. You
          bring you (and maybe a friend).
        </p>
      </>
    ),
    instagram: "https://www.instagram.com/recoverybikeshop/",
    calendar: "http://recovery.bike/events/",
    location: "Northeast",
    image: "/images/Recovery_Shop_Group.jpg",
    days: ["Su"],
  },
  SlowRollTwinCities: {
    name: "Slow Roll Twin Cities",
    description:
      "Slow Roll Twin Cities aims to challenge negative perceptions of the city and foster economic revitalization.",
    facebook: "https://www.facebook.com/SlowRollTC/",
    location: "Phillips",
    image: "/images/Slow_Roll_Group.jpg",
  },
  SociableCiderWerks: {
    name: "Sociable Cider Werks Group Rides (SGR)",
    quote:
      "Sociable Group Rides will take place every Wednesday until the snow sticks. Wheels roll at 6pm. Keep an eye on our social media pages for any announcements regarding weather cancellations.",
    description: (
      <p>
        Wednesday rides for the season{" "}
        <a href="https://www.Instagram.com/p/C6YynDUACTy/">
          announced on Instagram
        </a>
      </p>
    ),
    facebook: "https://www.facebook.com/groups/sociablerides/",
    location: "Northeast",
    image: "/images/Sociable_Cider_Werks_Group.jpg",
    days: ["W"],
  },
  StaminaRacingCollective: {
    name: "Stamina Racing Collective",
    quote:
      "Stamina Racing Collective is a FTW (femme/trans/women) cycling team based in Minneapolis, MN that is working to diversify the sport of cycling through mentorship, improved accessibility, and community development.",
    description: (
      <span>
        Group rides have not yet been announced for 2024. Stamina Racing also
        partners with{" "}
        <a href="https://driftlessgravelcamp.com/">driftless gravel camp</a> in
        the spring to encourage and equip FTWNB riders to pursue gravel
        adventures.
      </span>
    ),
    image: "/images/Stamina_Racing_Collective_Group.jpg",
    website: "https://www.staminaracingcollective.com/",
    instagram: "https://www.instagram.com/stamina.racing.collective/",
    calendar: "https://www.staminaracingcollective.com/calendar",
  },
  TeamRecess: {
    name: "Team Recess",
    quote:
      "The Team Recess approach to racing and riding bikes is supportive, well-stocked with snacks, and fun. We love inviting our friends to play bikes. Recess is the time of day–no matter where you are in life–when you join with folx outside of boundaries set for you by work, school, and other obligations to play and work together and–of course–get the endorphins and the thrill going!",
    description: (
      <p>
        Group ride schedule for the season{" "}
        <a href="https://www.Instagram.com/team_recess/p/C71niXwOiq8">
          announced on Instagram
        </a>
        . Follow their socials for more details.
      </p>
    ),
    image: "/images/Team_Recess.jpg",
    website: "https://www.teamrecessmpls.com/",
    instagram: "https://www.instagram.com/team_recess/",
    facebook: "https://www.facebook.com/teamrecess/",
  },
  TwinCitiesCyclingCoalition: {
    name: "Twin Cities Cycling Coalition (T3C)",
    quote:
      "Connection and coordination amongst the cycling community at large in the Twin Cities to link rides, events, volunteers, and resources.",
    /* TODO update description */
    description: (
      <p>
        T3C Group Ride! 🚴🏽‍♀️ Oct. 27th 1pm. Open invitation to cyclists!
        Individuals, groups, teams, orgs, etc! Social pace.
      </p>
    ),
    image: "/images/Twin_Cities_Cycling_Coalition.jpg",
    instagram: "https://www.instagram.com/twin_cities_cycling_coalition/",
  },
  UnrulyWomen: {
    name: "Unruly Women",
    quote:
      "The dream for Unruly Women is to create an inclusive and accessible community that empowers all female identifying and femme-leaning non-binary persons to reclaim their voice by unearthing their inner wild, outdoors.",
    description:
      "By participating in different adventures you’ll learn a variety of wilderness and sport specific skills in an environment where you can feel safe to discover your most authentic self and embrace all of it.",
    image: "/images/Unruly.jpeg",
    website: "https://www.unrulywomen.org/",
    instagram: "https://www.Instagram.com/unruly.women/",
    facebook: "https://www.Facebook.com/unruly.women.outdoors",
  },
  UtepilsCycling: {
    name: "Utepils Cycling",
    days: ["W", "Su"],
    quote:
      "Beers. Bikes. Community. That’s the goal of Utepils Cycling Friends. Utepils Brewery is steps from over 15 miles of mountain bike trails and hundreds of miles of trails and routes for road cycling. We aim to create a place where cyclists can increase their skill and get out cycling in a relaxing and fun atmosphere.",
    description: (
      <>
        <h4 className="text-xl mb-3">Sunday Morning Rides</h4>
        <p className="my-3">
          Four pace groups, either Mountain or Road Biking. All riders meet up
          at Utepils Brewery afterward.
        </p>
        <h4 className="text-xl mb-3">Wednesday Women’s Rides</h4>
        <p className="mb-3">Organized in the same Facebook group.</p>
      </>
    ),
    facebook: "https://www.Facebook.com/groups/UtepilsCycling",
    location: "Theodore Wirth Park",
    image: "/images/Utepils_Cycling_Full_Group.jpg",
    highlight: true,
  },
  WestRiverRacingClub: {
    name: "West River Racing Club Sunday Coffee Ride",
    days: ["Su"],
    quote:
      "West River Racing is Minnesota’s largest USAC-affiliated adult bike racing club with more than 70 members. Founded in 2008 as Birchwood Bike and Racing Team, we are a Minneapolis / St. Paul based passionate group of cycling enthusiasts who enjoy all forms of group bike riding. Our journey, spanning over a decade, reflects our unwavering commitment to the joy of cycling.",
    description:
      "Typically 2 hours of riding at 15MPH average pace with a coffee stop. The sunday ride is open to all, and other weekly rides require a membership.",
    instagram: "https://www.Instagram.com/westriverracing/",
    website: "https://westriverracing.bike/about",
    location: "E Lake &amp; W River Road",
    image: "/images/West_River_Racing_Coffee_Ride.jpg",
  },
};
