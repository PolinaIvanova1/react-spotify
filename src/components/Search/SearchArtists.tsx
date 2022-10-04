import React, {useState} from 'react';
import Box from "@mui/material/Box";
import {SearchOutlined} from "@mui/icons-material";
import IconButton from '@mui/material/IconButton';
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

    return (
        <ContentBoxStyled component="main" sx={{flexGrow: 1, p: 3}}>
            <div className={"search"}>
                <TextField
                    type="text"
                    onChange={e => setSearchKey(e.target.value)}
                    fullWidth
                    id="outlined-basic"
                    label="Search artist"
                    variant="outlined"
                    onKeyPress={(event => {
                        if (event.key === "Enter") {
                            getArtists()
                        }
                    })}
                    InputProps={{
                        endAdornment: (
                            <IconButton onClick={getArtists}>
                                <SearchOutlined/>
                            </IconButton>
                        ),
                    }}
                />
                <Box className="search__list">
                    {artists?.map((artist: any) => <Box className={"search__artist"} key={artist.id}><ArtistCard
                        artist={artist}/></Box>)}
                </Box>
            </div>
        </ContentBoxStyled>);
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
