import { render } from '@testing-library/react';

import EventDetailUi from './EventDetailUi';

describe('EventDetailUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EventDetailUi />);
    expect(baseElement).toBeTruthy();
  });
});
