import { useRouter } from 'next/router';
import { EventDetailUi } from "@tests/event-detail/ui";
import { getEventById } from '../../public/dummy-data';

/* eslint-disable-next-line */
export interface EventIdProps {}

export function EventDetailPage(props: EventIdProps) {
  const router = useRouter();
  const eventId = router.query.eventId;

  const eventData = getEventById(eventId);
  // console.log(eventData);

  // This if statement is also used for letting the computer run a but longer to not get the error of undefined, weird
  if (!eventData) {
    return (
      <h1>404 - Not found</h1>
    )
  }


  return (
    <EventDetailUi title={eventData.title} image={eventData.image} date={eventData.date} location={eventData.location} text={eventData.description}></EventDetailUi>
  );
}

export default EventDetailPage;
