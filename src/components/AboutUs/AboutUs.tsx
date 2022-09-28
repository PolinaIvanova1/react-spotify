import React from 'react';
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import {ListItem, ListItemIcon, ListItemText} from "@mui/material";
import MusicNoteIcon from '@mui/icons-material/MusicNote';

const AboutUs = () => {
    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <Header/>
            <Sidebar/>
            <Box component="main" sx={{flexGrow: 1, p: 3}}>
                <Toolbar/>
                <Typography variant="h3" paragraph>
                    What is Spotify?
                </Typography>
                <Typography paragraph>

                    Spotify is a digital music, podcast, and video service that gives you access to millions of songs
                    and other content from creators all over the world.


                </Typography>
                <Typography paragraph>
                    Basic functions such as playing music are totally free, but you can also choose to upgrade to
                    Spotify Premium.
                </Typography>
                <Typography paragraph>

                    Whether you have Premium or not, you can:
                    <List>
                        <ListItem disablePadding>
                                <ListItemIcon>
                                    <MusicNoteIcon/>
                                </ListItemIcon>
                                <ListItemText primary="Get recommendations based on your taste"/>
                        </ListItem>
                        <ListItem disablePadding>
                                <ListItemIcon>
                                    <MusicNoteIcon/>
                                </ListItemIcon>
                                <ListItemText primary="Build collections of music and podcasts"/>
                        </ListItem>
                        <ListItem disablePadding>
                                <ListItemIcon>
                                    <MusicNoteIcon/>
                                </ListItemIcon>
                                <ListItemText primary="And more!"/>
                        </ListItem>
                    </List>


                </Typography>
                <Typography paragraph>
                    Spotify is available across a range of devices, including computers, phones, tablets, speakers, TVs,
                    and cars, and you can easily transition from one to another with Spotify Connect.
                </Typography>
                <Typography variant="h4" paragraph>
                    Can I keep music from Spotify?
                </Typography>
                <Typography paragraph>
                    Spotify only gives access to music and podcasts through our apps. Our licensing means there's no way
                    to export our content outside of the app.
                </Typography>
            </Box>
        </Box>

    );
};

export default AboutUs;