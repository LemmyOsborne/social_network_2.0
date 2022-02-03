import React from "react"
import { updateProfileInfo } from "../../store/profileSlice"
import { Field, Form, Formik } from "formik"
import { Button, Checkbox, Container, FormControlLabel, Paper, TextField } from "@mui/material"
import * as yup from "yup"
import { useAppDispatch, useAppSelector } from "../../store/hooks"



export const ProfileSettings = () => {


    const dispatch = useAppDispatch()
    const authUserId = useAppSelector(state => state.auth.data.id)

    const validationSchema = yup.object({
        fullName: yup
            .string()
            .required('Name is required'),
        aboutMe: yup
            .string()
            .required('Describe yourself please'),

    })

    return (
        <Formik
            initialValues={{
                userId: authUserId,
                fullName: "",
                aboutMe: "",
                lookingForAJob: false,
                lookingForAJobDescription: "I don't need a job",
                contacts: {
                    github: "",
                    vk: "",
                    facebook: "",
                    instagram: "",
                    twitter: "",
                    website: "",
                    youtube: "",
                    mainLink: ""
                }
            }}
            validationSchema={validationSchema}
            onSubmit={(values: object, {resetForm}) => {
                dispatch(updateProfileInfo(values))
                resetForm()
            }}>
            <Form>
                <Paper sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: 500,
                    p: "1rem 2rem",
                    gap: 2
                }}>
                    <Field as={TextField} label="Full name" variant="standard" name="fullName"/>
                    <Field as={TextField} label="About me" variant="standard" name="aboutMe"/>
                    <Field as={FormControlLabel}
                           name='lookingForAJob'
                           control={
                               <Checkbox
                                   color="primary"
                               />
                           }
                           label="Is you need a job?"
                    />
                    <Field as={TextField} label="What job you trying to find?" variant="standard"
                           name="lookingForAJobDescription"/>
                    <Button type="submit" variant="contained" sx={{width: "fit-content"}}>Change</Button>
                </Paper>
            </Form>
        </Formik>
    )
}