import HomePage from '../pages/HomePage/HomePage';
import CatalogPage from "../pages/CatalogPage/CatalogPage"
import Navigation from './Navigation/Navigation';
import { Route, Routes } from 'react-router-dom';
import TruckDetailPage from '../pages/TruckDetailPage/TruckDetailPage';
import Features from './Features/Features';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import Reviews from './Reviews/Reviews';
import { Toaster } from 'react-hot-toast';

function App() {
    return (
        <>
            <Toaster />
            <Navigation />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path="/catalog" element={<CatalogPage />} />
                    <Route path='/catalog/:truckId' element={<TruckDetailPage />}>
                        <Route index element={<Features />} />
                        <Route path='reviews' element={<Reviews />} />
                    </Route>
                    
                    <Route path='*' element={<NotFoundPage />} />
                </Routes>
        </>
 )
};

export default App;
