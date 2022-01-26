import styles from './results-title.module.css';
import Link from 'next/link'

export interface ResultsTitleProps {
  date: Date;
}

export function ResultsTitle(props: ResultsTitleProps) {
  const { date } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className={styles['title']}>
      <h1>Events in {humanReadableDate}</h1>
      <Link href='/events'>Show all events</Link>
    </section>
  );
}

export default ResultsTitle;