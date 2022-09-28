import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {LibraryMusic} from "@mui/icons-material";
import {authService} from "../../services/authService";
import {Button} from "@mui/material";

export default function Header() {
    return (
        <AppBar
            color={"primary"} position="fixed" sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}>
            <Toolbar>
                <LibraryMusic fontSize={"large"}/>
                <Typography
                    variant="h3"
                    noWrap
                    align="left"
                    component="div"
                    sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
                >
                    Spotify
                </Typography>
                <Button variant="contained" onClick={authService.logout}>Logout</Button>
            </Toolbar>
        </AppBar>
    );
}
