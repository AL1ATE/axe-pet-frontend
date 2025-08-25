import { getGlassButtonStyle } from '../layout';

export const shareButtonStyle = {
  mt: 3,
  ...getGlassButtonStyle('rgba(0, 180, 255, 0.4)'),
  borderRadius: 8,
  px: 2,
  py: 1.2,
  fontSize: 16,
  fontWeight: 600,
  color: 'white',
  textTransform: 'none',
};

export const checkButtonStyle = {
  mt: 3,
  ...getGlassButtonStyle('rgba(0, 220, 130, 0.3)'),
  borderRadius: 8,
  px: 2,
  py: 1.2,
  fontSize: 16,
  fontWeight: 600,
  color: 'white',
  textTransform: 'none',
  border: '1px solid rgba(0, 220, 130, 0.5)',
  backdropFilter: 'blur(6px)',
  '&:hover': {
    backgroundColor: 'rgba(0, 220, 130, 0.45)',
  },
};

export const clickerButton = (theme) => ({
    ...getGlassButtonStyle('rgba(0, 180, 255, 0.4)'),
    borderRadius: 12,
    py: { xs: 1, sm: 1.2, md: 1.5, lg: 2 },
    fontSize: { xs: 20, sm: 22, md: 24, lg: 26 },
    textTransform: 'none',
    color: '#ffffff',
    transition: 'all 0.3s ease',
    '&:hover': {
        backgroundColor: 'rgba(0, 180, 255, 0.5)',
        boxShadow: `0 0 16px rgba(0, 180, 255, 0.4)`,
    },
});


