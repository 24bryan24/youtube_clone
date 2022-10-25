import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { Navbar, Feed, ChannelDetail, SearchFeed, VideoDetail} from './components/index';

// Photo delaying on Channel Detail page
// Screen resize on ChannelDetail and Feed page also? I believe has different widths when smaller
// ...and they don't shrink or grow...they just disappear
// Search Bar dont reset to "Search..."
//DONE
//Weird symbols in the Video Titles ... language or rendering of ampersand


const App = () => (
        <BrowserRouter>
            <Box sx={{backgroundColor: '#000'}}>
                <Navbar />
                <Routes>
                    <Route path='/' exact element={<Feed />} />
                    <Route path='/home/:searchTerm' exact element={<Feed />} />
                    <Route path='/video/:id'  element={<VideoDetail />} />
                    <Route path='/channel/:id'  element={<ChannelDetail />} />
                    <Route path='/search/:searchTerm'  element={<SearchFeed />} />
                </Routes>
            </Box>
        </BrowserRouter>
        )
        

export default App