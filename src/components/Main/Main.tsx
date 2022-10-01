import React, {useEffect, useState} from 'react';
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {albumService} from "../../services/albumService";
import {userService} from "../../services/userService";
import AlbumCard from "../Cards/AlbumCard";

const Main = () => {
    let token = window.localStorage.getItem("token")

    /*    const [playingTrack, setPlayingTrack] = useState()

        const chooseTrack = (track: any) => {
            setPlayingTrack(track)
        }*/

    const [newReleases, setNewReleases] = useState({} as any)
    const getNewReleases = async () => {
        setNewReleases(await albumService.getNewReleases())
    }

    useEffect(() => {
        getNewReleases()
    }, [])

    const [user, setUser] = useState({} as any)
    const getUser = async () => {
        setUser(await userService.getUser())
    }

    useEffect(() => {
        getUser()
    }, [])

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <Header/>
            <Sidebar/>
            <Box className={"main-page"}>
                <Typography variant="h5" className={"main-page__user"}>
                    {user?.display_name ? `Glad to see you, ${user.display_name}` : null}
                </Typography>
                <Box className={"main-page__trends"}>
                    <Typography variant="h4">
                        Trending now
                    </Typography>
                    <Box className={"trends__list"}>
                        {newReleases.albums?.items?.map((album: { name: any; id: string }) => <AlbumCard item={album}
                                                                                                         key={album.id}/>)}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}


export default Main;