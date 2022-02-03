import { Box, Container, Typography, Divider, Button } from "@mui/material"
import React from "react"
import { Link } from "react-router-dom"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
// @ts-ignore
import image from "../../assets/404_page_bg_image.jpg"


export const NotFound = () => {

    return (
        <Box sx={{
            backgroundImage: `url(${image})`,
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Container sx={{
                display: "flex",
                gap: "10px",
                justifyContent: "center",
                mb: 12
            }}>
                <Box>
                    <Typography variant="h1">404</Typography>
                </Box>
                <Divider orientation="vertical" flexItem />
                <Box >
                    <Typography variant="h3">Sorry!</Typography>
                    <Typography variant="h6">The page you're looking for was not found.</Typography>
                </Box>
            </Container>
            <Button component={Link} to="/" color="inherit" variant="outlined" sx={{ position: "absolute", right: "20%" }}><ArrowBackIosIcon />Go home</Button>
        </Box >
    )
}
