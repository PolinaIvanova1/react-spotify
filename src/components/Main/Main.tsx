import React, {useEffect, useState} from 'react';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {albumService} from "../../services/albumService";
import {userService} from "../../services/userService";
import AlbumCard from "../Cards/AlbumCard";
import {ContentBoxStyled} from '../ContentBox/ContentBox.styled';

const Main = () => {
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
            <ContentBoxStyled className={"main-page"}>
                <Typography variant="h5" className={"main-page__user"}>
                    {user?.display_name ? `Glad to see you, ${user.display_name}` : null}
                </Typography>
                <Box className={"main-page__trends"}>
                    <Typography variant="h4">
                        Trending now
                    </Typography>
                    <Box className={"trends__list"}>
                        {newReleases.albums?.items?.map((album: { name: any; id: string }) =>
                            <Box key={album.id}
                                 className={"trends__album"}>
                                <AlbumCard
                                    item={album}/>
                            </Box>)}
                    </Box>
                </Box>
            </ContentBoxStyled>

    );
}


export default Main;