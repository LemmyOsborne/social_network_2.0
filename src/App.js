import './App.css';
import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Grid} from "@mui/material";
import Profile from "./components/profile/Profile";
import {Route, Routes, useNavigate} from "react-router-dom";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {News} from "./components/News/News";
import {Login} from "./components/Login/Login";
import Settings from "./components/Settings/Settings";
import Users from "./components/Users/Users";
import {useEffect} from "react";
import {fetchingMe} from "./store/authSlice";
import {useDispatch, useSelector} from "react-redux";
import {Preloader} from "./components/common/Preloader";


function App() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {isAuth} = useSelector(state => state.auth)
    useEffect(() => {
        dispatch(fetchingMe())
        if (!isAuth) navigate("/login")
    },[isAuth])

    if (!isAuth) return <Preloader/>

    return (
        <Grid container>
            <Grid item xs={12}>
                <Header/>
            </Grid>
            <Grid item xs={2} sx={{bgcolor: "grey.800"}}>
                <Sidebar/>
            </Grid>
            <Grid item xs={10} bgcolor="#FDFAF6">
                <Routes>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/profile/:userId" element={<Profile/>}/>
                    <Route path="/dialogs" element={<Dialogs/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                    <Route path="/users" element={<Users/>}/>
                    <Route path="/login" element={<Login/>}/>
                </Routes>
            </Grid>
        </Grid>
    )
}

export default App;
