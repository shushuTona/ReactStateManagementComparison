import {
    VFC,
    memo,
} from 'react';

const Header: VFC = memo( () => {
    return (
        <header className="header">
            <p>Header</p>
        </header>
    );
} );

export default Header;
