import './EventsUi.module.css';
import SingleEvent from '../components/single-event';

/* eslint-disable-next-line */
export interface EventsUiProps {
  items?: any,
}

export function EventsUi(props: EventsUiProps) {
  const { items } = props;
  return (
    <ul>
      {items.map((item: any) => <SingleEvent />)}
    </ul>
  );
}

export default EventsUi;
