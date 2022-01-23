import * as yup from "yup";
import {Field, Form, Formik} from "formik";
import {Button, Checkbox, Container, FormControlLabel, TextField} from "@mui/material";
import {login} from "../../store/authSlice";
import {useDispatch, useSelector} from "react-redux";


export const Login = () => {

    const dispatch = useDispatch()
    const isSubmiting = useSelector(state => state.auth.isSubmiting)

    const validationSchema = yup.object({
        email: yup
            .string('Enter your email')
            .email('Enter a valid email')
            .required('Email is required'),
        password: yup
            .string('Enter your password')
            .min(8, 'Password should be of minimum 8 characters length')
            .required('Password is required'),
    });

    return (
        <Formik
            initialValues={{email: "", password: "", rememberMe: false}}
            validationSchema={validationSchema}
            onSubmit={(values => {
                dispatch(login(values))
            })}>
            <Form>
                <Container sx={{
                    bgcolor: "grey.200",
                    width: "40%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2, p: 2, m: "8rem auto"
                }}>
                    <Field as={TextField} label="Email" variant="standard" name="email" type="email"/>
                    <Field as={TextField} label="Password" variant="standard" name="password" type="password"/>
                    <Field as={FormControlLabel}
                           name='rememberMe'
                           control={
                               <Checkbox
                                   color="primary"
                               />
                           }
                           label="Remember me"
                    />
                    <Button sx={{width: "fit-content"}} variant="contained"
                            type="submit">{isSubmiting ? "Loading..." : "Log In"}</Button>
                </Container>
            </Form>
        </Formik>
    )
}