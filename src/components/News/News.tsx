import { Box, Container, Typography } from "@mui/material"
import { fetchingDefaultNews } from "../../store/newsSlice"
import React, { useEffect } from "react"
import { Article } from "./Article"
import { ArticleSearch } from "./ArticleSearch"
import { useAppDispatch, useAppSelector } from "../../store/hooks"

export const News = () => {

    const { articles, apiError } = useAppSelector(state => state.news)
    const articlesItems = articles.map((article, index) => <Article key={index} article={article}/>)

    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchingDefaultNews())
    }, [])
    if (apiError) return <Typography variant="h2" sx={{mx: "auto", width: 600, my: 10}}>Sorry, something went
        wrong...</Typography>

    return (
        <>
            <Container sx={{mt: 4}}>
                <ArticleSearch/>
            </Container>
            <Box>
                {articlesItems}
            </Box>
        </>
    )
}