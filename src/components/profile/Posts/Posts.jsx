import {Box, Container, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {Post} from "./Post/Post";
import {PostsForm} from "./PostsForm";

export const Posts = () => {

    const posts = useSelector(state => state.profile.posts)
    const allPosts = posts.map((post,index) => <Container sx={{mt: 2, backgroundColor: "primary.light", p: 2}}>
        <Post key={post.id + index} message={post.text}/></Container>)

    return (
        <Box sx={{p: 4}}>
            <PostsForm/>
            {allPosts}
        </Box>
    )
}