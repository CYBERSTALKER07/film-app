import React from 'react';
import { Backup, BackupOutlined } from '@mui/icons-material';
import { Icon } from '@mui/material';


interface BackIconProps {
    label: string;
}

const BackUp = {
    label: 'Back',
    Icon: <BackupOutlined />
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