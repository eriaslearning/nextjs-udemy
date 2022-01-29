import Head from 'next/head';

// import { getFeaturedEvents } from '../dummy-data';
import { getFeaturedEvents } from '../data-access/api-util';
import EventList from '../components/events/event-list';

function HomePage(props) {
  // const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <Head>
        <title>Nextjs Events</title>
      </Head>
      <EventList items={props.featuredEvents} />
    </div>
  );
}

export async function getStaticProps(context) {
  const featuredEvents = await getFeaturedEvents();
  // console.log(featuredEvents);
  return {
    props: {
      featuredEvents: featuredEvents,
    },
    revalidate: 600,
  };
}

export default HomePage;
