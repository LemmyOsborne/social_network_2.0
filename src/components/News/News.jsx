import {Box, Container, Typography} from "@mui/material";
import {fetchingDefaultNews} from "../../store/newsSlice";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Article from "./Article";
import ArticleSearch from "./ArticleSearch";

export const News = () => {

    const articles = useSelector(state => state.news.articles)
    const apiError = useSelector(state => state.news.apiError)
    const articlesItems = articles.map((article, index) => <Article key={index} article={article}/>)

    const dispatch = useDispatch()
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