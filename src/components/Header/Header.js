import { Box, Typography, Avatar } from '@mui/material';
import {
  headerOuterBox,
  headerInnerBox,
  headerLeftBox,
  avatarStyle,
  userNameStyle,
  pointsStyle
} from '../../styles/components/Header.styles';

function Header() {
  return (
    <Box sx={headerOuterBox}>
      <Box sx={headerInnerBox}>
        {/* Левая часть: Аватар + имя */}
        <Box sx={headerLeftBox}>
          <Avatar
            alt="User Avatar"
            src="/assets/images/main-avatar.png"
            sx={avatarStyle}
          />
          <Typography variant="subtitle1" color="text.primary" sx={userNameStyle}>
            User
          </Typography>
        </Box>

        {/* Справа — сумма */}
        <Typography variant="subtitle1" color="primary.main" sx={pointsStyle}>
          1365
        </Typography>
      </Box>
    </Box>
  );
}

export default Header;
