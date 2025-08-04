import { Box, Stack } from '@mui/material';
import AvatarBlock from '../../components/AvatarBlock/AvatarBlock';
import ClickerButton from '../../components/ClickerButton/ClickerButton';
import QuestsBar from '../../components/QuestsBar/QuestsBar';
import StatsBar from '../../components/StatsBar/StatsBar';
import { commonContainer } from '../../styles/layout';

function MainScreen() {
  return (
    <Box sx={commonContainer}>
      <Stack spacing={2}>
        <AvatarBlock />
        <QuestsBar />
        <ClickerButton />
        <StatsBar />
      </Stack>
    </Box>
  );
}

export default MainScreen;
