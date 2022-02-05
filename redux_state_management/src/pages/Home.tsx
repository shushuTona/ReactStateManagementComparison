import {
    VFC,
    memo,
    useMemo
} from 'react';

import {
    DefaultRootState,
    useSelector,
    useDispatch
} from 'react-redux'
import { favoritedIdListType } from '../store/slice/favoritedIdListSlice';

import { Item } from '../components/Item';

interface StateInterface extends DefaultRootState {
    itemList: {
        value: ListItem[]
    },
    favoritedIdList: {
        value: favoritedIdListType
    },
}

const Home: VFC = memo( () => {
    console.log('render Home component');

    const itemList = useSelector( ( state: StateInterface ) => {
        return state.itemList.value;
    } );
    const favoriteIdList = useSelector( ( state: StateInterface ) => {
        return state.favoritedIdList.value;
    } );
    const dispatch = useDispatch();

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
                                        dispatch={dispatch}
                                        favoriteFlag={favoriteIdList.includes( item.id )}
                        />
                    } )
                }
            </div>
        )
    }, [itemList, favoriteIdList, dispatch] );
} );

export default Home;
