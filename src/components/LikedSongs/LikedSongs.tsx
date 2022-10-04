import React, {useEffect, useState} from 'react';
import {userService} from "../../services/userService";
import TrackCard from "../Cards/TrackCard";
import { ContentBoxStyled } from '../ContentBox/ContentBox.styled';
import Typography from "@mui/material/Typography";

const LikedSongs = () => {
    const [likedSongs, setLikedSongs] = useState([] as any)
    const getLikedSongs = async () => {
        const songs = await userService.getLikedSongs()
        setLikedSongs(songs.items?.map((item: any) => item.track))
    }

    useEffect(() => {
        getLikedSongs()
    }, [])

    return (
        <ContentBoxStyled className="liked-songs">
            <Typography variant="h3" className="liked-songs__title">
                Liked songs
            </Typography>
            {likedSongs.map((item: any) => <TrackCard key={item.id} item={item}/>)}
        </ContentBoxStyled>
    );
};

export default LikedSongs;