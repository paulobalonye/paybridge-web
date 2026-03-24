import { render, screen } from '@testing-library/react';
import { Providers } from '@/components/providers';
import { describe, it, expect } from 'vitest';

describe('Providers', () => {
  it('renders children', () => {
    render(
      <Providers>
        <div>test content</div>
      </Providers>
    );
    expect(screen.getByText('test content')).toBeInTheDocument();
  });
});
