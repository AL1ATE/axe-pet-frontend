import { Stack, Box, Typography } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import LoginIcon from '@mui/icons-material/Login';
import {
  questsContainer,
  getQuestCardStyle,
  questIconStyle,
  questLabelStyle
} from '../../styles/components/QuestsBar.styles';

function QuestsBar() {
  const quests = [
    { label: 'Ежедневная награда', icon: <CalendarMonthIcon sx={questIconStyle} />, completed: true },
    { label: 'Пригласи друзей', icon: <GroupAddIcon sx={questIconStyle} />, completed: false },
    { label: 'Войти 2 раза за день', icon: <LoginIcon sx={questIconStyle} />, completed: true },
  ];

  return (
    <Stack direction="row" justifyContent="space-between" spacing={1} sx={questsContainer}>
      {quests.map((item, index) => (
        <Box
          key={index}
          role="button"
          tabIndex={0}
          sx={(theme) => getQuestCardStyle(theme, item.completed)}
          onClick={() => {
            // handle quest click
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              // handle keyboard click
              e.preventDefault();
            }
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {item.icon}
            <Typography sx={questLabelStyle}>{item.label}</Typography>
          </Box>
        </Box>
      ))}
    </Stack>
  );
}

export default QuestsBar;
