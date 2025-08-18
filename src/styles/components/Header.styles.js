import { commonContainer, getGlassButtonStyle } from '../layout';

export const headerOuterBox = {
  py: 1.5,
  px: 2,
  display: 'flex',
  justifyContent: 'center',
};

export const headerInnerBox = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  ...commonContainer,
  pt: { xs: 1, sm: 2 },
};

export const headerLeftBox = {
  display: 'flex',
  alignItems: 'center',
  gap: 1,
};

export const avatarStyle = (theme) => ({
    ...getGlassButtonStyle('rgba(200, 100, 255, 0.4)'), // розово-фиолетовый неон
    width: { xs: 36, sm: 46, md: 52 },
    height: { xs: 36, sm: 46, md: 52 },
    borderRadius: theme.shape.borderRadius,
    color: '#ffffff',
    transition: 'all 0.3s ease',

    // базовая тень (как у walletBalanceBox)
    boxShadow: '0 4px 12px rgba(0,0,0,0.35), 0 0 10px rgba(200,120,255,0.25)',

    // hover — как у Happy Axe / Wallet
    '&:hover': {
        backgroundColor: 'rgba(200, 100, 255, 0.5)',
        boxShadow: `0 0 16px rgba(200, 100, 255, 0.5)`,
    },

    '&:active': {
        transform: 'scale(0.97)',
    },
});


export const userNameStyle = {
    fontWeight: 600,
    color: '#ffffff',
    letterSpacing: 0.3,
    fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
};

export const pointsStyle = {
  fontSize: { xs: 14, sm: 16, md: 18 },
};
