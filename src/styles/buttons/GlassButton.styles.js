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

