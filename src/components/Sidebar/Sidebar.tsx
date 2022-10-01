import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InfoIcon from '@mui/icons-material/Info';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import PageviewIcon from '@mui/icons-material/Pageview';
import HomeIcon from '@mui/icons-material/Home';
import {NavLink, useLocation} from "react-router-dom";

const drawerWidth = 260;

export default function Sidebar() {
    const location = useLocation();


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
            "name": "Search track",
            "to": "/searchTracks",
            "icon": <SavedSearchIcon/>,
            "isDivider": false
        },
        {
            "name": "Search album",
            "to": "/searchAlbums",
            "icon": <PageviewIcon/>,
            "isDivider": true
        },
        /*        {
                    "name": "My playlist",
                    "to": "/searchArtists",
                    "icon": <FavoriteIcon/>,
                    "isDivider": true
                },*/
        {
            "name": "About Spotify",
            "to": "/aboutUs",
            "icon": <InfoIcon/>,
            "isDivider": false
        },
    ]


    // @ts-ignore
    return (<Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {width: drawerWidth, boxSizing: 'border-box'},
            }}

        >
            <Box className={"sidebar"} sx={{overflow: 'auto'}}>
                <List>
                    {navLinks.map((link) => {
                        const isActive = location.pathname === link.to
                        return <Box key={link.name}>
                            <ListItemButton component={NavLink} to={link.to}
                                            className={isActive ? "sidebar__item-active" : "sidebar__item"}>
                                <ListItem disablePadding>
                                    <ListItemIcon>
                                        {link.icon}
                                    </ListItemIcon>
                                    <ListItemText
                                        secondaryTypographyProps={{fontSize: '1.25rem'}}
                                        secondary={link.name}/>
                                </ListItem>
                            </ListItemButton>


                            {(link.isDivider) ? <Divider/> : null}
                        </Box>
                    })}
                </List>
            </Box>
        </Drawer>

    );
}