import React, {useState} from 'react';
import Box from "@mui/material/Box";
import {SearchOutlined} from "@mui/icons-material";
import IconButton from '@mui/material/IconButton';
import {searchService} from "../../services/searchService";
import {TextField} from "@mui/material";
import {connect} from "react-redux";
import {ContentBoxStyled} from "../ContentBox/ContentBox.styled";
import AlbumCard from "../Cards/AlbumCard";

const SearchAlbums = ({searchAlbums, albums}: any) => {

    const [searchKey, setSearchKey] = useState("")
    const getAlbums = async () => {
        searchAlbums(await searchService.searchAlbums(searchKey))
    }

    return (
        <ContentBoxStyled component="main" sx={{flexGrow: 1, p: 3}}>
            <div className={"search"}>
                <TextField
                    type="text"
                    onChange={e => setSearchKey(e.target.value)}
                    fullWidth
                    id="outlined-basic"
                    label="Search album"
                    variant="outlined"
                    onKeyPress={(event => {
                        if (event.key === "Enter") {
                            getAlbums()
                        }
                    })}
                    InputProps={{
                        endAdornment: (
                            <IconButton onClick={getAlbums}>
                                <SearchOutlined/>
                            </IconButton>
                        ),
                    }}
                />
                <Box className="search__album-list">
                    {albums?.map((album: any) => <Box className={"search__album"}><AlbumCard key={album.id}
                                                                                             item={album}/></Box>)}
                </Box>
            </div>
        </ContentBoxStyled>);
}

function mapStateToProps(state: any) {
    return {albums: state.albumReducer.albums}
}

function mapDispatchToProps(dispatch: any) {
    return {
        searchAlbums: (data: any) => {
            const action = {type: 'SEARCH_ALBUMS', payload: data}
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchAlbums);