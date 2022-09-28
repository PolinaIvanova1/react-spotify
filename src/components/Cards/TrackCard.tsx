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

const TrackCard = ({item}: any) => {
    return <List disablePadding>
        <ListItem disablePadding>
            <ListItemButton>
                <ListItemAvatar>
                    {item.album.images.length ?
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
                        {item.name}
                    </Typography>

                </ListItemText>
            </ListItemButton>

        </ListItem>
    </List>

};

export default TrackCard;