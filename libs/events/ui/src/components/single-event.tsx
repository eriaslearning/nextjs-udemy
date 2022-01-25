import styles from './single-event.module.css';
import Link from 'next/link';

/* eslint-disable-next-line */
export interface SingleEventProps {
  id: string;
  title: string;
  image: string;
  date: string;
  location: string;
}

export function SingleEvent(props: SingleEventProps) {
  const { id, title, image, date, location } = props;

  const humanReadableDate: string = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formattedAddress: string = location.replace(', ', '\n');

  const exploreLink = `/events/${id}`;

  return (
    <div className={styles['container']}>
      <li className={styles['item']}>
        <img src={'/' + image} alt={title} />
        <div className={styles['content']}>
          <div className={styles['summary']}>
            <h2>{title}</h2>
          </div>
          <div className={styles['date']}>
            <time>{humanReadableDate}</time>
          </div>
          <div className={styles['address']}>
            <address>{formattedAddress}</address>
          </div>
          <div className={styles['actions']}>
            <Link href={exploreLink}>Explore Event</Link>
          </div>
        </div>
      </li>
    </div>
  );
}

export default SingleEvent;
