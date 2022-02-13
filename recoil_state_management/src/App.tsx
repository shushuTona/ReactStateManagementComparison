import { VFC } from 'react';

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

// pages
import Home from './pages/Home';
import Favorite from './pages/Favorite';

// components
import SideMenu from './components/SideMenu';
import Header from './components/Header';
import ItemLoadingSuspense from './components/ItemLoadingSuspense';
import LoadingErrorBoundary from './components/LoadingErrorBoundary';

// css
import './css/App.css';

const App: VFC = () => {
    console.log( 'render App component' );

    return (
        <main className="mainArea">
            <BrowserRouter>
                <SideMenu />

                <div className="contentsArea">
                    <Header />

                    <div className="routeArea">
                        <LoadingErrorBoundary>
                            <ItemLoadingSuspense>
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
                            </ItemLoadingSuspense>
                        </LoadingErrorBoundary>
                    </div>
                </div>
            </BrowserRouter>
        </main>
    );
}

export default App;
