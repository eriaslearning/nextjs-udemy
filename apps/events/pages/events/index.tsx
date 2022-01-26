import { getAllEvents } from '../../public/dummy-data';
import { EventsUi } from '@tests/events/ui';
import { EventsSearch } from '@tests/events/ui';

/* eslint-disable-next-line */
export interface EventsProps {}

export function Events(props: EventsProps) {
  const allEvents = getAllEvents();
  return (
    <div>
      <EventsSearch />
      <EventsUi items={allEvents} />
    </div>
  );
}

export default Events;
