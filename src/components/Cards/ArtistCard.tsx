import React from 'react';
import {Card, CardActionArea, CardContent, CardMedia} from "@mui/material";
import Typography from "@mui/material/Typography";
import NoPhotographyIcon from '@mui/icons-material/NoPhotography';
import {NavLink} from "react-router-dom";
import Box from "@mui/material/Box";

const ArtistCard = ({artist}: any) => {
    return <Card
        className="artistCard"
        to={`/artist/${artist.id}`}
        component={NavLink}>

        <CardActionArea>
            {artist.images.length ?
                <CardMedia
                    className="cardMedia"
                    component="img"
                    image={artist.images[0].url}
                    alt={artist.name}/> :
                <CardMedia className="cardMedia">
                    <NoPhotographyIcon
                        fontSize="large"
                        sx={{height: '16rem'}}/>
                </CardMedia>}
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {artist.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Popularity: {artist.popularity}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Followers: {artist.followers.total}
                </Typography>
                <Box>
                    {(artist.genres.length ? <Typography variant="body2" color="text.secondary">Genres:
                        {(artist.genres?.map((genre: any, index: number) => (
                            <span key={genre}>  {' ' + artist.genres[index]} </span>)))}
                    </Typography> : null)}
                </Box>
            </CardContent>
        </CardActionArea>
    </Card>

};

export default ArtistCard;