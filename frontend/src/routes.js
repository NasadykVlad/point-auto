import React from 'react'
import {Route, Routes} from 'react-router-dom'
import MainPage from './pages/mainPage/mainPage'
import Ria from './pages/ria/ria'
import NotFound from "./pages/404/404";
import Cars from "./pages/cars/cars";
import RealEstate from "./pages/real-estate/real-estate";
import AutoParts from "./pages/auto-parts/auto-parts";
import AutoProducts from "./pages/auto-products/auto-products";

export const useRoutes = (isLogin) => {
    if (isLogin) {
        return (
            <Routes>
                <Route path="*" element={<NotFound />}/>
                <Route path="/" exact element={<MainPage/>}/>
            </Routes>
        )
    } else {
        return (
            <Routes>
                <Route path="*" element={<NotFound />}/>
                <Route path="/" exact element={<Cars />}/>
                <Route path="/ria" exact element={<Ria/>}/>
                <Route path="/real-estate" exact element={<RealEstate />} />
                <Route path="/auto-products" exact element={<AutoProducts />} />
                <Route path="/auto-parts" exact element={<AutoParts />} />
            </Routes>
        )
    }
}
