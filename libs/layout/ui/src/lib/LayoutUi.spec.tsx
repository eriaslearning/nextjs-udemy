import { render } from '@testing-library/react';

import LayoutUi from './LayoutUi';

describe('LayoutUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LayoutUi />);
    expect(baseElement).toBeTruthy();
  });
});
