import getEvents, { CalEvent } from "./events";

interface OrgEventsProps {
  instagramHandle?: string;
}

function renderEvent(events: CalEvent[]) {
  const event = events[0];
  if (!event) return null;
  let dateText = event.startTimestamp.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }) + ' at ' + event.startTimestamp.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
  if (events.length > 1) {
    dateText += ` (and ${events.length - 1} more)`;
  }
  return (<>
    <a href={event['Source URL']} aria-label={`${event['Title']} - event details`}>{event['Title']}</a>
    {" "}
    <time dateTime={event.startTimestamp.toISOString()} className="block text-xs text-gray-500 whitespace-nowrap">
      {dateText}
    </time>
  </>
  )
}

export default async function OrgEvents({ instagramHandle }: OrgEventsProps) {
  if (!instagramHandle) return null;
  const events = await getEvents()
  const upcomingEvents = events.filter(event => event["Organizer Social Handle"] === instagramHandle);
  if (upcomingEvents.length === 0) return null;

  /* Group the events by the URL */
  const groupedEvents = Object.entries(upcomingEvents.reduce((acc: Record<string, CalEvent[]>, event) => {
    const url = event['Source URL'];
    if (!acc[url]) {
      acc[url] = [];
    }
    acc[url].push(event);
    return acc;
  }, {}));

  return (
    <section className="my-4 bg-red-50 rounded p-2 border-2 border-red-300">
      <h4 className="font-semibold mb-2">📅 Upcoming Events</h4>
      <div className="list-disc">
        {groupedEvents.map(([url, events], index) => (
          <div key={index} className="mb-1">
            {renderEvent(events)}
          </div>
        ))}
      </div>
    </section>
  );
} 