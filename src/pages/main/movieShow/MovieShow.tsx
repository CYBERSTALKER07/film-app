import React, { useState } from 'react';
import { Avatar, Tabs } from '@mui/material';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import './MovieShow.module.css'

interface MovieShowProps {

}

const MovieShow: React.FC<MovieShowProps> = () => {
    const [value, setValue] = useState<number>(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <div>
            <header>
                <div></div>
                <h1>Movie Deatail</h1>
             
            </header>
          
            <div className='image'><img src='' alt='' /></div>
            <Box className='tabs'>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons={false}
                    aria-label="scrollable prevent tabs example">
                    <Tab label="Item One" />
                    <Tab label="Item Two" />
                    <Tab label="Item Three" />

                </Tabs>
            </Box>
            <Avatar/>
            Show

        </div>
    );
};

export default MovieShow;