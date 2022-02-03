import * as yup from "yup"
import { Field, Formik } from "formik"
import { Box, Button, Checkbox, FormControlLabel, Paper, TextField, Typography } from "@mui/material"
import { login } from "../../store/authSlice"
import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import React, { SyntheticEvent } from "react"


export const Login = () => {

    const dispatch = useAppDispatch()
    const { isSubmiting } = useAppSelector(state => state.auth)
    const { id } = useAppSelector(state => state.auth.data)
    const navigate = useNavigate()

    const validationSchema = yup.object({
        email: yup
            .string()
            .email()
            .required(),
        password: yup
            .string()
            .required(),
    })

    return (
        <Formik
            initialValues={{email: "", password: "", rememberMe: false}}
            validationSchema={validationSchema}
            onSubmit={values => {
                dispatch(login(values))
                    .then(() => {
                        if (!isSubmiting) navigate("/profile/" + id)
                    })
            }}>
            {({ handleSubmit }) => (
            <Box component="form" display="flex" flexDirection="column" alignItems="center" onSubmit={(e: SyntheticEvent) => {
                e.preventDefault()
                handleSubmit()
            }}>
                <Typography marginTop={4} variant="h3">Welcome to Social Network</Typography>
                <Paper sx={{
                    width: "40%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2, p: 2, m: "3rem auto"
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
                            type="submit" disabled={isSubmiting}>{isSubmiting ? "Submiting..." : "Log In"}</Button>
                </Paper>
            </Box>
            )}
        </Formik>
    )
}
