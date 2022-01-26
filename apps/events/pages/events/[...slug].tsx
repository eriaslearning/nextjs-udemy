import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../public/dummy-data';
import { EventsUi } from '@tests/events/ui';

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
      <h1 className="center">Invalid filter, please adjust your values</h1>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return(
      <h1 className="center">No events found</h1>
    )
  }

  return (
    <EventsUi items={filteredEvents} />
  );
}

export default FilteredEventsPage;
