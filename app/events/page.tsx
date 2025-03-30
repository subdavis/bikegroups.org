import Image from 'next/image'
import getEvents from '../events'

export default async function EventsPage() {
  const events = await getEvents()

  return (
    <div className="py-8">
      <h1 className="text-2xl font-bold mb-6">Upcoming Events</h1>
      <div className="space-y-4">
        {events.map((event, index) => (
          <div key={index} className="p-4 border rounded-lg">
            <h2 className="text-xl font-semibold">{event.Title}</h2>
            <p className="text-gray-600">{event['Start Date']} at {event['Start Time']}</p>
          </div>
          
        ))}
      </div>
    </div>
  )
}