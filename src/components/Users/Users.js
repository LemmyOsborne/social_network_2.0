import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchingUsers} from "../../store/usersSlice";
import {User} from "./User/User";
import {Container, Pagination, PaginationItem, Stack, TextField} from "@mui/material";
import {Link, useLocation} from "react-router-dom";


const Users = () => {

    const location = useLocation()
    const totalPages = useSelector(state => state.users.totalPages)
    const numberPages = Math.ceil(totalPages / 10)
    const [page, setPage] = useState(parseInt(location.search?.split("=")[1] || 1))
    const [search, setSearch] = useState("")

    const dispatch = useDispatch()
    const users = useSelector(state => state.users.users)
    const usersItems = users.map(user => <User key={user.id} {...user}/>)
    const [pageQuantity, setPageQuantity] = useState(0)


    useEffect(() => {
        dispatch(fetchingUsers({page, search}))
        if (numberPages < page) {
            setPage(1)
        }
        setPageQuantity(numberPages)

    }, [page, search])



    return (
        <Container>
            <TextField
                fullWidth
                label="Find friends"
                value={search}
                onChange={event => setSearch(event.target.value)}
                sx={{ m: "3rem 0" }}
            />
            {!!pageQuantity && <Pagination
                count={pageQuantity}
                page={page}
                onChange={(_, num) => setPage(num)}
                sx={{my: 3, mx: "auto", width: "fit-content"}}
                renderItem={
                    (item) => (
                        <PaginationItem
                            component={Link}
                            to={`/users?page=${page}`}
                            {...item}
                        />
                    )
                }
            />}
            <Stack spacing={4}>
                {usersItems}
            </Stack>
        </Container>
    );
};

export default Users;