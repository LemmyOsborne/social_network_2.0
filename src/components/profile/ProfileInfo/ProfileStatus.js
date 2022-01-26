import React, {useEffect, useState} from 'react';
import {Box, TextField, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {updateStatus} from "../../../store/profileSlice";

export const ProfileStatus = ({status}) => {
    const [editMode, setEditMode] = useState(false)
    const [inputStatus, setStatus] = useState(status)

    const dispatch = useDispatch()
    useEffect(() => {
        setStatus(status)
    }, [status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        dispatch(updateStatus(inputStatus))
    }

    const onStatusChange = (e) => {
        setStatus(e.target.value)
    }

    return (
        <Box>
            {!editMode ?
                <Typography onClick={activateEditMode}>{status || "Edit your status"}</Typography>
                :
                <Box>
                    <TextField
                        onBlur={deactivateEditMode}
                        onChange={onStatusChange}
                        autoFocus={true}
                        value={inputStatus}
                    />
                </Box>
            }
        </Box>
    )
}