import {
    VFC,
    memo,
    useState,
    useEffect
} from 'react';
import { Item } from '../components/Item';

const getItemList = async ( callback: React.Dispatch<React.SetStateAction<ListItem[]>> ) => {
    const itemList = await fetch( 'https://jsonplaceholder.typicode.com/photos/' )
                                        .then( response => response.json() )
                                        .then( ( json ) => {
                                            return json.slice(0, 10);
                                        } );

    callback( itemList );
}

const Home: VFC = memo( () => {
    const [itemList, setItemList] = useState<ListItem[]>([]);

    useEffect( () => {
        getItemList( setItemList );
    }, [] );

    return (
        <div className="home">
            <h1>Home Page</h1>
            {
                itemList.map( ( item: ListItem ) => {
                    return <Item
                                    key={item.id}
                                    {...item}
                                    flag={true} />
                } )
            }
        </div>
    )
} );

export default Home;
