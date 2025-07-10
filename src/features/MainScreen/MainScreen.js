import { Box, Stack } from '@mui/material';
import Header from '../../components/Header/Header';
import AvatarBlock from '../../components/AvatarBlock/AvatarBlock';
import ClickerButton from '../../components/ClickerButton/ClickerButton';
import QuestsBar from '../../components/QuestsBar/QuestsBar';
import StatsBar from '../../components/StatsBar/StatsBar';
import BottomNav from '../../components/BottomNav/BottomNav';
import { commonContainer } from '../../styles/layout';

function MainScreen() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        bgcolor: 'background.default',
        ...commonContainer,
      }}
    >
      {/* Header (фиксированная зона) */}
      <Box sx={{ flexShrink: 0 }}>
        <Header />
      </Box>

      {/* Content */}
      <Box
        sx={{
          flexGrow: 1,
          overflowY: 'auto',
          py: 2,
        }}
      >
        <Box sx={commonContainer}>
          <Stack spacing={2}>
            <AvatarBlock />
            <QuestsBar />
            <ClickerButton />
            <StatsBar />
          </Stack>
        </Box>
      </Box>


      {/* Bottom Navigation (фиксированная зона) */}
      <Box sx={{ flexShrink: 0 }}>
        <BottomNav />
      </Box>
    </Box>
  );
}

export default MainScreen;
