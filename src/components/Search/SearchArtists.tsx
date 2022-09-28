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
import ArtistCard from "../Cards/ArtistCard";
import {ContentBoxStyled} from "../ContentBox/ContentBox.styled";

const SearchArtists = ({searchArtists, artists}: any) => {

    const [searchKey, setSearchKey] = useState("")
    const getArtists = async () => {
        searchArtists(await searchService.searchArtists(searchKey))
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
                        label="Search artist..."
                        variant="outlined"
                        InputProps={{
                            endAdornment: (
                                <IconButton onClick={getArtists}>
                                    <SearchOutlined/>
                                </IconButton>
                            ),
                        }}
                    />
                    <Box style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between'
                    }}>{artists?.map((artist: any) => <ArtistCard
                        artist={artist} key={artist.id}/>)}
                    </Box>
                </div>
            </ContentBoxStyled>
        </Box>

    );
}

function mapStateToProps(state: any) {
    return {artists: state.artistReducer.artists}
}

function mapDispatchToProps(dispatch: any) {
    return {
        searchArtists: (data: any) => {
            const action = {type: 'SEARCH_ARTISTS', payload: data}
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchArtists);
