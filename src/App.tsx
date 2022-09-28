import React from 'react';
import './App.css';
import {useEffect} from 'react';
import {getRequest} from "./helpers/request/requestUtils";
import {BrowserRouter as Router, Routes, Route, Link, NavLink} from "react-router-dom";
import {authService} from "./services/authService";
import Login from "./components/Login/Login";
import Main from "./components/Main/Main";
import SearchArtists from "./components/Search/SearchArtists";
import AboutUs from "./components/AboutUs/AboutUs";
import {CLIENT_ID, REDIRECT_URI} from './services/config';
import {connect} from "react-redux";
import Artist from "./components/Artist/Artist";

function App() {

    useEffect(() => {
        authService.login()
    }, [])

    return (
        <Router>
            <Routes>
                <Route path="/">
                    <Route path="/" element={<Login/>}/>
                    <Route path="/main" element={<Main/>}></Route>
                    <Route path="/searchArtists" element={<SearchArtists/>}></Route>
                    <Route path="/artist/:id" element={<Artist/>}></Route>
                    <Route path="/aboutUs" element={<AboutUs/>}></Route>
                </Route>

            </Routes>

        </Router>
    );
}

function mapStateToProps(state: any) {
    return {users: state.artistReducer}
}

function mapDispatchToProps(dispatch: any) {
    return {
        addUsers: (data: any) => {
            const action = {type: 'ADD_USERS', payload: data}
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
