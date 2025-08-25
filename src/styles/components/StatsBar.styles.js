import { commonContainer, glassCardBase, getGlassButtonStyle } from '../layout';

export const statsContainer = {
    ...commonContainer,
    display: 'flex',
    gap: 1,
    width: '100%',
    px: 2,
};

// карточки оставляем без неона
export const statsLeftCard = (theme: any) => ({
    flex: 1,
    ...glassCardBase,
    borderRadius: theme.shape.borderRadius * 1.5,
    py: { xs: 1, sm: 1.5, md: 2, lg: 2.5 },
    px: { xs: 0.8, sm: 1, md: 1.5, lg: 2 },
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 0.6,
});

export const statsRightCard = (theme: any) => ({
    flex: 2,
    ...glassCardBase,
    borderRadius: theme.shape.borderRadius * 1.5,
    py: { xs: 1, sm: 1.5, md: 2, lg: 2.5 },
    px: { xs: 0.8, sm: 1, md: 1.5, lg: 2 },
    display: 'flex',
    flexDirection: 'column',
});

export const seriesSquare = {
    display: 'flex',
    gap: 1,
    '& > div': {
        width: { xs: 10, sm: 12, md: 14, lg: 16 },
        height: { xs: 10, sm: 12, md: 14, lg: 16 },
        borderRadius: 1,
        transition: 'all .2s ease',
    },
};

export const chipStyle = (theme: any) => ({
    ...getGlassButtonStyle('rgba(0, 180, 255, 0.4)'),
    borderRadius: 5,
    px: 1.4,
    height: { xs: 28, sm: 30, md: 34, lg: 38 },
    fontWeight: 'bold',
    fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
    color: '#ffffff',
    '& .MuiChip-label': { px: 0.5 },
    '&:hover': {
        backgroundColor: 'rgba(0, 180, 255, 0.5)',
        boxShadow: `0 0 16px rgba(0, 180, 255, 0.4)`,
    },
});

export const clickTextStyle = {
    color: 'text.primary',
    fontWeight: 600,
    fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
};

export const seriesLabelStyle = {
    color: 'text.secondary',
    mb: 0.5,
    fontSize: { xs: 12, sm: 14, md: 16, lg: 18 },
};

export const seriesItemStyle = (active: boolean) =>
    active
        ? {
            backgroundColor: 'rgba(0, 180, 255, 0.4)',
            border: '1px solid rgba(0, 180, 255, 0.6)',
            boxShadow: '0 0 6px rgba(0, 180, 255, 0.4)',
            '&:hover': {
                backgroundColor: 'rgba(0, 180, 255, 0.5)',
                boxShadow: '0 0 16px rgba(0, 180, 255, 0.4)',
            },
        }
        : {
            backgroundColor: 'transparent',
            border: '1px solid rgba(255,255,255,0.12)',
            boxShadow: 'none',
            '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.06)',
            },
        };
