import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Head from './Components/Head';

describe('App', () => {
  it('Render hello world', () => {
    render(<Head />);
    expect(screen.getByRole('heading', { level: 2 }));
  });
});
