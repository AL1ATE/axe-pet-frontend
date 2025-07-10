import { commonContainer } from '../layout';

export const statsContainer = {
  ...commonContainer,
  display: 'flex',
  gap: 1,
  width: '100%',
  px: 2,
};

export const statsLeftCard = (theme) => ({
  flex: 1,
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  py: { xs: 1, sm: 1.5, md: 2, lg: 2.5 },
  px: { xs: 0.8, sm: 1, md: 1.5, lg: 2 },
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 0.6,
});

export const statsRightCard = (theme) => ({
  flex: 2,
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  py: { xs: 1, sm: 1.5, md: 2, lg: 2.5 },
  px: { xs: 0.8, sm: 1, md: 1.5, lg: 2 },
  display: 'flex',
  flexDirection: 'column',
});

export const seriesSquare = {
  display: 'flex',
  gap: 0.4,
  '& > div': {
    width: { xs: 8, sm: 10, md: 12, lg: 14 },
    height: { xs: 8, sm: 10, md: 12, lg: 14 },
    borderRadius: 1,
  },
};

export const chipStyle = {
  fontWeight: 'bold',
  fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
};

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

