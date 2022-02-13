import { selector } from 'recoil';

export type initialStateValueType = ListItem[];

const itemListQuery = selector( {
    key: 'itemListQuery',
    get: async ( { get } ) => {
        const itemList = await fetch( 'https://jsonplaceholder.typicode.com/photos/' )
                                            .then( response => response.json() )
                                            .then( ( json ) => {
                                                return json.slice( 0, 30 );
                                            } );

        console.log('===== itemListQuery =====');
        console.log( itemList );

        return itemList;
    }
} );

export { itemListQuery }
