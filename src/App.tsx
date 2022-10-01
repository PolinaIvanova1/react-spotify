import React from 'react';
import './App.css';
import {useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {authService} from "./services/authService";
import Login from "./components/Login/Login";
import Main from "./components/Main/Main";
import SearchArtists from "./components/Search/SearchArtists";
import AboutUs from "./components/AboutUs/AboutUs";
import {connect} from "react-redux";
import Artist from "./components/Artist/Artist";
import SearchTracks from "./components/Search/SearchTracks";
import SearchAlbums from "./components/Search/SearchAlbums";
import {ThemeProvider} from "@mui/material"
import {createTheme} from '@mui/material/styles'

function App(props: any) {

    useEffect(() => {
        // @ts-ignore
        (async () => props.setToken(await authService.login()))();
    }, [])

    const themeLight = createTheme({
        palette: {
            mode: "light",
            primary: {
                main: '#656565'
            },
            secondary: {
                main: '#20d761'
            },
        },
        typography: {
            fontFamily: [
                'Montserrat',
            ].join(','),
        },
    });

    const themeDark = createTheme({
        palette: {
            mode: "dark",
            secondary: {
                main: '#20d761'
            }
        },
        typography: {
            fontFamily: [
                'Montserrat',
            ].join(','),
            allVariants: {
                color: 'white'
            }
        },
    });

    return (
        <ThemeProvider theme={props.theme ? themeLight : themeDark}>
            <Router>
                <Routes>
                    {<Route path="/">
                        <Route path="/" element={<Login/>}/>
                        {props.token &&
                          <>
                            <Route path="/main" element={<Main/>}/>
                            <Route path="/searchArtists" element={<SearchArtists/>}/>
                            <Route path="/searchTracks" element={<SearchTracks/>}/>
                            <Route path="/searchAlbums" element={<SearchAlbums/>}/>
                            <Route path="/artist/:id" element={<Artist/>}/>
                            <Route path="/aboutUs" element={<AboutUs/>}/>
                          </>
                        }
                    </Route>}

                </Routes>

            </Router>
        </ThemeProvider>

    );
}


function mapStateToProps(state: any) {
    return {token: state.tokenReducer.token, theme: state.themeReducer.theme}
}

function mapDispatchToProps(dispatch: any) {
    return {
        setToken: (data: any) => {
            const action = {type: 'SET_TOKEN', payload: data}
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
