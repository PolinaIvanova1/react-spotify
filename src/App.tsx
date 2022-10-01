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

function App(props: any) {
    useEffect(() => {
        // @ts-ignore
        (async () => props.setToken(await authService.login()))();
    }, [])


    return (
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
    );
}


function mapStateToProps(state: any) {
    return {token: state.tokenReducer.token}
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
