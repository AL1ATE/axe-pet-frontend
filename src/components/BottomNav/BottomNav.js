import { Box, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import CollectionsIcon from '@mui/icons-material/Collections';
import AssignmentIcon from '@mui/icons-material/Assignment';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

import {
    navWrapper,
    navInner,
    navItem,
    navIcon,
    navLabel,
    lockBadge,
} from '../../styles/components/BottomNav.styles';

import ShopLockedModal from './ShopLockedModal';

const navItems = [
    { label: 'ГЛАВНАЯ',   icon: <HomeIcon />,        path: '/' },
    { label: 'КОЛЛЕКЦИЯ', icon: <CollectionsIcon />, path: '/collection' },
    { label: 'ЗАДАНИЯ',   icon: <AssignmentIcon />,  path: '/quests' },
    { label: 'МАГАЗИН',   icon: <StorefrontIcon />,  path: '/shop', locked: true },
];

function BottomNav() {
    const navigate = useNavigate();
    const location = useLocation();
    const [open, setOpen] = useState(false);

    const handleClick = (item) => {
        if (item.locked) {
            setOpen(true);
            return;
        }
        navigate(item.path);
    };

    return (
        <>
            <Box sx={navWrapper}>
                <Box sx={(theme) => navInner(theme)}>
                    {navItems.map((item) => {
                        const isSelected = location.pathname === item.path;
                        const isLocked = !!item.locked;

                        return (
                            <Box
                                key={item.path}
                                onClick={() => handleClick(item)}
                                sx={(theme) => navItem(theme, isSelected, isLocked)}
                            >
                                <Box sx={navIcon(isSelected, isLocked)}>{item.icon}</Box>
                                <Typography sx={navLabel(isSelected, isLocked)}>
                                    {item.label}
                                </Typography>

                                {isLocked && (
                                    <Box sx={lockBadge}>
                                        <LockRoundedIcon fontSize="inherit" />
                                    </Box>
                                )}
                            </Box>
                        );
                    })}
                </Box>
            </Box>
            <ShopLockedModal
                open={open}
                onClose={() => setOpen(false)}
                imageSrc="/assets/images/shop-teaser.png"
            />
        </>
    );
}

export default BottomNav;
