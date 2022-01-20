import {Box, Button, Container, TextField} from "@mui/material";
import {useFormik} from "formik";
import {addPost} from "../../../store/profileSlice";
import {useDispatch} from "react-redux";

export const PostsForm = () => {

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            text: ""
        },
        onSubmit: values => {
            dispatch(addPost(values))
        }

    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <Box sx={{display: "flex", alignItems: 'flex-end'}}>
                <TextField id="text" name="text" onChange={formik.handleChange} value={formik.values.text}
                           label="Enter your message" variant="standard"/>
                <Button variant="outlined" sx={{color: "info.main", borderColor: "info.main", ml: 4}} type="submit">Add
                    post</Button>
            </Box>
        </form>

    )
}