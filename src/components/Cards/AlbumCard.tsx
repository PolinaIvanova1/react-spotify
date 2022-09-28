import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia} from "@mui/material";
import Typography from "@mui/material/Typography";
import NoPhotographyIcon from '@mui/icons-material/NoPhotography';

const AlbumCard = ({item}: any) => {
    return <Card
        className="album-card">
        <CardActionArea className="album-card__info">
            {item.images.length ?
                <CardMedia
                    className="album-card__media"
                    component="img"
                    image={item.images[0].url}
                    alt={item.name}/> :
                <CardMedia className="album-card__media">
                    <NoPhotographyIcon
                        fontSize="large"
                       />
                </CardMedia>}
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Release date: {item.release_date}
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>

};

export default AlbumCard;