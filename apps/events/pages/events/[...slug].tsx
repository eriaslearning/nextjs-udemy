import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../public/dummy-data';
import { EventsUi } from '@tests/events/ui';
import { ResultsTitle } from '@tests/events/ui';
import { Fragment } from 'react';
import Link from 'next/link';

/* eslint-disable-next-line */
export interface SlugProps {}

export function FilteredEventsPage(props: SlugProps) {
  const router = useRouter();
  const filteredData = router.query.slug;
  console.log(filteredData);

  // To not get an error
  if (!filteredData) {
    return <h1 className="center">Loading</h1>;
  }

  const filteredYear = filteredData[0];
  const filteredMonth = filteredData[1];
  // Transforms to numbers
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth > 12 ||
    numMonth < 1
  ) {
    return (
      <Fragment>
        <h1 className="center">Invalid Filter, pleaser adjust the paramter</h1>
        <div className="center">
          <Link href="/events">Show All Events</Link>
        </div>
      </Fragment>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <h1 className="center">No events found</h1>
        <div className="center">
          <Link href="/events">Show All Events</Link>
        </div>
      </Fragment>
    );
  }
  const date: Date = new Date(numYear, numMonth - 1);
  console.log(date);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventsUi items={filteredEvents} />
    </Fragment>
  );
}

export default FilteredEventsPage;
