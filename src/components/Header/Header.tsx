import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {authService} from "../../services/authService";
import {Button, FormControlLabel, FormGroup} from "@mui/material";
import Box from "@mui/material/Box";
import {connect} from "react-redux";
import {MaterialUISwitch} from "./MaterialUISwitch.style";

function Header(props: any) {

    const changeTheme = () => {
        props.changeTheme(!props.theme);
    };

    return (
        <AppBar
            color={"primary"}
            position="fixed"
            sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}>
            <Toolbar>
                <Box component="img" src={process.env.PUBLIC_URL + "/spotify-icon.svg"} sx={{
                    height: 40,
                    width: 40,
                }}/>
                <Typography
                    variant="h3"
                    noWrap
                    align="left"
                    component="div"
                    sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}, marginLeft: '1rem'}}
                >
                    Spotify
                </Typography>
                <FormGroup>
                    <FormControlLabel style={{margin: " 0.5rem 6rem"}}
                                      control={
                                          <MaterialUISwitch color="secondary" checked={props.theme}
                                                            onChange={changeTheme}/>}
                                      label={''}/>
                </FormGroup>
                <Button variant="contained" color="secondary" onClick={authService.logout}>Logout</Button>
            </Toolbar>
        </AppBar>
    );
}

function mapStateToProps(state: any) {
    return {theme: state.themeReducer.theme}
}

function mapDispatchToProps(dispatch: any) {
    return {
        changeTheme: (data: any) => {
            const action = {type: 'CHANGE_THEME', payload: data}
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

