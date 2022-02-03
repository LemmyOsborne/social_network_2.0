import React, { useEffect, useState } from "react"
import { fetchingUsers } from "../../store/usersSlice"
import { User } from "./User/User"
import { Container, InputBase, Pagination, PaginationItem, Paper, Stack } from "@mui/material"
import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../store/hooks"


const Users = () => {

    const { totalPages } = useAppSelector(state => state.users)
    const numberPages = Math.ceil(totalPages / 10)
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState("")

    const dispatch = useAppDispatch()
    const users = useAppSelector(state => state.users.users)
    const usersItems = users.map(user => <User key={user.id} {...user}/>)
    const [pageQuantity, setPageQuantity] = useState(0)


    useEffect(() => {
        dispatch(fetchingUsers({page, search}))
        if (numberPages < page) {
            setPage(1)
        }
        setPageQuantity(numberPages)

    }, [page, search, numberPages])


    return (
        <Container>
            <Paper sx={{p: 1, mt: 4}}>
                <InputBase
                    fullWidth
                    value={search}
                    onChange={event => setSearch(event.target.value)}
                    placeholder="Find friends"
                />
            </Paper>

            {!!pageQuantity && <Pagination
                count={pageQuantity}
                page={page}
                onChange={(_, num) => setPage(num)}
                sx={{my: 3, mx: "auto", width: "fit-content"}}
                renderItem={
                    (item) => (
                        <PaginationItem
                            component={Link}
                            to={`/users?page=${item.page}`}
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