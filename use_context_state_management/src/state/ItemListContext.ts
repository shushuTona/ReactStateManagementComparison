import {
    Dispatch,
    createContext,
    useReducer
} from 'react';

type ActionType = 'ADD_FAVORITE' | 'REMOVE_FAVORITE';
export type Action = {
    type: ActionType;
    itemId: number
}
type favoriteIdList = number[];

export interface ItemListInterface {
    itemList: ListItem[];
    favoriteIdList: favoriteIdList;
    dispatch: Dispatch<Action>;
}

/**
 * context of item list
 *
 * supply itemList, favoriteIdList, and dispatch function to child component.
 */
const ItemListContext = createContext<ItemListInterface>( {} as ItemListInterface );

/**
 * favoriteReducer function
 *
 * check the type of action being function's argument and process favorite item according to type.
 */
const favoriteReducer = ( state: favoriteIdList, action: Action ) => {
    let newState: favoriteIdList;

    switch ( action.type ) {
        case 'ADD_FAVORITE':
            if ( !state.includes( action.itemId ) ) {
                newState = [...state, action.itemId]
                return newState;
            }
            return state;

        case 'REMOVE_FAVORITE':
            return newState = state.filter( ( id: number ) => {
                return id !== action.itemId
            })

        default:
            return state;
    }
}

/**
 * useFavoriteItem
 *
 * initialize useReducer and return state and dispatch function which process favorite item list.
 */
const useFavoriteItem = () => {
    const [state, dispatch] = useReducer( favoriteReducer, [] );

    return { state, dispatch };
}

export {
    ItemListContext,
    useFavoriteItem
}
