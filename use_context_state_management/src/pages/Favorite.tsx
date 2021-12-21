import {
    VFC,
    memo,
    useState,
    useEffect
} from 'react';

const getItemList = async ( callback: React.Dispatch<React.SetStateAction<ListItem[]>> ) => {
    const itemList = await fetch( 'https://jsonplaceholder.typicode.com/photos/' )
                                        .then( response => response.json() )
                                        .then( ( json ) => {
                                            console.log( json );
                                            return json;
                                        } );

    callback( itemList );
}

const Favorite: VFC = memo( () => {
    const [itemList, setItemList] = useState<ListItem[]>( [] );

    useEffect( () => {
        getItemList( setItemList );
    }, [] );

    return (
        <div className="favorite">
            <h1>Favorite Page</h1>
            {
                itemList.map( ( item: ListItem ) => {
                    return <p key={item.id}>{item.id}</p>
                } )
            }
        </div>
    )
} );

export default Favorite;

