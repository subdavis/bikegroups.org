import { bikeGroups } from "./data/BikeGroups";
import LinkPile from "./linkPile";
import Org, { BikeGroup } from "./BikeGroup";
import Quote from "./quote";
import Select from "react-select";
// import { useState } from "react";
import WeekIndicator from "./weekIndicator";

function getDefaultParams(): BikeGroup {
  return {
    name: "Default Name",
  };
}
export default function Home() {
  return (
    <main>
      <WeekIndicator days={[]} />
      {Object.entries(bikeGroups).map(([key, group]) => (
        <Org key={key} params={group || getDefaultParams()} />
      ))}
      {/*
      <Org
        name="PieCyle Club"
        quote="MPLS Piecycle Club is a Minneapolis based cycling club focused on building fun and inviting biking experiences for riders of all levels. We organize chill (Pastry Pace), family-friendly group rides around Minneapolis that start and/or end with delicious baked goods."
        website="https://pie.bike"
        Instagram="https://www.Instagram.com/piecycleclub/"
        image="/images/Pie_Cycle_Club.jpg"
      />
      <Org
        name="Plymouth Bikes & Beer"
        days={["Th"]}
        description="Medium to quick paced Thursday evening gravel rides that leave from Trailhead Plymouth and end at Luce Line Brewing."
        Facebook="https://www.Facebook.com/PlymouthBikesnBeers/"
        location="Plymouth, MN"
      />
      <Org
        name="Recovery Bike Shop"
        quote="Just a casual exploration of Northeast. No-drop pace. Expect about an hour of riding. We roll out from Recovery Bike Shop at 6:30. We're generally back at the shop around 8pm. Sometimes we get ice cream after."
        description={
          <>
            <h3 className="text-xl mb-2">Coffee (Outside)</h3>
            <Quote>
              <span>
                Coffee (Outside) is our weekly excuse to start off the week on a
                bike. Everyone is always welcome. We’ll bring some treats to
                share. You bring you (and maybe a friend).
              </span>
            </Quote>
          </>
        }
        Instagram="https://www.Instagram.com/recoverybikeshop/"
        calendar="http://recovery.bike/events/"
        location="Northeast"
        image="/images/Recovery_Shop_Group.jpg"
        days={["Su"]}
      />
      <Org
        name="Slow Roll Twin Cities"
        description="Slow Roll Twin Cities aims to challenge negative perceptions of the city and foster economic revitalization."
        Facebook="https://www.Facebook.com/SlowRollTC/"
        location="Phillips"
        image="/images/Slow_Roll_Group.jpg"
      />
      <Org
        name="Sociable Cider Werks Group Rides (SGR)"
        quote="Sociable Group Rides will take place every Wednesday until the snow sticks. Wheels roll at 6pm. Keep an eye on our social media pages for any announcements regarding weather cancellations."
        description={
          <p>
            Wednesday rides for the season{" "}
            <a href="https://www.Instagram.com/p/C6YynDUACTy/">
              announced on Instagram
            </a>
          </p>
        }
        Facebook="https://www.Facebook.com/groups/sociablerides/"
        location="Northeast"
        image="/images/Sociable_Cider_Werks_Group.jpg"
        days={["W"]}
      />
      <Org
        name="Stamina Racing Collective"
        quote="Stamina Racing Collective is a FTW (femme/trans/women) cycling team based in Minneapolis, MN that is working to diversify the sport of cycling through mentorship, improved accessibility, and community development."
        description={
          <span>
            Group rides have not yet been announced for 2024. Stamina Racing
            also partners with{" "}
            <a href="https://driftlessgravelcamp.com/">driftless gravel camp</a>{" "}
            in the spring to encourage and equip FTWNB riders to pursue gravel
            adventures.
          </span>
        }
        image="/images/Stamina_Racing_Collective_Group.jpg"
        website="https://www.staminaracingcollective.com/"
        Instagram="https://www.Instagram.com/stamina.racing.collective/"
        calendar="https://www.staminaracingcollective.com/calendar"
      />
      <Org
        name="Team Recess"
        quote="The Team Recess approach to racing and riding bikes is supportive, well-stocked with snacks, and fun. We love inviting our friends to play bikes. Recess is the time of day–no matter where you are in life–when you join with folx outside of boundaries set for you by work, school, and other obligations to play and work together and–of course–get the endorphins and the thrill going!"
        description={
          <p>
            Group ride schedule for the season is{" "}
            <a href="https://www.Instagram.com/team_recess/p/C71niXwOiq8">
              announced on Instagram
            </a>
            . Follow their socials for more details.
          </p>
        }
        image="/images/Team_Recess.jpg"
        website="https://www.teamrecessmpls.com/"
        Instagram="https://www.Instagram.com/team_recess/"
        Facebook="https://www.Facebook.com/teamrecess/"
      />
      <Org
        name="Twin Cities Cycling Coalition (T3C)"
        quote="Connection and coordination amongst the cycling community at large in the Twin Cities to link rides, events, volunteers, and resources."
        image='/images/Twin_Cities_Cycling_Coalition.jpg'
        description={
          <p>T3C Group Ride! 🚴🏽‍♀️ Oct. 27th 1pm. Open invitation to cyclists! Individuals, groups, teams, orgs, etc! Social pace.</p>
        }
        instagram='https://www.instagram.com/twin_cities_cycling_coalition/'
      />
      <Org
        name="Unruly Women"
        quote="My dream for Unruly Women is to create an inclusive and accessible community that empowers all female identifying and femme-leaning non-binary persons to reclaim their voice by unearthing their inner wild, outdoors."
        description="By participating in different adventures you’ll learn a variety of wilderness and sport specific skills in an environment where you can feel safe to discover your most authentic self and embrace all of it."
        image="/images/Unruly.jpeg"
        website="https://www.unrulywomen.org/"
        Instagram="https://www.Instagram.com/unruly.women/"
        Facebook="https://www.Facebook.com/unruly.women.outdoors"
      />
      <Org
        name="Utepils Cycling"
        days={["W", "Su"]}
        quote="Beers. Bikes. Community. That’s the goal of Utepils Cycling Friends. Utepils Brewery is steps from over 15 miles of mountain bike trails and hundreds of miles of trails and routes for road cycling. We aim to create a place where cyclists can increase their skill and get out cycling in a relaxing and fun atmosphere."
        description={
          <>
            <h4 className="text-xl mb-3">Sunday Morning Rides</h4>
            <p className="my-3">
              Four pace groups, either Mountain or Road Biking. All riders meet
              up at Utepils Brewery afterward.
            </p>
            <h4 className="text-xl mb-3">Wednesday Women’s Rides</h4>
            <p className="mb-3">Organized in the same Facebook group.</p>
          </>
        }
        Facebook="https://www.Facebook.com/groups/UtepilsCycling"
        location="Theodore Wirth Park"
        image="/images/Utepils_Cycling_Full_Group.jpg"
        highlight
      />

      <Org
        name="West River Racing Club Sunday Coffee Ride"
        days={["Su"]}
        quote="West River Racing is Minnesota’s largest USAC-affiliated adult bike racing club with more than 70 members. Founded in 2008 as Birchwood Bike and Racing Team, we are a Minneapolis / St. Paul based passionate group of cycling enthusiasts who enjoy all forms of group bike riding. Our journey, spanning over a decade, reflects our unwavering commitment to the joy of cycling."
        description="Typically 2 hours of riding at 15MPH average pace with a coffee stop. The sunday ride is open to all, and other weekly rides require a membership."
        Instagram="https://www.Instagram.com/westriverracing/"
        website="https://westriverracing.bike/about"
        location="E Lake &amp; W River Road"
        image="/images/West_River_Racing_Coffee_Ride.jpg"
      /> */}

      <hr />

      <LinkPile
        title="💬 Discussion"
        links={[
          {
            href: "https://www.reddit.com/r/CyclingMSP/",
            text: "r/CyclingMSP",
          },
          {
            href: "https://www.Facebook.com/groups/TCMNBikeTalk",
            text: "TCMN Bike Talk",
          },
          {
            href: "https://www.Facebook.com/groups/451259884926066/",
            text: "Minnesota Bike Camping and Bikepacking",
          },
          {
            href: "https://www.Facebook.com/groups/TwinCitiesBicycleTradingPost",
            text: "TC Bicycle Trading Post",
          },
          {
            href: "https://www.Facebook.com/groups/smallframesbighearts/",
            text: "Small Frames Big Hearts",
          },
          {
            href: "https://www.Facebook.com/groups/tcwtfbikes",
            text: "FTWNB Trading Post",
          },
        ]}
      />

      <LinkPile
        title="📝 Blogs"
        links={[
          {
            href: "https://mnbiketrailnavigator.blogspot.com/",
            text: "MN Trail Navigator",
          },
          { href: "https://mplsbikelove.com/", text: "MPLS Bike Love" },
          { href: "https://streets.mn/", text: "Streets.mn" },
          {
            href: "https://www.ourstreetsmpls.org/current_news",
            text: "Our Streets",
          },
          {
            href: "https://www.bikemn.org/blog/",
            text: "Bicycle Alliance of MN",
          },
        ]}
      />
    </main>
  );
}
