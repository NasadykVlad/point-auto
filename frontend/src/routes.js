import React from 'react'
import {Route, Routes} from 'react-router-dom'
import MainPage from './components/mainPage/mainPage'
import Landing from './components/landing/landing'
import NotFound from "./components/404/404";

export const useRoutes = (isLogin) => {
    if (isLogin) {
        return (
            <Routes>
                <Route path="*" element={<NotFound/>}/>
                <Route path="/" exact element={<MainPage/>}/>
            </Routes>
        )
    } else {
        return (
            <Routes>
                <Route path="*" element={<NotFound/>}/>
                <Route path="/" exact element={<Landing/>}/>
            </Routes>
        )
    }
}
