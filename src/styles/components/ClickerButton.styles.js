import { getGlassButtonStyle } from '../layout';

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
