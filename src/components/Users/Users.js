import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchingUsers} from "../../store/usersSlice";
import {User} from "./User/User";
import {Container, Pagination, Stack, TextField} from "@mui/material";

const Users = () => {

    const totalPages = useSelector(state => state.users.totalPages)
    const numberPages = Math.ceil(totalPages / 10)
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState("")
    const [pageQuantity, setPageQuantity] = useState(Number(numberPages))
    const dispatch = useDispatch()
    const users = useSelector(state => state.users.users)
    const usersItems = users.map(user => <User key={user.id} {...user}/>)


    useEffect(() => {
        dispatch(fetchingUsers({page, search}))
    }, [page, search])

    return (
        <Container>
            <TextField
                fullWidth
                label="Find friends"
                value={search}
                onChange={event => setSearch(event.target.value)}
            />
            {!!pageQuantity && <Pagination
                count={pageQuantity}
                page={page}
                onChange={(_, num) => setPage(num)}
                sx={{my: 3, mx: "auto", width: "fit-content"}}
            />}
            <Stack spacing={4}>
                {usersItems}
            </Stack>
        </Container>
    );
};

export default React.memo(Users);