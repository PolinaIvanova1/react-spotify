import React from 'react';
import {
    Avatar,
    ListItem,
    ListItemAvatar,
    ListItemIcon,
    ListItemText
} from "@mui/material";
import Typography from "@mui/material/Typography";
import NoPhotographyIcon from '@mui/icons-material/NoPhotography';
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from '@mui/icons-material/Favorite';
import Box from "@mui/material/Box";

const TrackCard = ({item}: any) => {

    const durationInMinutes: number = Math.floor((item.duration_ms / 1000 / 60) << 0);
    const durationInSeconds: number = Math.floor((item.duration_ms / 1000) % 60);
    const durationTrack = durationInMinutes + ':' + (durationInSeconds > 10 ? durationInSeconds : ('0' + durationInSeconds))

    return <List disablePadding className="track-card">
        <ListItem disablePadding>
            <ListItemButton>
                <ListItemAvatar>
                    {item.album?.images.length ?
                        <Avatar
                            src={item.album.images[0].url}
                            sx={{width: 60, height: 60}}
                            alt={item.album.name}/> :
                        <ListItemIcon className="track-media">
                            <NoPhotographyIcon
                                sx={{width: 60, height: 60}}
                                fontSize="small"
                            />
                        </ListItemIcon>}
                </ListItemAvatar>
                <ListItemText className="track-name">
                    <Typography variant="body1">
                        {item.name} — {item.artists.map((item: any) => item.name).join(", ")}
                    </Typography>
                </ListItemText>
                <IconButton><FavoriteIcon fontSize={"medium"}/></IconButton>
                <Box> {durationTrack} </Box>
            </ListItemButton>

        </ListItem>
    </List>

};

export default TrackCard;