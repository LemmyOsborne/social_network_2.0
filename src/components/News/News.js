import {Box} from "@mui/material";
import {fetchingNews} from "../../store/newsSlice";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Article from "./Article";

export const News = () => {

    const articles = useSelector(state => state.news.articles)
    const articlesItems = articles.map((article, index) => <Article key={index} article={article} />)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchingNews())
    })


    return (
        <Box>
            {articlesItems}
        </Box>
    )
}