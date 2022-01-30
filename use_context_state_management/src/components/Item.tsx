import {
    VFC,
    memo,
    useState,
    useCallback,
    useContext
} from 'react';
import { ItemListContext } from '../state/ItemListContext';
import '../css/Item.css';

const Item: VFC<ListItem> = memo( ( props: ListItem ) => {
    console.log('render Item component');

    const { favoriteIdList, dispatch } = useContext( ItemListContext );
    const [favoriteFlag, setFavoriteFlag] = useState(favoriteIdList.includes( props.id ));
    const clickHandler = useCallback( () => {
        const dispatchType = favoriteFlag ? 'REMOVE_FAVORITE' : 'ADD_FAVORITE';

        dispatch( {
            type: dispatchType,
            itemId: props.id
        } );

        setFavoriteFlag( !favoriteFlag );
    }, [props.id, favoriteFlag, setFavoriteFlag, dispatch] );

    return (
        <div className={'item ' + ( favoriteFlag ? 'remove' : 'add' )}>
            <span className="item__id">{ props.id } : </span>
            <span className="item__text">{ props.title }</span>
            <button
                className="item__btn"
                type="button"
                onClick={clickHandler}
            >
                <span className="item__btnInner">{favoriteFlag ? 'Remove' : 'Add' } Favorite</span>
            </button>
        </div>
    );
} );

export { Item };
