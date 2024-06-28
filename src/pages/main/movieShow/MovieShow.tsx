import React, { useCallback, useState } from 'react';
import { Avatar, Tabs } from '@mui/material';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import BackIcon from '../../../components/common/BackIcon';
import { useNavigate } from 'react-router-dom';

import './MovieShow.module.css';

interface MovieShowProps {}

const MovieShow: React.FC<MovieShowProps> = () => {
    const [value, setValue] = useState<number>(0);
    const navigate = useNavigate();

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handlePrevPage = useCallback(() => {
        navigate(-1);
    }, [navigate]);

    return (
        <div>
            <header>
                <div className='handlePrevPageIcon' onClick={handlePrevPage}><BackIcon label="Back" /></div>
                <h1>Movie Detail</h1>
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
            <Avatar />
            Show
        </div>
    );
};

export default MovieShow;