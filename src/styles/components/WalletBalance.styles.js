import { getGlassButtonStyle } from '../layout';

export const walletButtonBase = (theme) => ({
    borderRadius: theme.shape.borderRadius,
    display: 'inline-flex',
});

export const walletBalanceBox = (theme) => ({
    ...getGlassButtonStyle('rgba(200, 100, 255, 0.4)'),
    borderRadius: theme.shape.borderRadius,
    px: { xs: 1.5, sm: 2, md: 2.5 },
    py: { xs: 0.6, sm: 0.8, md: 1 },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.1s ease',

    '&:hover': {
        backgroundColor: 'rgba(200, 100, 255, 0.5)',
        boxShadow: `0 0 16px rgba(200, 100, 255, 0.5)`,
    },

    '&:active': {
        transform: 'scale(0.97)',
    },
});

export const walletText = {
    fontWeight: 600,
    color: '#ffffff',
    letterSpacing: 0.3,
    fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
};
