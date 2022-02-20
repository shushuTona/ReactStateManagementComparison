import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Item } from '../Item';

test( 'render Header component', () => {
    const dispatch = jest.fn();
    render(
        <Item
            albumId={100}
            id={100}
            thumbnailUrl="test_thumbnail_url"
            title="test_title"
            url="/test/url"
            favoriteFlag={false}
            dispatch={dispatch}
        />
    );

    const favoriteBtn = screen.getByText( 'Add Favorite' );

    expect( screen.getByText( 'Add Favorite' ) ).toBeInTheDocument();

    userEvent.click( favoriteBtn );

    expect( dispatch ).toHaveBeenCalledTimes( 1 );
} );