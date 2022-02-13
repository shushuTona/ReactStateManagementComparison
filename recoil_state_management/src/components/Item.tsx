import {
    VFC,
    memo,
    useCallback,
    useMemo
} from 'react';

import { SetterOrUpdater } from 'recoil';
import { favoritedIdListType } from '../store/atoms/favoritedIdListAtom';

import '../css/Item.css';

interface Props extends ListItem {
    favoriteFlag: boolean;
    dispatch: SetterOrUpdater<favoritedIdListType>;
}

const Item: VFC<Props> = memo( ( props: Props ) => {
    console.log( 'render Item component' );

    const clickHandler = useCallback( () => {
        props.dispatch( ( prevState ) => {
            let newState = [];
            if ( props.favoriteFlag ) {
                newState = prevState.filter( ( id: number ) => {
                    return id !== props.id;
                } );
            } else {
                newState = [
                    ...prevState,
                    props.id
                ];
            }

            return newState;
        });
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
