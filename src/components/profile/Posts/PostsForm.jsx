import {Button, Paper, TextField} from "@mui/material";
import {useFormik} from "formik";
import {addPost} from "../../../store/profileSlice";
import {useDispatch} from "react-redux";
import CreateIcon from '@mui/icons-material/Create';

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
            <Paper elevation={10} sx={{display: "flex", alignItems: 'flex-end', p: 1}}>
                <TextField fullWidth sx={{ m: "auto 2rem" }} id="text" name="text" onChange={formik.handleChange} value={formik.values.text}
                           label="What's new?" variant="standard"/>
                <Button variant="outlined" sx={{color: "info.main", borderColor: "info.main", ml: 4}} type="submit"><CreateIcon/></Button>
            </Paper>
        </form>

    )
}