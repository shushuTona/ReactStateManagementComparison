import {
  VFC,
  useEffect,
} from 'react';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { setItemList } from './store/slice/itemListSlice';
import { useDispatch } from 'react-redux';

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
const getItemList = async ( dispatch: any ) => {
  const itemList = await fetch( 'https://jsonplaceholder.typicode.com/photos/' )
                                      .then( response => response.json() )
                                      .then( ( json ) => {
                                        return json.slice( 0, 10 );
                                      } );

  dispatch( setItemList( itemList ) );
}

const App: VFC = () => {
  console.log( 'render App component' );

  const dispatch = useDispatch();

  useEffect( () => {
    getItemList( dispatch );
  }, [dispatch] );

  return (
    <main className="mainArea">
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
    </main>
  );
}

export default App;
