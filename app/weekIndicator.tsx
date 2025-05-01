import clsx from 'clsx';

export type Day = 'M' | 'T' | 'W' | 'Th' | 'F' | 'Sa' | 'Su';
const allDays: Day[] = ['M', 'T', 'W', 'Th', 'F', 'Sa', 'Su'];

const activeClasses = 'bg-stone-300 text-stone-950 border-2 border-stone-800 font-bold';
const inactiveClasses = 'bg-stone-100 text-stone-700';

/** Return a 7-day indicator where each day is a circle with its letter */
export default function WeekIndicator(params: { days: Day[] }) {
  return (
    <div className="block my-4" data-nosnippet role="list" aria-label="Weekly schedule">
      {allDays.map((day) => {
        const active = params.days.includes(day);
        return (
          <span
            key={day}
            role="listitem"
            className={clsx(
              'w-7 h-7 rounded-full inline-flex items-center justify-center mr-1',
              active ? activeClasses : inactiveClasses
            )}
            aria-hidden={!active}
          >
            {day}
          </span>
        );
      })}
    </div>
  );
}
