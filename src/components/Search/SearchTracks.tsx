import React, {useState} from 'react';
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import {SearchOutlined} from "@mui/icons-material";
import IconButton from '@mui/material/IconButton';
import CssBaseline from "@mui/material/CssBaseline";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import {searchService} from "../../services/searchService";
import {TextField} from "@mui/material";
import {connect} from "react-redux";
import {ContentBoxStyled} from "../ContentBox/ContentBox.styled";
import TrackCard from "../Cards/TrackCard";

const SearchTracks = ({searchTracks, tracks}: any) => {

    const [searchKey, setSearchKey] = useState("")
    const getTracks = async () => {
        searchTracks(await searchService.searchTracks(searchKey))
    }

    return (<Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <Header/>
            <Sidebar/>
            <ContentBoxStyled component="main" sx={{flexGrow: 1, p: 3}}>
                <Toolbar/>
                <div>
                    <TextField
                        type="text"
                        onChange={e => setSearchKey(e.target.value)}
                        fullWidth
                        id="outlined-basic"
                        label="Search track..."
                        variant="outlined"
                        onKeyPress={(event => {
                            if (event.key === "Enter") {
                                getTracks()
                            }
                        })}
                        InputProps={{
                            endAdornment: (
                                <IconButton onClick={getTracks}>
                                    <SearchOutlined/>
                                </IconButton>
                            ),
                        }}
                    />
                    <Box style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexDirection: 'column'
                    }}>
                        {tracks?.map((track: any) => <TrackCard key={track.id} item={track}/>)}
                    </Box>
                </div>
            </ContentBoxStyled>
        </Box>

    );
}

function mapStateToProps(state: any) {
    return {tracks: state.trackReducer.tracks}
}

function mapDispatchToProps(dispatch: any) {
    return {
        searchTracks: (data: any) => {
            const action = {type: 'SEARCH_TRACKS', payload: data}
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchTracks);