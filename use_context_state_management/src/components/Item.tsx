import {
    VFC,
    memo
} from 'react';

import '../css/Item.css';

interface Props extends ListItem {
    flag: boolean;
}

const Item: VFC<Props> = memo( ( props: Props ) => {
    return (
        <div className={'item ' + ( props.flag ? 'add' : 'remove' )}>
            <span className="item__id">{ props.id } : </span>
            <span className="item__text">{ props.title }</span>
            <button
                className="item__btn"
                type="button"
            >
                <span className="item__btnInner">{ props.flag ? 'Add' : 'Remove' } Favorite</span>
            </button>
        </div>
    );
} );

export { Item };
