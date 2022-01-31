import {
  Dispatch,
  SetStateAction,
  VFC,
  useState,
  useEffect
} from 'react';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { ItemListContext, useFavoriteItem } from './state/ItemListContext';
import SideMenu from './components/SideMenu';
import Header from './components/Header';
import Home from './pages/Home';
import Favorite from './pages/Favorite';
import './css/App.css';

/**
 * getItemList function
 *
 * get item list using fetch API from JSON placeholder API and execute callback function using 10 of the got items.
 */
const getItemList = async ( callback: Dispatch<SetStateAction<ListItem[]>> ) => {
  const itemList = await fetch( 'https://jsonplaceholder.typicode.com/photos/' )
    .then( response => response.json() )
    .then( ( json ) => {
      return json.slice( 0, 10 );
    } );

  callback( itemList );
}

const App: VFC = () => {
  console.log('render App component');

  const [itemList, setItemList] = useState<ListItem[]>( [] );
  const { state, dispatch } = useFavoriteItem();

  useEffect( () => {
    getItemList( setItemList );
  }, [] );

  return (
    <main className="mainArea">
      <ItemListContext.Provider value={ { itemList, favoriteIdList: state, dispatch} }>
        <BrowserRouter>
          <SideMenu />

          <div className="contentsArea">
            <Header />

            <div className="routeArea">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/favorite" element={<Favorite />} />
                <Route
                  path="*"
                  element={
                    <main style={{ padding: "1rem" }}>
                      <p>There's nothing here!</p>
                    </main>
                  }
                />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </ItemListContext.Provider>
    </main>
  );
}

export default App;
