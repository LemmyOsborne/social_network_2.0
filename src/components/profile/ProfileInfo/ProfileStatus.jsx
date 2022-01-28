import React, {useEffect, useState} from 'react';
import {Box, TextField, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {updateStatus} from "../../../store/profileSlice";
import {useParams} from "react-router-dom";

export const ProfileStatus = ({status}) => {
    const [editMode, setEditMode] = useState(false)
    const [inputStatus, setStatus] = useState(status)
    const myId = useSelector(state => state.auth.data.id)
    const {userId} = useParams()
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

            {myId !== parseInt(userId)
                ? <Typography>{status || "---"}</Typography>
                : !editMode
                ? <Typography onClick={activateEditMode}>{status || "---"}</Typography>
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