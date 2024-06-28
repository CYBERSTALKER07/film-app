import React from 'react';
import { ArrowBack, Backspace, Backup, BackupOutlined } from '@mui/icons-material';
import { Icon } from '@mui/material';


interface BackIconProps {
    label: string;
}

const BackUp = {
    label: 'Back',
    Icon: <ArrowBack />
}

const BackIcon: React.FC<BackIconProps> = () => {
    return (
        <div>
            <Icon>{BackUp.Icon}</Icon>
            <span>{BackUp.label}</span>
        </div>
    );
};

export default BackIcon;