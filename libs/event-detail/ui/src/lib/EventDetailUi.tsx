import styles from './EventDetailUi.module.css';

import DateIcon from './icons/date-icon';
import AddressIcon from './icons/address-icon';

/* eslint-disable-next-line */
export interface EventDetailUiProps {
  title: string;
  image: string;
  date: string;
  location: string;
  text: string;
}

export function EventDetailUi(props: EventDetailUiProps) {
  const { title, image, date, location, text } = props;

  const humanReadableDate: string = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formattedAddress: string = location.replace(', ', '\n');

  return (
    <div className={styles['root']}>
      <img src={'/' + image} alt={title} className={styles['image']} />
      <h1 className={styles['heading']}>{title}</h1>
      <div className={styles['meta']}>
        <h3 className={styles['date']}>
          <span className={styles['icon']}>
            <DateIcon />
          </span>
          {humanReadableDate}
        </h3>
        <h3 className={styles['location']}>
          <span className={styles['icon']}>
            <AddressIcon />
          </span>
          {formattedAddress}
        </h3>
      </div>
      <div className={styles['textContainer']}>
        <p className={styles['text']}>{text}</p>
      </div>
    </div>
  );
}

export default EventDetailUi;
