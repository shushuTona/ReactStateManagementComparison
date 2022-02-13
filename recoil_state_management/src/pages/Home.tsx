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

const Home: VFC = memo( () => {
    console.log('render Home component');

    const itemList = useRecoilValue<initialStateValueType>( itemListQuery );
    const [favoritedIdList, setFavoritedIdList] = useRecoilState( favoritedIdListState );

    return useMemo( () => {
        console.log( "Re:render Home component" );

        return (
            <div className="home">
                <h1>Home Page</h1>
                    {
                        itemList.map( ( item: ListItem ) => {
                            return <Item
                                key={item.id}
                                {...item}
                                dispatch={setFavoritedIdList}
                                favoriteFlag={favoritedIdList.includes( item.id )}
                            />
                        } )
                    }
            </div>
        )
    }, [itemList, favoritedIdList, setFavoritedIdList] );
} );

export default Home;
