import {
    VFC,
    memo,
    useCallback,
    useMemo
} from 'react';
import '../css/Item.css';

interface Props extends ListItem {
    favoriteFlag: boolean;
    // dispatch: Dispatch<Action>;
}

const Item: VFC<Props> = memo( ( props: Props ) => {
    console.log('render Item component');

    const clickHandler = useCallback( () => {
        // const dispatchType = props.favoriteFlag ? 'REMOVE_FAVORITE' : 'ADD_FAVORITE';

        // props.dispatch( {
        //     type: dispatchType,
        //     itemId: props.id
        // } );
    }, [props] );

    return useMemo( () => {
        console.log('Re:render Item component');

        return (
            <div className={'item ' + ( props.favoriteFlag ? 'remove' : 'add' )}>
                <span className="item__id">{ props.id } : </span>
                <span className="item__text">{ props.title }</span>
                <button
                    className="item__btn"
                    type="button"
                    onClick={clickHandler}
                >
                    <span className="item__btnInner">{props.favoriteFlag ? 'Remove' : 'Add' } Favorite</span>
                </button>
            </div>
        );
    }, [props.favoriteFlag, props.id, props.title, clickHandler] );
} );

export { Item };
