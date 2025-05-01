import { OrgParams } from './org';
import { OrgTags } from './orgTags';
import Quote from './quote';

export default function OrgList(): OrgParams[] {
  return [
    {
      name: 'Angry Catfish Group Rides',
      days: ['M', 'W', 'Th'],
      tags: [OrgTags.TRAINING, OrgTags.SOCIAL],
      quote:
        "Want to discover great local bike routes? We'd love to ride with you. Here you'll find shop rides, events, and fun biking things we're part of. Explore some of our favorites on our Strave Club page. Riding bikes is about the fun, the adventure, and the stories we're left with when we get home. We hope you feel the same way.",
      description:
        'ACF hosts a Monday speedy training ride, a wednesday social open ride, and a thursday FTW social ride. Check their website for the details.',
      image: '/images/Angry_Catfish_Group.jpg',
      eager: true,
      instagram: 'https://www.instagram.com/angrycatfish/',
      website: 'https://www.angrycatfishbicycle.com/articles/group-rides-events-pg260.htm',
    },
    {
      name: 'All Bodies on Bikes Minneapolis',
      tags: [OrgTags.SOCIAL],
      quote:
        'A cycling community in the twin cities that celebrates cycling diversity and inclusivity with joyful rides for all bodies.',
      description:
        'All Bodies on Bikes is a movement to create and foster a size inclusive bike community. The Minneapolis chapter was established in 2025.',
      image: '/images/All_Bodies_On_Bikes.png',
      eager: true,
      website: 'https://www.allbodiesonbikes.com/',
      instagram: 'https://www.instagram.com/abob_mpls/',
    },
    {
      name: 'Behind Bars Social Rides',
      tags: [OrgTags.SOCIAL],
      description: (
        <p>
          Rides lead by Behind Bars Bicycle Shop ambassadors leave from the shop and are announced
          on instagram.
        </p>
      ),
      image: 'images/Behind_Bars_Ambassador_Solstice.jpg',
      facebook: 'https://www.facebook.com/BehindBarsBicycleShopMN/events',
      instagram: 'https://www.instagram.com/behindbarsbicycleshop/',
      location: '13th Ave Northeast',
    },
    {
      name: 'Biking with Baddies',
      tags: [OrgTags.SOCIAL, OrgTags.FTW, OrgTags.FAMILY, OrgTags.MEMBERS_ONLY],
      days: ['F'],
      quote:
        'Our mission is to empower women in cycling, harnessing the strength of nature and the bonds of community to pave the way for change. We believe that by embracing the beauty of diversity we can achieve unity on open road. Our wheels turn not only to conquer miles, but also to break down barriers.',
      description: (
        <p>
          All kinds of events, from rides to workshops and even violence prevention training with
          collaborators.{' '}
          <a href="https://www.instagram.com/p/DJHYNPsRQtW">
            Serene Spins on Sundays for women & children only
          </a>
          .
        </p>
      ),
      image: '/images/Biking_With_Baddies_Group.png',
      instagram: 'https://www.instagram.com/bikingwithbaddies/',
      website: 'https://linktr.ee/beautifullysea',
      calendar: 'https://bikingwithbaddies.com/calendar',
    },
    {
      name: 'Bone Saw Cycling Collective',
      days: ['T'],
      tags: [OrgTags.SOCIAL],
      quote:
        'Making cycling better for all by improving its members skill in any and all cycling disciplines, while fostering a non-judgmental atmosphere.',
      description:
        "Bone Saw rides on the last Tuesday of each month all year long and meets at the top of Martin Olav Sabo Bridge. It's one of the larger groups by ridership in the city. Follow their social channels for additional trans/GNC rides.",
      image: '/images/Bonesaw_Cycling_Collective_Bridge_Photo.jpg',
      instagram: 'https://www.instagram.com/bonesawcyclingcollective/',
      facebook: 'https://www.facebook.com/bonesawcyclingcollective/',
      location: 'Sabo Bridge',
    },
    {
      name: 'Corpse Whale Racing',
      quote:
        'MPLS made cycling team. We race track, road, criteriums, cyclocross and endurance, party on bikes, and give back to our community.',
      description: (
        <p>
          Keep an eye out for the{' '}
          <a href="https://www.instagram.com/corpsewhaleracing/p/C-vpFFUs5jp/">Taco Bell Century</a>{' '}
          in the fall.
        </p>
      ),
      image: '/images/Corpse_Whale_Racing_Team.jpg',
      facebook: 'https://www.facebook.com/corpsewhaleracing/',
      instagram: 'https://www.instagram.com/corpsewhaleracing/',
    },
    {
      name: 'EZ Bike Club',
      days: ['T'],
      tags: [OrgTags.SOCIAL],
      quote:
        'El Zapatero was started because of our love and passion for style, fashion, sneakers and the exclusivity that came along with it. The sneaker and fashion community welcomed us with open arms and within that community we noticed a group of individuals who also had a love and passion for cycling, health and fitness. We decided to get this group of individuals together for bicycle rides.',
      description: (
        <p>
          Rides on the first Tuesday of the month throughout the summer{' '}
          <a href="https://www.instagram.com/p/DJEtdhkOkvc/?utm_source=ig_web_copy_link">
            were announced
          </a>
          .
        </p>
      ),
      image: '/images/EZ_poster.jpg',
      instagram: 'https://www.instagram.com/ez.bikeclub/',
      website: 'https://www.ezbikeclub.org/',
    },
    {
      name: 'Handup Social Series',
      tags: [OrgTags.SOCIAL],
      quote:
        'twin cities bike team that supports dirt-focused racers, hosts community rides, and shows up to events with heckles, handups, and cheers 🍻',
      description: (
        <p>
          The team leads themed Thursday social rides that start at Behind Bars and typically end at
          Bauhaus Brewery.{' '}
          <a href="https://www.facebook.com/handupracing/events">2025 ride calendar is out</a>
        </p>
      ),
      image: '/images/Behind_Bars_Bike_Shop.jpg',
      days: ['Th'],
      facebook: 'https://www.facebook.com/handupracing',
      instagram: 'https://www.instagram.com/handupracing/',
      location: 'Northeast',
    },
    {
      name: 'Geno Summer Mondays',
      tags: [OrgTags.SOCIAL],
      days: ['M'],
      quote:
        'Our events are for people who love experiencing bicycles, outdoor spaces, and unity.  We take pride in creating an environment of inclusivity, respect, and fun for all people of all abilities.',
      description: (
        <p>
          <a href="https://www.instagram.com/p/DH9Xv7vpE4D">Monthly Monday rides for 2025</a> are
          happening once again.
        </p>
      ),
      instagram: 'https://www.instagram.com/geno_atb/',
      image: '/images/Geno_poster.jpg',
    },
    {
      name: 'Grease Rag',
      tags: [OrgTags.FTW, OrgTags.SOCIAL],
      quote:
        'Grease Rag encourages and empowers FTW (Femme/Trans/Women, Non-binary, Two-spirit) cyclists in a collaborative and fun learning environment through rides, discussions, shop nights and educational seminars in a safer space.',
      description: <p>Events for 2025 have started to appear on their Instagram.</p>,
      website: 'https://greaserag.org/',
      instagram: 'https://www.instagram.com/greaseragbikes/',
      facebook: 'https://www.facebook.com/groups/greaserag',
      location: 'Seward',
      image: '/images/Grease_Rag_Group.jpg',
    },
    {
      name: 'Freewheel Shop Rides',
      days: ['M', 'W'],
      tags: [OrgTags.SOCIAL, OrgTags.TRAINING, OrgTags.MOUNTAIN],
      description:
        'Regular rides that leave from various freewheel shops in the Twin Cities. Various days and pace groups available.',
      calendar: 'https://www.freewheelbike.com/about/event-calendar-pg1200.htm',
      facebook: 'https://www.facebook.com/FreewheelBike/events',
      location: 'Multiple Locations',
      image: '/images/Freewheel.jpg',
    },
    {
      name: 'Joyful Riders Club',
      description: (
        <span>
          Meets year-round for family-friendly social rides at a casual (7–9mph) pace. Also hosts{' '}
          <a href="https://www.instagram.com/p/DHONlrPsWUB/">
            DJ dance rides for 2025 in collaboration with Perennial Cycle
          </a>
          . All events promoted on Facebook and Instagram.
        </span>
      ),
      tags: [OrgTags.SOCIAL, OrgTags.FAMILY],
      instagram: 'https://www.instagram.com/joyfulridersclub/',
      facebook: 'https://www.facebook.com/thejoyfulriders/',
      website: 'https://thejoyfulriders.club/',
      image: '/images/Joyful_Riders_Club.jpg',
      days: ['Th'],
      highlight: true,
    },
    {
      name: 'Major Taylor Bicycling Club',
      days: ['M', 'W', 'Sa'],
      tags: [OrgTags.SOCIAL, OrgTags.TRAINING],
      quote:
        'As the premier African-American bicycling club in the state of Minnesota and the Upper Midwest, we have brought diversity to the bicycling community of the Twin Cities since 1999. We invite you to learn more about our Club and our namesake - the legendary Major Taylor - the first Black world champion cyclist in 1899.',
      image: '/images/Major_Taylor_Cycling_Club.jpg',
      website: 'https://major-taylor-minnesota.squarespace.com/',
      instagram: 'https://www.instagram.com/majortaylorminnesota/',
      calendar: 'https://major-taylor-minnesota.squarespace.com/ride-schedule',
    },
    {
      name: 'Midwest Dirt Legion',
      tags: [OrgTags.MOUNTAIN, OrgTags.FTW, OrgTags.TRAINING],
      quote:
        'MIDWEST DIRT LEGION STRIVES TO CREATE AUTHENTIC AND INCLUSIVE SPACES FOR CISGENDER WOMEN, TRANSGENDER, NON-BINARY AND GENDER NON-CONFORMING FOLKS IN THE CYCLING COMMUNITY.  Since February of 2018, founders Ash Murray (they/them) and Steph Aich (she/her) have been coaching mountain bike skills sessions, hosting group rides, and educating folks on gender inclusive language. The MWDL crew continues to thrive through partnerships, community support and the ambassador program.',
      description: (
        <p>
          See their website for{' '}
          <a href="https://www.dirtlegion.com/group-ride-information">group rides</a>, skills
          clinics, and more.
        </p>
      ),
      image: '/images/Dirt_Legion_Cycling_Team.jpg',
      website: 'https://www.dirtlegion.com/',
      calendar: 'https://www.dirtlegion.com/events',
      instagram: 'https://www.instagram.com/midwestdirtlegion/',
    },
    {
      name: 'NOW Bikes',
      tags: [OrgTags.TRAINING, OrgTags.MOUNTAIN],
      days: ['Sa', 'Su', 'T', 'Th'],
      quote:
        "This is where the rubber meets the road. Join us on one of our signature group rides this season. Whether you're new to cycling or a seasoned vet, we have a ride that's right for you.",
      location: 'St Paul & Arden Hills',
      website: 'https://www.nowbikes-fitness.com/articles/rides-events-pg161.htm',
      description: 'Faster paced rides from both locations.',
      image: '/images/Now_Bikes_Group.jpg',
    },
    {
      name: 'Perennial Cycle Shop Rides',
      tags: [OrgTags.SOCIAL, OrgTags.FAMILY],
      description:
        'Perennial hosts and/or promotes all sorts of events.  Family fun rides, FTW rides, and 30 Days of Biking pastry rides.  Follow their instagram for event updates.',
      instagram: 'https://www.instagram.com/perennialcycle/',
      facebook: 'https://www.facebook.com/perennialcycle/events',
      image: '/images/Perennial_Queer_History_Ride.jpeg',
      location: 'South Uptown',
    },
    {
      name: 'PieCyle Club',
      tags: [OrgTags.SOCIAL, OrgTags.FAMILY],
      quote:
        'MPLS Piecycle Club is a Minneapolis based cycling club focused on building fun and inviting biking experiences for riders of all levels. We organize chill (Pastry Pace), family-friendly group rides around Minneapolis that start and/or end with delicious baked goods.',
      website: 'https://pie.bike',
      instagram: 'https://www.instagram.com/piecycleclub/',
      image: '/images/Pie_Cycle_Club.jpg',
    },
    {
      name: 'Recovery Bike Shop',
      description: (
        <>
          <h3 className="text-xl mb-2">Coffee (Outside)</h3>
          <Quote>
            <span>
              Coffee (Outside) is our weekly excuse to start off the week on a bike. Everyone is
              always welcome. We will bring some treats to share. You bring you (and maybe a
              friend).
            </span>
          </Quote>
        </>
      ),
      tags: [OrgTags.SOCIAL],
      instagram: 'https://www.instagram.com/recoverybikeshop/',
      calendar: 'http://recovery.bike/events/',
      location: 'Northeast',
      image: '/images/Recovery_Shop_Group.jpg',
      days: ['Su'],
    },
    {
      name: 'Slow Roll Twin Cities',
      tags: [OrgTags.SOCIAL],
      description:
        'Slow Roll Twin Cities aims to challenge negative perceptions of the city and foster economic revitalization.',
      facebook: 'https://www.facebook.com/SlowRollTC/',
      location: 'Phillips',
      image: '/images/Slow_Roll_Group.jpg',
    },
    {
      name: 'Sociable Cider Werks Group Rides',
      quote:
        'Sociable Group Rides will take place every Wednesday until the snow sticks. Wheels roll at 6pm. Keep an eye on our social media pages for any announcements regarding weather cancellations.',
      description: (
        <p>
          In partnership with Recovery Bike Shop. Wednesday rides for the season{' '}
          <a href="https://www.instagram.com/p/DHqlJ-CMc9b/">announced on instagram</a>
        </p>
      ),
      tags: [OrgTags.SOCIAL],
      facebook: 'https://www.facebook.com/groups/sociablerides/',
      instagram: 'https://www.instagram.com/sociablecider/',
      location: 'Northeast',
      image: '/images/Sociable_Cider_Werks_Group.jpg',
      days: ['W'],
    },
    {
      name: 'Stamina Racing Collective',
      tags: [OrgTags.FTW, OrgTags.TRAINING, OrgTags.MEMBERS_ONLY],
      quote:
        'Stamina Racing Collective is a FTW (femme/trans/women) cycling team based in Minneapolis, MN that is working to diversify the sport of cycling through mentorship, improved accessibility, and community development.',
      description: (
        <span>
          Stamina Racing has previously partnered with{' '}
          <a href="https://driftlessgravelcamp.com/">driftless gravel camp</a> in the spring to
          encourage and equip FTWNB riders to pursue gravel adventures.
        </span>
      ),
      image: '/images/Stamina_Racing_Collective_Group.jpg',
      instagram: 'https://www.instagram.com/stamina.racing.collective/',
    },
    {
      name: 'Stöke MTB',
      quote:
        'Stöke MTB empowers you to discover the joy of mountain biking in a fun, safe, and inclusive environment. Learn fundamental skills and level up your riding under the guidance of certified and insured instructors.',
      description: 'Paid skills clinics for all levels of mountain bikers.',
      image: '/images/Stoke_MTB.jpg',
      calendar: 'https://www.stoke-mtb.com/calendar',
      instagram: 'https://www.instagram.com/stoke.mtb/',
      tags: [OrgTags.MOUNTAIN, OrgTags.TRAINING, OrgTags.FTW],
    },
    {
      name: 'Team Recess',
      quote:
        'The Team Recess approach to racing and riding bikes is supportive, well-stocked with snacks, and fun. We love inviting our friends to play bikes. Recess is the time of day–no matter where you are in life–when you join with folx outside of boundaries set for you by work, school, and other obligations to play and work together and–of course–get the endorphins and the thrill going!',
      description: <p>2025 calendar is not yet announced.</p>,
      tags: [OrgTags.MEMBERS_ONLY, OrgTags.FTW],
      image: '/images/Team_Recess.jpg',
      website: 'https://www.teamrecessmpls.com/',
      instagram: 'https://www.instagram.com/team_recess/',
      facebook: 'https://www.facebook.com/teamrecess/',
    },
    {
      name: 'Twin Cities Cycling Coalition (T3C)',
      quote:
        'Connection and coordination amongst the cycling community at large in the Twin Cities to link rides, events, volunteers, and resources.',
      image: '/images/Twin_Cities_Cycling_Coalition.jpg',
      instagram: 'https://www.instagram.com/twin_cities_cycling_coalition/',
    },
    {
      name: 'Unruly Women',
      tags: [OrgTags.FTW, OrgTags.SOCIAL, OrgTags.MOUNTAIN, OrgTags.TRAINING],
      quote:
        'My dream for Unruly Women is to create an inclusive and accessible community that empowers all female identifying and femme-leaning non-binary persons to reclaim their voice by unearthing their inner wild, outdoors.',
      description:
        "By participating in different adventures you'll learn a variety of wilderness and sport specific skills in an environment where you can feel safe to discover your most authentic self and embrace all of it.",
      image: '/images/Unruly.jpeg',
      website: 'https://www.unrulywomen.org/',
      instagram: 'https://www.instagram.com/unruly.women/',
      facebook: 'https://www.facebook.com/unruly.women.outdoors',
    },
    {
      name: 'Utepils Cycling',
      tags: [OrgTags.SOCIAL, OrgTags.MOUNTAIN, OrgTags.TRAINING, OrgTags.FTW],
      days: ['W', 'Su'],
      quote:
        "Beers. Bikes. Community. That's the goal of Utepils Cycling Friends. Utepils Brewery is steps from over 15 miles of mountain bike trails and hundreds of miles of trails and routes for road cycling. We aim to create a place where cyclists can increase their skill and get out cycling in a relaxing and fun atmosphere.",
      description: (
        <>
          <p className="my-3">
            <span className="font-bold">Sunday Morning Rides:</span> Four pace groups, either
            Mountain or Road Biking. All riders meet up at Utepils Brewery afterward.
          </p>
          <p className="mb-3">
            <span className="font-bold">FTW Wednesday Ride:</span> Organized in the same facebook
            group.
          </p>
        </>
      ),
      facebook: 'https://www.facebook.com/groups/UtepilsCycling',
      location: 'Theodore Wirth Park',
      image: '/images/Utepils_Cycling_Full_Group.jpg',
      highlight: true,
    },
    {
      name: 'West River Racing Club',
      tags: [OrgTags.TRAINING, OrgTags.MEMBERS_ONLY, OrgTags.SOCIAL, OrgTags.FTW],
      days: ['Su'],
      quote:
        "West River Racing is Minnesota's largest USAC-affiliated adult bike racing club with more than 70 members. Founded in 2008 as Birchwood Bike and Racing Team, we are a Minneapolis / St. Paul based passionate group of cycling enthusiasts who enjoy all forms of group bike riding. Our journey, spanning over a decade, reflects our unwavering commitment to the joy of cycling.",
      description:
        'Typically 2 hours of riding at 15MPH average pace with a coffee stop. The sunday ride is open to all, and other weekly rides require a membership.',
      instagram: 'https://www.instagram.com/westriverracing/',
      website: 'https://westriverracing.bike/about',
      image: '/images/West_River_Racing_Coffee_Ride.jpg',
    },
  ];
}
