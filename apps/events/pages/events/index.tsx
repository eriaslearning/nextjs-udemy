import { getAllEvents } from '../../public/dummy-data';
import { EventsUi } from '@tests/events/ui';
import { EventsSearch } from '@tests/events/ui';
import { useRouter } from 'next/router';

/* eslint-disable-next-line */
export interface EventsProps {}

export function Events(props: EventsProps) {
  const allEvents = getAllEvents();
  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }
  return (
    <div>
      <EventsSearch onSearch={findEventsHandler} />
      <EventsUi items={allEvents} />
    </div>
  );
}

export default Events;
