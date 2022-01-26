import { render } from '@testing-library/react';

import EventsDataAccess from './EventsDataAccess';

describe('EventsDataAccess', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EventsDataAccess />);
    expect(baseElement).toBeTruthy();
  });
});
