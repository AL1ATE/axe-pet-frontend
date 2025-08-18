import React from 'react';
import { Box, Typography, ButtonBase } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { walletButtonBase, walletBalanceBox, walletText } from '../../styles/components/WalletBalance.styles';

export default function WalletBalance({ amount }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/wallet');
    };

    return (
        <ButtonBase sx={walletButtonBase} onClick={handleClick}>
            <Box sx={walletBalanceBox}>
                <Typography sx={walletText}>{amount}</Typography>
            </Box>
        </ButtonBase>
    );
}
