import styles from './EventsUi.module.css';
import SingleEvent from '../components/single-event';

/* eslint-disable-next-line */
export interface EventsUiProps {
  items: any;
}

export function EventsUi(props: EventsUiProps) {
  const { items } = props;
  return (
    <ul className={styles['list']}>
      {items.map((item: any) => (
        <SingleEvent
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.image}
          date={item.date}
          location={item.location}
        />
      ))}
    </ul>
  );
}

export default EventsUi;
