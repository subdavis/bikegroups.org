import LinkPile from './linkPile';
import Org from './org';
import Quote from './quote';

export default function Home() {
  return (
    <main> 
      <Org
        name="Angry Catfish Group Rides"
        quote="Want to discover great local bike routes? We'd love to ride with you. Here you'll find shop rides, events, and fun biking things we're part of. Explore some of our favorites on our Strave Club page. Riding bikes is about the fun, the adventure, and the stories we’re left with when we get home. We hope you feel the same way."
        description="Lots of different options for shop rides ranging from speedy to gravely to social."
        image="/images/acf.jpg"
        website='https://www.angrycatfishbicycle.com/articles/group-rides-events-pg260.htm'
      />
      <Org
        name="Behind Bars Social Rides"
        description="Rides lead by Behind Bars Bicycle Shop ambassadors."
        image="/images/behind-bars.jpg"
        facebook='https://www.facebook.com/BehindBarsBicycleShopMN/events'
        instagram='https://www.instagram.com/behindbarsbicycleshop/'
        location="Northeast"
      />
      <Org
        name="Biking with Baddies"
        quote="Come bike with some Beautiful, Authentic, Divine, Determined, Intelligent, Energetic Sistas."
        image="/images/baddies.png"
        instagram="https://www.instagram.com/bikingwithbaddies/"
      />
      <Org
        name="Bone Saw Cycling Collective ⭐"
        days={['T']}
        quote="Making cycling better for all by improving its members skill in any and all cycling disciplines, while fostering a non-judgmental atmosphere."
        description={
          <span>
            Bone Saw rides on Tuesdays throughout the spring, summer, and early fall.  This group meets at the top of Martin Olav Sabo Bridge, and it’s one of the largest groups by ridership in the city. I’ve starred this group as really awesome, well organized, and safety-focused.  Watch our on their social channels for additional
            <a href="https://www.facebook.com/bonesawcyclingcollective/posts/pfbid0S8RVajVnXuSA3ajNfnWKEXuvzkBcqYo8GGFCDTf7zE3NpcGHDC4VhrNqC9JqGx51l">
              trans / gender non-conforming rides.
            </a>
          </span>
        }
        image="/images/bonesaw.jpg"
        instagram='https://www.instagram.com/bonesawcyclingcollective/'
        facebook='https://www.facebook.com/bonesawcyclingcollective/'
        location="Sabo Bridge"
      />
      <Org
        name="Corpse Whale Racing"
        quote="MPLS made cycling team. We race track, road, criteriums, cyclocross and endurance, party on bikes, and give back to our community."
        description="Racing team that also hosts regular social rides."
        image="/images/corpsewhale.jpg"
        days={['Th']}
        facebook='https://www.facebook.com/corpsewhaleracing/'
        instagram='https://www.instagram.com/corpsewhaleracing/'
      />
      <Org
        name="Cycle Sisters"
        quote="We host fun-ass themed bike rides while supporting Minneapolis businesses owned by women and BIPOC owners. BIPOC woman safe space. Open 2 all. "
        description="Get ride updates and notifications using the google form on their instagram page."
        image="/images/cyclesisters.jpg"
        facebook="https://www.facebook.com/CycleSistersMpls/"
        instagram="https://www.instagram.com/CycleSistersMpls/"
      />
      <Org
        name="Handup Social Series"
        description="Formerly Fulton Racing. The team is currently in a transition, but will probably continue to lead social rides in 2024. Watch their socials for updates."
        image="/images/handup.jpg"
        days={['Th']}
        facebook='https://www.facebook.com/handupracing'
        instagram='https://www.instagram.com/handupracing/'
        location="Northeast"
      />
      <Org
        name="Grease Rag"
        quote="Grease Rag encourages and empowers FTW (Femme/Trans/Women, Non-binary, Two-spirit) cyclists in a collaborative and fun learning environment through rides, discussions, shop nights and educational seminars in a safer space."
        website="https://greaserag.org/"
        instagram='https://www.instagram.com/greaseragbikes/'
        facebook='https://www.facebook.com/groups/greaserag'
        location='Seward'
        image='/images/greaserag.jpg'
      />
      <Org
        name="Freewheel Shop Rides"
        description="Regular rides that leave from various freewheel shops in the Twin Cities.  Various days and pace groups available."
        calendar="https://www.freewheelbike.com/about/shop-rides-pg37.htm"
        location='Multiple Locations'
      />
      <Org
        name="The Hub Cycling Team Rides"
        description='Hosts regular rides through the season on Wednesdays, usually ending at Arbiter or Bang Brewing'
        quote='The Hub Cycling Team is a group of like minded individuals who ride, race, work, and play together.'
        instagram='https://www.instagram.com/hubcyclingteam/'
        facebook='https://www.facebook.com/hubcyclingteam/'
        image='/images/hub.jpg'
        days={['W']}
      />
      <Org
        name="Joyful Riders Club"
        description="Regularly hosts social rides at a friendly pace. Monthly DJ rides and collaboration with Fulton Brewing."
        instagram='https://www.instagram.com/joyfulridersclub/'
        facebook='https://www.facebook.com/joyfulridersclub/'
        image='/images/joyful.jpg'
        days={['Th']}
      />
      <Org
        name="Major Taylor Bicycling Club"
        quote="As the premier African-American bicycling club in the state of Minnesota and the Upper Midwest, we have brought diversity to the bicycling community of the Twin Cities since 1999. We invite you to learn more about our Club and our namesake - the legendary Major Taylor - the first Black world champion cyclist in 1899."
        image="/images/majortaylor.jpg"
        website='https://major-taylor-minnesota.squarespace.com/'
        calendar='https://major-taylor-minnesota.squarespace.com/ride-schedule'
      />
      <Org
        name="Midwest Dirt Legion"
        quote="MIDWEST DIRT LEGION STRIVES TO CREATE AUTHENTIC AND INCLUSIVE SPACES FOR CISGENDER WOMEN, TRANSGENDER, NON-BINARY AND GENDER NON-CONFORMING FOLKS IN THE CYCLING COMMUNITY.  Since February of 2018, founders Ash Murray (they/them) and Steph Aich (she/her) have been coaching mountain bike skills sessions, hosting group rides, and educating folks on gender inclusive language. The MWDL crew continues to thrive through partnerships, community support and the ambassador program."
        image="/images/dirtlegion.jpg"
        website='https://www.dirtlegion.com/'
        calendar='https://www.dirtlegion.com/events'
        instagram='https://www.instagram.com/midwestdirtlegion/'
      />
      <Org
        name="Perennial Cycle Shop Rides"
        description="Perennial hosts and/or promotes all sorts of events.  Family fun rides, FTW rides, and 30 Days of Biking pastry rides.  Follow their instagram for event updates. Sometimes collaborates with Joyful Riders Club."
        instagram='https://www.instagram.com/perennialcycle/'
        facebook='https://www.facebook.com/perennialcycle/events'
        location='South Uptown'
      />
      <Org
        name="PieCyle Club"
        quote='MPLS Piecycle Club is a Minneapolis based cycling club focused on building fun and inviting biking experiences for riders of all levels. We organize chill (Pastry Pace), family-friendly group rides around Minneapolis that start and/or end with delicious baked goods.'
        website='https://pie.bike'
        instagram='https://www.instagram.com/piecycleclub/'
        image='/images/piecycle.jpg'
      />
      <Org
        name="Plymouth Bikes & Beer"
        days={['Th']}
        description="Medium to quick paced Thursday evening gravel rides that leave from Trailhead Plymouth and end at Luce Line Brewing."
        facebook='https://www.facebook.com/PlymouthBikesnBeers/'
        location='Plymouth, MN'
      />
      <Org
        name="Recovery Bike Shop"
        quote="Just a casual exploration of Northeast. No-drop pace. Expect about an hour of riding. We roll out from Recovery Bike Shop at 6:30. We're generally back at the shop around 8pm. Sometimes we get ice cream after."
        description={
          <>
            <h3 className='text-xl mb-2'>Coffee (Outside)</h3>
            <Quote>
              <span>Coffee (Outside) is our weekly excuse to start off the week on a bike. Everyone is always welcome. We’ll bring some treats to share. You bring you (and maybe a friend).</span>
            </Quote>
          </>
        }
        instagram='https://www.instagram.com/recoverybikeshop/'
        calendar='http://recovery.bike/events/'
        location='Northeast'
        image='/images/recovery.jpg'
        days={['Su']}
      />
      <Org
        name='Slow Roll Twin Cities'
        description='Slow Roll Twin Cities aims to challenge negative perceptions of the city and foster economic revitalization.'
        facebook='https://www.facebook.com/SlowRollTC/'
        location='Phillips'
        image='/images/slowroll.jpg'
      />
      <Org
        name="Stamina Racing Collective"
        quote='Stamina Racing Collective is a FTW (femme/trans/women) cycling team based in Minneapolis, MN that is working to diversify the sport of cycling through mentorship, improved accessibility, and community development.'
        image='/images/stamina.jpg'
        website='https://www.staminaracingcollective.com/'
        calendar='https://www.staminaracingcollective.com/calendar'
      />
      <Org
        name="Unruly Women"
        quote="My dream for Unruly Women is to create an inclusive and accessible community that empowers all female identifying and femme-leaning non-binary persons to reclaim their voice by unearthing their inner wild, outdoors."
        description="By participating in different adventures you’ll learn a variety of wilderness and sport specific skills in an environment where you can feel safe to discover your most authentic self and embrace all of it."
        website="https://www.unrulywomen.org/"
        instagram="https://www.instagram.com/unruly.women/"
        facebook="https://www.facebook.com/unruly.women.outdoors"
      />
      <Org
        name='Utepils Cycling ⭐'
        days={['W', 'Su']}
        description={
          <>
            <h3 className='text-xl mb-3'>Sunday Morning Rides</h3>
            <Quote>
            Beers. Bikes. Community. That’s the goal of Utepils Cycling Friends. Utepils Brewery is steps from over 15 miles of mountain bike trails and hundreds of miles of trails and routes for road cycling. We aim to create a place where cyclists can increase their skill and get out cycling in a relaxing and fun atmosphere.
            </Quote>
            <p className="my-3">All ride organization happens in the facebook group (below).</p>
            <h3 className='text-xl mb-3'>Utepils Women’s Wednesday Rides</h3>
            <p className="mb-3">Organized in the same facebook group.</p>
          </>
        }
        facebook='https://www.facebook.com/utepilscycling/'
        location='Theodore Wirth Park'
        image='/images/utepils.jpg'
      />

      <hr />

      <LinkPile
        title="💬 Discussion"
        links={[
          { href: 'https://www.reddit.com/r/CyclingMSP/', text: 'r/CyclingMSP' },
          { href: 'https://www.facebook.com/groups/TCMNBikeTalk', text: 'TCMN Bike Talk' },
          { href: 'https://www.facebook.com/groups/451259884926066/', text: 'Minnesota Bike Camping and Bikepacking' },
          { href: 'https://www.facebook.com/groups/TwinCitiesBicycleTradingPost', text: 'Twin Cities Bicycle Trading Post' },
        ]}
      />

      <LinkPile
        title="📝 Blogs"
        links={[
          { href: 'https://mnbiketrailnavigator.blogspot.com/', text: 'MN Trail Navigator', icon: '⭐' },
          { href: 'https://mplsbikelove.com/', text: 'MPLS Bike Love' },
          { href: 'https://bikejerks.com/', text: 'bikejerks' },
          { href: 'https://carsrcoffins.com/', text: 'cars r coffins' },
        ]}
      />

      <LinkPile
        title="🌅 Instagram"
        links={[
          { href: "https://www.instagram.com/mncyclingfederation/", text: 'MN Cycling Federation' },
          { href: "https://www.instagram.com/caketeamracing/", text: 'Cake Team Racing' },
          { href: "https://www.instagram.com/thimbleweedbikebags" , text: 'Thimbleweed Bike Bags' },
          { href: "https://www.instagram.com/30daysofbiking" , text: '30 Days of Biking' },
          { href: "https://www.instagram.com/genosack/" , text: 'genosack' },
          { href: "https://www.instagram.com/sevenspokesbike", text: 'Seven Spokes Bike Shop' },
          { href: "https://www.instagram.com/mnrandonneurs/", text: "MN Randonneurs" },
        ]}
      />
    </main>
  );
}