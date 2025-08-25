import { getGlassCardStyle } from '../layout';

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

export const mediaContainerStyle = (rarityColor?: string) => ({
    flexGrow: 1,
    mt: 1,
    width: '100%',
    borderRadius: 8,
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: 0,
    backgroundColor: 'transparent',
    border: `1px solid ${rarityColor || 'white'}`,
    boxShadow: `0 0 6px ${rarityColor || 'white'}`,
    transition: 'box-shadow 0.3s ease, border 0.3s ease',
});

export const mediaContentStyle = () => ({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
});
