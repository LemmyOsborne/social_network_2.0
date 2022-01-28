import preloader from "../../assets/preloader.svg"
import {Container} from "@mui/material";

export const Preloader = () => {
    return (
        <Container sx={{ height: "100%", width: "100%", display: "flex", justifyContent: "center", alignContent: "center" }}>
            <img src={preloader} alt="preloader"/>
        </Container>
    )
}