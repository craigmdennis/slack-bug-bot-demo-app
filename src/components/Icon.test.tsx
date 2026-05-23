import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Icon } from './Icon';

describe('Icon', () => {
  it('renders an svg for a given name', () => {
    const { container } = render(<Icon name="trash" />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('applies the className', () => {
    const { container } = render(<Icon name="info" className="info-icon" />);
    expect(container.querySelector('svg')?.getAttribute('class')).toContain('info-icon');
  });
});
