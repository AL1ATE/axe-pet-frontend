import { useState } from 'react';
import { Stack, Box, Typography } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import LoginIcon from '@mui/icons-material/Login';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import {
  questsContainer,
  getQuestCardStyle,
  questIconStyle,
  questLabelStyle
} from '../../styles/components/QuestsBar.styles';
import QuestModal from './QuestModal';

const getQuestIcon = (type) => {
  switch (type) {
    case 'daily':
      return <CalendarMonthIcon sx={questIconStyle} />;
    case 'invite':
      return <GroupAddIcon sx={questIconStyle} />;
    case 'login_streak':
      return <LoginIcon sx={questIconStyle} />;
    default:
      return <HelpOutlineIcon sx={questIconStyle} />;
  }
};

function QuestsBar() {
  const [selectedQuest, setSelectedQuest] = useState(null);

  const quests = [
    {
      title: 'Ежедневная награда',
      description: 'Забери свой ежедневный бонус за вход в игру.',
      reward: 5,
      type: 'daily',
      completed: false,
    },
    {
      title: 'Пригласи друзей',
      description: 'Получай награды за каждого приглашённого друга.',
      reward: 10,
      type: 'invite',
      completed: false,
    },
    {
      title: 'Войти 2 раза за день',
      description: 'Активный пользователь? Получай бонус за 2 входа в день!',
      reward: 3,
      type: 'login_streak',
      completed: true,
    },
  ];

  return (
    <>
      <Stack direction="row" justifyContent="space-between" spacing={1} sx={questsContainer}>
        {quests.map((item, index) => (
          <Box
            key={index}
            role="button"
            tabIndex={0}
            sx={(theme) => getQuestCardStyle(theme, item.completed)}
            onClick={() => setSelectedQuest(item)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setSelectedQuest(item);
                e.preventDefault();
              }
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {getQuestIcon(item.type)}
              <Typography sx={questLabelStyle}>{item.title}</Typography>
            </Box>
          </Box>
        ))}
      </Stack>

      <QuestModal
        open={Boolean(selectedQuest)}
        onClose={() => setSelectedQuest(null)}
        quest={selectedQuest}
      />
    </>
  );
}

export default QuestsBar;
