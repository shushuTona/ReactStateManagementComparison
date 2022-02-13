import { atom } from 'recoil';

export type favoritedIdListType = number[];

const favoritedIdListState = atom<favoritedIdListType>( {
    key: 'itemList',
    default: []
} );

export {
    favoritedIdListState
}
