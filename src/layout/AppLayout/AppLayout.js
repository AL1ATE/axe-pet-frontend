import { Box } from '@mui/material';
import Header from '../../components/Header/Header';
import BottomNav from '../../components/BottomNav/BottomNav';
import {
  appLayoutContainer,
  headerBox,
  contentBox,
  bottomNavBox
} from '../../styles/layout/AppLayout.styles';

function AppLayout({ children }) {
  return (
    <Box sx={appLayoutContainer}>
      <Box sx={headerBox}>
        <Header />
      </Box>
      <Box sx={contentBox}>
        {children}
      </Box>
      <Box sx={bottomNavBox}>
        <BottomNav />
      </Box>
    </Box>
  );
}

export default AppLayout;
