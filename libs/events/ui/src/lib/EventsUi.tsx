import './EventsUi.module.css';

/* eslint-disable-next-line */
export interface EventsUiProps {
  items: any,
}

export function EventsUi(props: EventsUiProps) {
  const { items } = props;
  return (
    <ul>
      {items.map((item: any) => )}
    </ul>
  );
}

export default EventsUi;
