import { Button, Stack, Box, Typography } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import LoginIcon from '@mui/icons-material/Login';
import { questsContainer, getQuestButtonStyle, questIconStyle, questLabelStyle } from '../../styles/components/QuestsBar.styles';

function QuestsBar() {
  const quests = [
    { label: 'Ежедневная награда', icon: <CalendarMonthIcon sx={questIconStyle} />, completed: true },
    { label: 'Пригласи друзей', icon: <GroupAddIcon sx={questIconStyle} />, completed: false },
    { label: 'Войти 2 раза за день', icon: <LoginIcon sx={questIconStyle} />, completed: true },
  ];

  return (
    <Stack direction="row" justifyContent="space-between" spacing={1} sx={questsContainer}>
      {quests.map((item, index) => (
        <Button key={index} sx={(theme) => getQuestButtonStyle(theme, item.completed)}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {item.icon}
            <Typography sx={questLabelStyle}>{item.label}</Typography>
          </Box>
        </Button>
      ))}
    </Stack>
  );
}

export default QuestsBar;
