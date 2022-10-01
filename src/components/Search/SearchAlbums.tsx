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
import AlbumCard from "../Cards/AlbumCard";

const SearchAlbums = ({searchAlbums, albums}: any) => {

    const [searchKey, setSearchKey] = useState("")
    const getAlbums = async () => {
        searchAlbums(await searchService.searchAlbums(searchKey))
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
                        label="Search album..."
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
                    <Box style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexDirection: 'column'
                    }}>
                        {albums?.map((album: any) => <AlbumCard key={album.id} item={album}/>)}
                    </Box>
                </div>
            </ContentBoxStyled>
        </Box>

    );
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