import { getAllEvents } from '../../public/dummy-data';
import { EventsUi } from '@tests/events/ui'

/* eslint-disable-next-line */
export interface EventsProps {}

export function Events(props: EventsProps) {
  const allEvents = getAllEvents();
  return (
    <EventsUi items={allEvents} />
  );
}

export default Events;
