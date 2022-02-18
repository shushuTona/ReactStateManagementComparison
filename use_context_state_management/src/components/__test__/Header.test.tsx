import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Header';

test( 'render Header component', () => {
    const { container } = render( <Header /> );
    const textElement = screen.getByText( 'Header' );

    expect( container ).toContainElement( textElement );
} );