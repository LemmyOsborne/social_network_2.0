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

const theme = createTheme({
    palette: {
        primary: {
            main: "#FBF7F0",
            contrastText: "#FBF7F0"
        },
        secondary: {
            main: "#D9E4DD",
            contrastText: "#555555"
        },
        info: {
            main: "#555555",
            contrastText: "#555555"
        }
    },
})

function App() {

    const isAuth = useSelector(state => state.auth.isAuth)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchingMe())
    },[])

    if (!isAuth) return <Preloader />

    return (
        <ThemeProvider theme={theme}>
            <Grid container>
                <Grid item xs={12}>
                    <Header/>
                </Grid>
                <Grid item xs={2} sx={{bgcolor: "secondary.main"}}>
                    <Sidebar/>
                </Grid>
                <Grid item xs={10} sx={{bgcolor: "primary.main"}}>
                    <Routes>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/dialogs" element={<Dialogs/>}/>
                        <Route path="/news" element={<News/>}/>
                    </Routes>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}

export default App;
