import { render } from '@testing-library/react';

import HeaderUi from './HeaderUi';

describe('HeaderUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeaderUi />);
    expect(baseElement).toBeTruthy();
  });
});
