import {
    VFC,
    memo,
    useContext,
    useMemo
} from 'react';
import { ItemListContext } from '../state/ItemListContext';
import { Item } from '../components/Item';

const Home: VFC = memo( () => {
    console.log('render Home component');

    const { itemList } = useContext( ItemListContext );

    return useMemo( () => {
        console.log( "Re:render Home component" );

        return (
            <div className="home">
                <h1>Home Page</h1>
                {
                    itemList.map( ( item: ListItem ) => {
                        return <Item
                            key={item.id}
                            {...item} />
                    } )
                }
            </div>
        )
    }, [itemList] );
} );

export default Home;
