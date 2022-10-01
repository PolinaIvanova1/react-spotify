import React from 'react';

import {Button, Grid} from "@mui/material";
import {AUTH_ENDPOINT, CLIENT_ID, REDIRECT_URI, RESPONSE_TYPE} from "../../services/config";

function App() {

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{minHeight: '100vh'}}>
            <Button
                variant="contained"
                color="secondary"
                href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
                Login to Spotify
            </Button>
        </Grid>
    );
}

export default App;
