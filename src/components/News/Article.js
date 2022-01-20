import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import user from "../../assets/user.png";

function Article({article}) {
    return (
        <Container sx={{mt: 5}}>
            <Typography variant="h5" sx={{mb: 1}}>
                {article.title}
            </Typography>
            <Typography>
                {article.content}
            </Typography>
            {article.urlToImage ? <Box component="img" sx={{width: 1 / 5, m: 4}} src={article.urlToImage} alt="article image"/> : ""}

        </Container>
    );
}

export default Article;