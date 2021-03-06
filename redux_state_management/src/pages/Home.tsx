import {
    VFC,
    memo,
    useMemo
} from 'react';
import {
    useAppSelector,
    useAppDispatch
} from '../store/hooks';
import { StateInterface } from '../store/index';
import { Item } from '../components/Item';

const Home: VFC = memo( () => {
    console.log('render Home component');

    const { value, loading } = useAppSelector( ( state: StateInterface ) => {
        return state.itemList;
    } );
    const favoriteIdList = useAppSelector( ( state: StateInterface ) => {
        return state.favoritedIdList.value;
    } );
    const dispatch = useAppDispatch();

    return useMemo( () => {
        console.log( "Re:render Home component" );

        return (
            <div className="home">
                <h1>Home Page</h1>
                {
                    loading
                        ? <p>Loading...</p>
                        : (
                            value.map( ( item: ListItem ) => {
                                return <Item
                                                key={item.id}
                                                {...item}
                                                dispatch={dispatch}
                                                favoriteFlag={favoriteIdList.includes( item.id )}
                                />
                            } )
                        )
                }
            </div>
        )
    }, [value, loading, favoriteIdList, dispatch] );
} );

export default Home;
