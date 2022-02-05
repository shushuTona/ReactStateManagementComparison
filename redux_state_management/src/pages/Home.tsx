import {
    VFC,
    memo,
    useMemo
} from 'react';

import { DefaultRootState, useSelector } from 'react-redux'

import { Item } from '../components/Item';

interface StateInterface extends DefaultRootState {
    itemList: {
        value: ListItem[]
    }
}

const Home: VFC = memo( () => {
    console.log('render Home component');

    const itemList = useSelector( ( state: StateInterface ) => {
        return state.itemList.value;
    } );

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
                                        favoriteFlag={false}
                                        // favoriteFlag={favoriteIdList.includes( item.id )}
                                        />
                    } )
                }
            </div>
        )
    }, [itemList] );
} );

export default Home;
