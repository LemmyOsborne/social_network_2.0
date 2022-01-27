import './App.css';
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Grid } from "@mui/material";
import Profile from "./components/profile/Profile";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { Dialogs } from "./components/Dialogs/Dialogs";
import { News } from "./components/News/News";
import { Login } from "./components/Login/Login";
import { Settings } from "./components/Settings/Settings";
import Users from "./components/Users/Users";
import { useLayoutEffect } from "react";
import { fetchingMe } from "./store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Preloader } from "./components/common/Preloader";
import { WithAuthRedirect } from "./hoc/WithAuthRedirect";
import { NotFound } from './components/NotFound/NotFound';




function App() {

    const { id } = useSelector(state => state.auth.data)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    let { isAppInitialized, isAuth } = useSelector(state => state.auth)
    useLayoutEffect(() => {
        dispatch(fetchingMe())
        if (!isAuth) navigate("/login")
    }, [isAuth])

    if (!isAppInitialized) return <Preloader />

    return (
        <Grid container>
            <Grid item xs={12}>
                <Header />
            </Grid>
            <Grid item xs={2} sx={{ bgcolor: "grey.800" }}>
                <Sidebar />
            </Grid>
            <Grid item xs={10} bgcolor="#FDFAF6">
                <Routes>
                    <Route path="/profile" element={<Navigate to={"/profile/" + id} />} />
                    <Route path="/profile/:userId" element={
                        <WithAuthRedirect>
                            <Profile />
                        </WithAuthRedirect>
                    } />
                    <Route path="/dialogs" element={
                        <WithAuthRedirect>
                            <Dialogs />
                        </WithAuthRedirect>
                    } />
                    <Route path="/news" element={<News />} />
                    <Route path="/settings" element={
                        <WithAuthRedirect>
                            <Settings />
                        </WithAuthRedirect>
                    } />
                    <Route path="/users" element={<Users />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Grid>
            
        </Grid>
    )
}

export default App;
