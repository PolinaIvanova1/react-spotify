import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FavoriteIcon from '@mui/icons-material/Favorite';
import InfoIcon from '@mui/icons-material/Info';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import PageviewIcon from '@mui/icons-material/Pageview';
import HomeIcon from '@mui/icons-material/Home';
import {NavLink} from "react-router-dom";

const drawerWidth = 300;

export default function Sidebar() {
    const navLinks = [
        {
            "name": "Home",
            "to": "/main",
            "icon": <HomeIcon/>,
            "isDivider": true
        },
        {
            "name": "Search artists",
            "to": "/searchArtists",
            "icon": <PersonSearchIcon/>,
            "isDivider": false
        },
        {
            "name": "Search song",
            "to": "/searchArtists",
            "icon": <SavedSearchIcon/>,
            "isDivider": false
        },
        {
            "name": "Search album",
            "to": "/searchArtists",
            "icon": <PageviewIcon/>,
            "isDivider": true
        },
        {
            "name": "My playlist",
            "to": "/searchArtists",
            "icon": <FavoriteIcon/>,
            "isDivider": true
        },
        {
            "name": "About us",
            "to": "/aboutUs",
            "icon": <InfoIcon/>,
            "isDivider": true
        },
    ]

    return (<Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {width: drawerWidth, boxSizing: 'border-box'},
            }}
        >
            <Toolbar/>
            <Box sx={{overflow: 'auto'}}>
                <List>
                    {navLinks.map((link) => (
                        < Box key={link.name}>
                            <ListItem
                                disablePadding
                                component={NavLink}
                                to={link.to}
                            >
                                <ListItemButton>
                                    <ListItemIcon>
                                        {link.icon}
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={link.name}/>
                                </ListItemButton>
                            </ListItem>
                            {(link.isDivider) ? <Divider/> : null}
                        </Box>
                    ))}

                </List>
                <ListItem disablePadding key={'Change theme'}>
                    <ListItemButton>
                        <ListItemIcon>
                            <FavoriteIcon/>
                        </ListItemIcon>
                        <ListItemText primary={'Change theme'}/>
                    </ListItemButton>
                </ListItem>
            </Box>
        </Drawer>

    );
}
