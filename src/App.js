import './App.css';
import {Header} from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import {Grid} from "@mui/material";
import Profile from "./components/profile/Profile";
import {Route, Routes} from "react-router-dom";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {News} from "./components/News/News";
import {Login} from "./components/Login/Login";
import Settings from "./components/Settings/Settings";
import Users from "./components/Users/Users";


function App() {

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
                    <Route path="/profile" element={<Profile/>}/>
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
