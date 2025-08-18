import { Box, Typography, Avatar } from '@mui/material';
import {
    headerOuterBox,
    headerInnerBox,
    headerLeftBox,
    avatarStyle,
    userNameStyle,
    pointsStyle
} from '../../styles/components/Header.styles';
import WalletBalance from './WalletBalance'; // путь поправь под свою структуру

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
                    <Typography sx={userNameStyle}>
                        User
                    </Typography>
                </Box>

                {/* Справа — баланс кошелька */}
                {/* Пока без стилей. Позже перенесём pointsStyle внутрь WalletBalance */}
                <Box sx={pointsStyle}>
                    <WalletBalance amount={1365} />
                </Box>
            </Box>
        </Box>
    );
}

export default Header;
