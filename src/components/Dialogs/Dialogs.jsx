import {Box, Container} from "@mui/material";
import {useSelector} from "react-redux";
import {Dialog} from "./Dialog";

export const Dialogs = () => {

    const dialogs = useSelector(state => state.dialogs.dialogs)
    const dialogItems = dialogs.map(dialog => <Dialog key={dialog.id} name={dialog.name}/>)

    return (
        <Box sx={{ pt: 5 }}>
            <Container sx={{  }}>
                {dialogItems}
            </Container>
        </Box>
    )
}

