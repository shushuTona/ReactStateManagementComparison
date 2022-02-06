import {
    VFC,
    memo
} from 'react';

import {
    useAppSelector,
    useAppDispatch
} from '../store/hooks';
import { StateInterface } from '../store/index';

import { Item } from '../components/Item';

const Favorite: VFC = memo( () => {
    console.log( 'render Favorite component' );

    const itemList = useAppSelector( ( state: StateInterface ) => {
        return state.itemList.value;
    } );
    const favoriteIdList = useAppSelector( ( state: StateInterface ) => {
        return state.favoritedIdList.value;
    } );
    const dispatch = useAppDispatch();

    return (
        <div className="favorite">
            <h1>Favorite Page</h1>
            {
                itemList.map( ( item: ListItem ) => {
                    return favoriteIdList.includes( item.id )
                        ? <Item
                            key={item.id}
                            {...item}
                            favoriteFlag={favoriteIdList.includes( item.id )}
                            dispatch={dispatch} />
                        : false
                } )
            }
        </div>
    )
} );

export default Favorite;

