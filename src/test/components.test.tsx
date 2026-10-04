import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { NavbarSection } from '@/components/sections/NavbarSection';

describe('Navbar Component', () => {
  it('renders branding name and navigation items', () => {
    render(
      <BrowserRouter>
        <NavbarSection />
      </BrowserRouter>
    );

    expect(screen.getByText(/Ahmed Abdelhalim/i)).toBeInTheDocument();
    expect(screen.getByText(/Projects/i)).toBeInTheDocument();
    expect(screen.getByText(/Resume/i)).toBeInTheDocument();
  });
});
