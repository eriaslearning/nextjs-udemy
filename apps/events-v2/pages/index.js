// import { getFeaturedEvents } from '../dummy-data';
import { getFeaturedEvents } from '../data-access/api-util';
import EventList from '../components/events/event-list';

function HomePage(props) {
  // const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={props.featuredEvents} />
    </div>
  );
}

export async function getStaticProps(context) {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      featuredEvents: featuredEvents,
    }
  }
}

export default HomePage;
