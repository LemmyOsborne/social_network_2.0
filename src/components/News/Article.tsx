import React from "react"
import { Box, Container, Link, Typography } from "@mui/material"
import { ArticleType } from "../../store/newsSlice";


type Props = {
    article: ArticleType
}


export const Article = ({ article }: Props) => {
    return (
        <Container sx={{mt: 6, display: "flex", alignItems: 'flex-start', justifyContent: "space-around"}}>
            <Box>
                <Typography variant="h5" sx={{mb: 1}}>
                    {article.title}
                </Typography>
                <Typography sx={{ pr: 6, mb: 2 }}>
                    {article.summary}
                </Typography>
                <Link href={article.url} color="inherit">See the full article</Link>
            </Box>
            {article.imageUrl &&
                <Box component="img" sx={{width: 1 / 4, m: 0}} src={article.imageUrl} alt="article image"/> }
        </Container>
    );
}

