import React from 'react'
import {Route, Routes} from 'react-router-dom'
import MainPage from './pages/mainPage/mainPage'
import Ria from './pages/ria/ria'
import NotFound from "./pages/404/404";
import Cars from "./pages/cars/cars";
import RealEstate from "./pages/real-estate/real-estate";
import AutoParts from "./pages/auto-parts/auto-parts";
import AutoProducts from "./pages/auto-products/auto-products";
import GlobalSearchCar from "./pages/GlobalSearchCar/GlobalSearchCar";

export const useRoutes = (isLogin: null | boolean) => {
    if (isLogin) {
        return (
            <Routes>
                <Route path="*" element={<NotFound/>}/>
                <Route path="/" element={<MainPage/>}/>
            </Routes>
        )
    } else {
        return (
            <Routes>
                <Route path="*" element={<NotFound/>}/>
                <Route path="/" element={<Cars/>}/>
                <Route path="/ria" element={<Ria/>}/>
                <Route path="/real-estate" element={<RealEstate/>}/>
                <Route path="/auto-products" element={<AutoProducts/>}/>
                <Route path="/auto-parts" element={<AutoParts/>}/>
                <Route path="/global-search" element={<GlobalSearchCar/>}/>
            </Routes>
        )
    }
}
