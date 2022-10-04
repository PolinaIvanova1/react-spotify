import React, {useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import {
    Avatar
} from "@mui/material";
import {ContentBoxStyled} from "../ContentBox/ContentBox.styled";
import {artistService} from "../../services/artistService";
import {useParams} from "react-router-dom";
import NoPhotographyIcon from "@mui/icons-material/NoPhotography";
import Typography from "@mui/material/Typography";
import TrackCard from "../Cards/TrackCard";
import AlbumCard from "../Cards/AlbumCard";

const Artist = () => {
    const {id} = useParams()

    const [artist, setArtist] = useState({} as any)

    const [tracks, setTracks] = useState({} as any)

    const [albums, setAlbums] = useState({} as any)

    const getArtist = async () => {
        if (id) {
            setArtist(await artistService.getArtist(id))
        }
    }

    useEffect(() => {
        getArtist()
    }, [])

    const getTracks = async () => {
        if (id) {
            setTracks(await artistService.getTracks(id))
        }
    }

    useEffect(() => {
        getTracks()
    }, [])

    const getAlbums = async () => {
        if (id) {
            setAlbums(await artistService.getAlbums(id))
        }
    }

    useEffect(() => {
        getAlbums()
    }, [])

    return (<Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <Header/>
            <Sidebar/>
            <ContentBoxStyled component="main" sx={{flexGrow: 1, p: 3}}>
                {artist.id &&
                  <Box className={"artist"}>
                    <Typography variant="h3" className={"artist__name"}>
                        {artist.name}
                    </Typography>
                    <Box className={"artist__container"}>
                      <Box className={"artist__media"}>
                          {artist.images.length ?
                              <Avatar
                                  alt={artist.name}
                                  src={artist.images[0].url}
                                  sx={{width: 300, height: 300}}/> :
                              <Avatar className="cardMedia">
                                  <NoPhotographyIcon
                                      fontSize="large"
                                      sx={{width: 300, height: 300}}/>
                              </Avatar>}

                      </Box>
                      <Box className={"artist__info"}>
                        <Typography variant="h6" color="text.secondary">
                          Popularity: {artist.popularity}
                        </Typography>
                        <Typography variant="h6" color="text.secondary">
                          Followers: {artist.followers.total}
                        </Typography>
                        <Box
                          className={"artist__genres"}>
                            {(artist.genres.length ? <>
                                {(artist.genres?.map((genre: any, index: number) => (
                                    <Typography
                                        variant="h6"
                                        color="text.secondary"
                                        key={genre}>
                                        {' ' + artist.genres[index]}
                                    </Typography>)))}
                            </> : null)}
                        </Box>
                      </Box>
                    </Box>
                    <Box className={"artist__music"}>
                      <Box className={"artist__tracks-list"}>
                        <Typography variant="h4" className={"tracks-list__title"}>
                          Top tracks
                        </Typography>
                             {tracks.tracks?.map((item: any) => <TrackCard item={item} key={item.id}/>)}
                      </Box>
                      <Box className={"artist__albums"}>
                        <Typography variant="h4" className={"albums__title"}>
                          Top albums
                        </Typography>
                        <Box className={"albums__list"}>
                            {albums.items?.slice(0, 6).map((item: any) => <Box className="artist__album"><AlbumCard item={item} key={item.id}/></Box>)}
                        </Box>
                      </Box>
                    </Box>
                  </Box>

                }

            </ContentBoxStyled>
        </Box>

    );
}

export default Artist;
