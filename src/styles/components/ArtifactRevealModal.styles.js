import { getGlassCardStyle, getGlassButtonStyle } from '../layout';

export const modalBackdropStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  px: 2,
  py: 4,
  height: '100vh',
  boxSizing: 'border-box',
  overflow: 'auto',
  backgroundColor: 'rgba(10, 10, 20, 0.85)',
};

export const cardContainerStyle = {
  ...getGlassCardStyle('rgba(20,20,30,0.9)'),
  width: '100%',
  maxWidth: 400,
  aspectRatio: '1 / 1.2',
  borderRadius: 8,
  p: 3,
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.4s ease',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  boxSizing: 'border-box',
};

export const rarityTextStyle = (rarityColor) => ({
  mb: 1,
  fontWeight: 800,
  textTransform: 'uppercase',
  color: rarityColor || 'white',
  opacity: 1,
  transition: 'opacity 0.5s ease',
});

export const nameTextStyle = {
  mb: 2,
  fontWeight: 700,
  opacity: 1,
  transition: 'opacity 0.5s ease',
  color: 'white',
};

export const mediaContainerStyle = (rarityColor, theme) => ({
  flexGrow: 1,
  mt: 1,
  width: '100%',
  borderRadius: 4,
  overflow: 'hidden',
  backgroundColor: rarityColor || theme.palette.background.paper,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const videoImageStyle = (contain = false) => ({
  width: '100%',
  height: '100%',
  objectFit: contain ? 'contain' : 'cover',
  display: 'block',
  borderRadius: 8,
});

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
