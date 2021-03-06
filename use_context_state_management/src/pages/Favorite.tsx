import {
    VFC,
    memo,
    useContext
} from 'react';
import { ItemListContext } from '../state/ItemListContext';
import { Item } from '../components/Item';

const Favorite: VFC = memo( () => {
    console.log( 'render Favorite component' );

    const { itemList, favoriteIdList, dispatch } = useContext( ItemListContext );

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

