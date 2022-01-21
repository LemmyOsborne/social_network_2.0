import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import {createTheme, Grid, ThemeProvider} from "@mui/material";
import Profile from "./components/profile/Profile";
import {Route, Routes} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchingMe} from "./store/authSlice";
import {useEffect} from "react";
import {Preloader} from "./components/common/Preloader";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {News} from "./components/News/News";
import {Login} from "./components/Login/Login";


function App() {

    const isAuth = useSelector(state => state.auth.isAuth)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchingMe())
    }, [])

    if (!isAuth) return <Preloader/>

    return (
        <Grid container>
            <Grid item xs={12}>
                <Header/>
            </Grid>
            <Grid item xs={2} sx={{bgcolor: "grey.800"}}>
                <Sidebar/>
            </Grid>
            <Grid item xs={10}>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/dialogs" element={<Dialogs/>}/>
                    <Route path="/news" element={<News/>}/>
                </Routes>
            </Grid>
        </Grid>
    )
}

export default App;
