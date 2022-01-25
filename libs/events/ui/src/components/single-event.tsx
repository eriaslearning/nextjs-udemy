import styles from './single-event.module.css';
import Link from 'next/link';

import DateIcon from './icons/date-icon';
import ArrowRightIcon from './icons/arrow-right-icon';
import AddressIcon from './icons/date-icon';

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
            <DateIcon></DateIcon>
            <time>{humanReadableDate}</time>
          </div>
          <div className={styles['address']}>
            <AddressIcon></AddressIcon>
            <address>{formattedAddress}</address>
          </div>
          <div className={styles['actions']}>
            <Link href={exploreLink}>
              <a>
                <span>Explore Event</span>
                <span className={styles['icon']}>
                  <ArrowRightIcon></ArrowRightIcon>
                </span>
              </a>
            </Link>
          </div>
        </div>
      </li>
    </div>
  );
}

export default SingleEvent;
