import {
    VFC,
    memo,
    useMemo,
} from 'react';

import {
    useRecoilState,
    useRecoilValue
} from 'recoil';
import {
    itemListQuery,
    initialStateValueType
} from '../store/selectors/itemListSelector';
import { favoritedIdListState } from '../store/atoms/favoritedIdListAtom';

import { Item } from '../components/Item';

const Favorite: VFC = memo( () => {
    console.log( 'render Favorite component' );

    const itemList = useRecoilValue<initialStateValueType>( itemListQuery );
    const [favoritedIdList, setFavoritedIdList] = useRecoilState( favoritedIdListState );

    return useMemo( () => {
        console.log( "Re:render Favorite component" );

        return (
            <div className="favorite">
                <h1>Favorite Page</h1>
                {
                    itemList.map( ( item: ListItem ) => {
                        return favoritedIdList.includes( item.id )
                            ? <Item
                                key={item.id}
                                {...item}
                                favoriteFlag={favoritedIdList.includes( item.id )}
                                dispatch={setFavoritedIdList} />
                            : false
                    } )
                }
            </div>
        )
    }, [itemList, favoritedIdList, setFavoritedIdList] );
} );

export default Favorite;

