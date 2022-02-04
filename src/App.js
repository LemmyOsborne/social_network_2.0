import React from "react"
import "./App.css"
import { Profile } from "./components/profile/Profile"
import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
// import { Dialogs } from "./components/Dialogs/Dialogs"
import { News } from "./components/News/News"
import { Login } from "./components/Login/Login"
import { Settings } from "./components/Settings/Settings"
import Users from "./components/Users/Users"
import { useLayoutEffect } from "react"
import { fetchingMe } from "./store/authSlice"
import { Preloader } from "./components/common/Preloader"
import { WithAuthRedirect } from "./hoc/WithAuthRedirect"
import { NotFound } from './components/NotFound/NotFound'
import { Layout } from './components/Layout/Layout'
import { useAppDispatch, useAppSelector } from "./store/hooks"




function App() {

    const { id } = useAppSelector(state => state.auth.data)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    let { isAppInitialized, isAuth } = useAppSelector(state => state.auth)
    useLayoutEffect(() => {
        dispatch(fetchingMe())
        if (!isAuth) navigate("/login")
    }, [isAuth])

    if (!isAppInitialized) return <Preloader />

    return (
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route index element={<Navigate to={"/profile/" + id} />} />
                <Route path="/profile" element={<Navigate to={"/profile/" + id} />} />
                <Route path="/profile/:userId" element={
                    <WithAuthRedirect>
                        <Profile />
                    </WithAuthRedirect>
                } />
                {/* <Route path="/dialogs" element={
                    <WithAuthRedirect>
                        <Dialogs />
                    </WithAuthRedirect>
                } /> */}
                <Route path="/news" element={<News />} />
                <Route path="/settings" element={
                    <WithAuthRedirect>
                        <Settings />
                    </WithAuthRedirect>
                } />
                <Route path="/users" element={<Users />} />
                <Route path="/login" element={<Login />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default App;
