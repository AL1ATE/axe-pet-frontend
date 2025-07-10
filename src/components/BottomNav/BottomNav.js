import { Box, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import CollectionsIcon from '@mui/icons-material/Collections';
import AssignmentIcon from '@mui/icons-material/Assignment';
import StarIcon from '@mui/icons-material/Star';
import { useState } from 'react';
import {
  navWrapper,
  navInner,
  navItem,
  navIcon,
  navLabel,
} from '../../styles/components/BottomNav.styles';

const navItems = [
  { label: 'ГЛАВНАЯ', icon: <HomeIcon />, index: 0 },
  { label: 'КОЛЛЕКЦИЯ', icon: <CollectionsIcon />, index: 1 },
  { label: 'ЗАДАНИЯ', icon: <AssignmentIcon />, index: 2 },
  { label: 'ТОП', icon: <StarIcon />, index: 3 },
];

function BottomNav() {
  const [selected, setSelected] = useState(0);

  return (
    <Box sx={navWrapper}>
      <Box sx={(theme) => navInner(theme)}>
        {navItems.map((item) => {
          const isActive = selected === item.index;
          return (
            <Box
              key={item.index}
              onClick={() => setSelected(item.index)}
              sx={(theme) => navItem(theme, isActive)}
            >
              <Box sx={navIcon(isActive)}>{item.icon}</Box>
              <Typography sx={navLabel(isActive)}>{item.label}</Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default BottomNav;
