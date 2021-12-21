import {
    VFC,
    memo,
} from 'react';

const Header: VFC = memo( () => {
    return (
        <header className="header">
            <p>JOB名前</p>
        </header>
    );
} );

export default Header;
