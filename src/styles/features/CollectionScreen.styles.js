import { getGlassButtonStyle } from '../layout';

export const collectionGridWrapper = (theme) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
  gap: 2,
  px: 2,
  py: 3,
  overflowY: 'auto',

  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
  },

  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
  },
});

export const emptyStateWrapper = {
  px: 2,
  py: 3,
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  color: 'text.secondary',
};

export const emptyImageStyle = {
  width: 140,
  height: 140,
  opacity: 0.8,
  mb: 3,
};

export const emptyTextContainer = {
  mb: 2,
};

export const emptyTitleStyle = (theme) => ({
  fontSize: 18,
  fontWeight: 600,
  mb: 1,
  color: theme.palette.text.primary,
});

export const emptySubtitleStyle = (theme) => ({
  fontSize: 14,
  color: theme.palette.text.secondary,
});

export const emptyButtonStyle = (theme) => ({
  ...getGlassButtonStyle('rgba(180, 0, 255, 0.4)'),
  borderRadius: 12,
  py: { xs: 1, sm: 1.2, md: 1.5, lg: 2 },
  fontSize: { xs: 18, sm: 20, md: 22, lg: 24 },
  textTransform: 'none',
  color: '#ffffff',
  mt: 2,
  px: 3,
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(180, 0, 255, 0.5)',
    boxShadow: `0 0 16px rgba(180, 0, 255, 0.4)`,
  },
});

