import { getCalEvents } from '../app/cal-events';

async function main() {
  try {
    console.log('Fetching calendar events...');
    // Force refresh when running the update script
    const events = await getCalEvents();

    // Show association statistics
    const associated = events.filter((e) => e.orgKey).length;
    const total = events.length;
    console.log(
      `\nAssociation Summary: ${associated}/${total} events matched (${Math.round((associated / total) * 100)}%)`
    );
  } catch (error) {
    console.error('Error fetching calendar events:', error);
    process.exit(1);
  }
}

main();
