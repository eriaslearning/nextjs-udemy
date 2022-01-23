import { render } from '@testing-library/react';

import EventsUi from './EventsUi';

describe('EventsUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EventsUi />);
    expect(baseElement).toBeTruthy();
  });
});
