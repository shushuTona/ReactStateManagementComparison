import {
    VFC,
    memo
} from 'react';

import {
    useSelector,
    useDispatch
} from 'react-redux';
import { StateInterface } from '../store/index';

import { Item } from '../components/Item';

const Favorite: VFC = memo( () => {
    console.log( 'render Favorite component' );

    const itemList = useSelector( ( state: StateInterface ) => {
        return state.itemList.value;
    } );
    const favoriteIdList = useSelector( ( state: StateInterface ) => {
        return state.favoritedIdList.value;
    } );
    const dispatch = useDispatch();

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

