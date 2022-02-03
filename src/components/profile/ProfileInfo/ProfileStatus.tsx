import React, { ChangeEvent, useEffect, useState } from "react"
import { Box, TextField, Typography } from "@mui/material"
import { updateStatus } from "../../../store/profileSlice"
import { useAppDispatch, useAppSelector } from "../../../store/hooks"


type Props = {
    status: string
    userId: any
}


export const ProfileStatus = ({status, userId}: Props) => {
    const [editMode, setEditMode] = useState(false)
    const [inputStatus, setStatus] = useState(status)
    const myId = useAppSelector(state => state.auth.data.id)
    const dispatch = useAppDispatch()
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

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setStatus(e.currentTarget.value)
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