import React from 'react'
import {Route, Routes} from 'react-router-dom'
import MainPage from './pages/mainPage/mainPage'
import Landing from './pages/landing/landing'
import NotFound from "./pages/404/404";
import New from "./pages/news/new";
import UsedCars from "./pages/usedCars/usedCars";
import Login from "./pages/login/login";
import Register from "./pages/register/register"

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
                <Route path="/" exact element={<Landing/>}/>
                <Route path="/news" exact element={<New />}/>
                <Route path="/used-cars" exact element={<UsedCars />} />
                <Route path="/register" exact element={<Register />} />
                <Route path="/login" exact element={<Login />} />
            </Routes>
        )
    }
}
