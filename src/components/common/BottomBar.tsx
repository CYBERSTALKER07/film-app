import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './BottomBar.css'

type TMenuList = {
    label: string,
    path: string,
    icon: React.ReactNode
}

interface IBottomBarProps {
    menuList: TMenuList[]
}   

const BottomBar: React.FC<IBottomBarProps> = ({ menuList }) => {

    // navigate 
    const navigate = useNavigate();

    // state 
    const [value, setValue] = React.useState(0);

    const handleNavigate = useCallback((route: string) => {
        navigate(route)
    }, [])
    return (
        <Box className='AppBar'>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                    console.log(event);

                }}
            >
                {
                    menuList.map((item) => (
                        <BottomNavigationAction key={item.path} label={item.label} icon={item.icon} onClick={() => handleNavigate(item.path)} />
                    ))
                }
            </BottomNavigation>
        </Box>
    );
};

export default BottomBar;