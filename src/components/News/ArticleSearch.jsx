import React from 'react';
import {useFormik} from "formik";
import {IconButton, InputBase, LinearProgress, Paper} from "@mui/material";
import {fetchingNews} from "../../store/newsSlice";
import {useDispatch, useSelector} from "react-redux";
import SearchIcon from '@mui/icons-material/Search';

function ArticleSearch() {

    const dispatch = useDispatch()
    const isFetching = useSelector(state => state.news.isFetching)

    const formik = useFormik({
        initialValues: {
            searchTitle: ""
        },
        onSubmit: values => {
            dispatch(fetchingNews(values.searchTitle))
        }

    })

    return (
        <Paper component="form" onSubmit={formik.handleSubmit}
               sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%" }}>
            <InputBase fullWidth autoFocus={true} name="searchTitle" onChange={formik.handleChange}
                       value={formik.values.searchTitle}
                       placeholder="What news you prefer to see?"
                       sx={{ ml: 1, flex: 1 }}/>
            <IconButton disabled={isFetching} sx={{ p: '10px' }} aria-label="search" type="submit"><SearchIcon/></IconButton>

        </Paper>
    )
}

export default ArticleSearch;