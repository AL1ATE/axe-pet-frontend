import { commonContainer, glassCardBase } from '../layout';

export const navWrapper = {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    py: 2,
    px: 2,
    display: 'flex',
    justifyContent: 'center',
};

export const navInner = (theme) => ({
    ...glassCardBase,
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: theme.shape.borderRadius * 1.5,
    display: 'flex',
    justifyContent: 'space-between',
    p: { xs: 0.6, sm: 1, md: 1.5, lg: 2 },
    ...commonContainer,
});

export const navItem = (theme, isSelected, isActive) => ({
    flex: 1,
    mx: 0.5,
    py: 1,
    borderRadius: theme.shape.borderRadius * 1.2,
    border: '1px solid transparent',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    transform: isActive ? 'scale(1.1)' : 'scale(1)',

    ...(isSelected
        ? {
            background:
                'linear-gradient(180deg, rgba(255,120,220,0.25), rgba(0,180,255,0.25))',
            border: '1px solid rgba(200,150,255,0.35)',
            // мягкое свечение вместо жёсткого
            boxShadow: '0 0 6px rgba(200,150,255,0.25)',
        }
        : {
            '&:hover': {
                background: 'rgba(255,255,255,0.04)',
                boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.06)',
            },
        }),
});

export const navIcon = (isSelected, isActive) => ({
    color: isSelected ? '#ffffff' : '#777777',
    fontSize: isActive
        ? { xs: 14, sm: 16, md: 28, lg: 32 }
        : { xs: 10, sm: 12, md: 26, lg: 30 },
    transition: 'all 0.2s ease',
});

export const navLabel = (isActive) => ({
    color: isActive ? '#ffffff' : '#777777',
    fontSize: { xs: 10, sm: 12, md: 14, lg: 16 },
    mt: { xs: 0.1, sm: 0.25 },
});

export const lockBadge = {
    position: 'absolute',
    top: 6,
    right: 10,
    width: 14,
    height: 14,
    fontSize: 14,
    color: 'rgba(255,255,255,0.7)',
    opacity: 0.9,
};
