import React from "react";
import {Routes, Route } from "react-router-dom"

import { Box } from "@mui/material"

import { Main, Channel, VideoDetail, Search, Navbar } from "../exporter";

const App = () => {
    return(
        <Box>
            <Navbar />
                <Routes>
                    <Route path="/" element={ <Main /> }/>
                    <Route path="/channel/:id" element={ <Channel /> }/>
                    <Route path="/video/:id" element={ <VideoDetail /> } />
                    <Route path="/search/:id" element={ <Search /> } />
                </Routes>
        </Box>
        
    )
}

export default App;