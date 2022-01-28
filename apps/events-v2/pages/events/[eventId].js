import { Fragment } from 'react';

import { getEventById, getAllEvents } from '../../data-access/api-util';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import ErrorAlert from '../../components/ui/error-alert';

function EventDetailPage(props) {
  // const { events } = props;
  // const router = useRouter();

  // const eventId = router.query.eventId;
  // const event = getEventById(eventId);
  const event = props.event;

  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
    );
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const id = params.eventId;
  const event = await getEventById(id);
  return {
    props: {
      event: event,
    },
  };
}

export async function getStaticPaths(context) {
  const events = await getAllEvents();

  const paths = events.map((event) => ({ params: { eventId: event.id } }));
  return {
    paths: paths,
    fallback: false,
  };
}

export default EventDetailPage;
