import './single-event.module.css';
import Link from 'next/link';

/* eslint-disable-next-line */
export interface SingleEventProps {
  id: string;
  title: string;
  image: typeof Image;
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

  return (
    <li>
      <img src="" alt="" />
      <div>
        <div>
          <h2>{title}</h2>
        </div>
        <div>
          <time>{humanReadableDate}</time>
        </div>
        <div>
          <address>{formattedAddress}</address>
        </div>
        <Link href="/">Explore Event</Link>
      </div>
    </li>
  );
}

export default SingleEvent;
