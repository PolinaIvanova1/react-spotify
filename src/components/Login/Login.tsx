import React from 'react';

import {useEffect, useState} from 'react';
import axios from "axios";

import {getRequest} from "../../helpers/request/requestUtils";
import {Button, Grid} from "@mui/material";

function App() {
    const CLIENT_ID = "7b414530c229452986b6318b1a178be0"
    const REDIRECT_URI = "http://localhost:3000/main"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"

    const [token, setToken] = useState("" + "")
    useEffect(() => {
        const hash = window.location.hash
        console.log(hash)
        let token = window.localStorage.getItem("token")
        console.log(token)
        if (!token && hash) {
            // @ts-ignore
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }

        // @ts-ignore
        setToken(token)

    }, [])

    const [searchKey, setSearchKey] = useState("")
    const [artists, setArtists] = useState([])
    const searchArtists = async (e: any) => {
        e.preventDefault()
        const {data} = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                q: searchKey,
                type: "artist"
            }
        })

        setArtists(data.artists.items)
    }

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
                href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
                Login to Spotify
            </Button>
        </Grid>
    );
}

export default App;
