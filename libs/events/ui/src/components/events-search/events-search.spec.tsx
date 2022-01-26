import { render } from '@testing-library/react';

import EventsSearch from './events-search';

describe('EventsSearch', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EventsSearch />);
    expect(baseElement).toBeTruthy();
  });
});
