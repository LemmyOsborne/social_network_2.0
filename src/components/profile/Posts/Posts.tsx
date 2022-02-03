import React from "react"
import { Box, Container } from "@mui/material"
import { useAppSelector } from "../../../store/hooks"
import { Post } from "./Post/Post"
import { PostsForm } from "./PostsForm"

export const Posts = () => {

    const posts = useAppSelector(state => state.profile.posts)
    const allPosts = posts.map((post, index) => <Container sx={{mt: 2, backgroundColor: "primary.light", p: 2}}>
        <Post key={index} message={post.text}/></Container>)

    return (
        <Box sx={{p: 4}}>
            <PostsForm/>
            {allPosts}
        </Box>
    )
}