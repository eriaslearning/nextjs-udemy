import './single-event.module.css';
import Link from 'next/link';

/* eslint-disable-next-line */
export interface SingleEventProps {}

export function SingleEvent(props: SingleEventProps) {
  return (
    <li>
      <img src="" alt="" />
      <div>
        <div>
          <h2>TITLE</h2>
        </div>
        <div>
          <time>DATE</time>
        </div>
        <div>
          <address>ADDRESS</address>
        </div>
        <Link href="/">Explore Event</Link>
      </div>
    </li>
  );
}

export default SingleEvent;
