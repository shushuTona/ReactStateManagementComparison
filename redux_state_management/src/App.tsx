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
import { useAppDispatch } from './store/hooks';

import SideMenu from './components/SideMenu';
import Header from './components/Header';
import Home from './pages/Home';
import Favorite from './pages/Favorite';
import './css/App.css';

const App: VFC = () => {
  console.log( 'render App component' );

  const dispatch = useAppDispatch();

  useEffect( () => {
    dispatch( setItemList() );
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
