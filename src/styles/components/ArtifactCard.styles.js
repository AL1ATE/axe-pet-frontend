import { glassCardBase } from '../layout';
import { rarityGlowMap } from '../../layout/Glow';

export const cardWrapper = (theme, rarity) => ({
  ...glassCardBase,
  position: 'relative',
  width: '100%',
  aspectRatio: '1',
  borderRadius: 8,
  overflow: 'hidden',
  border: `1px solid ${rarityGlowMap[rarity] || rarityGlowMap.common}`,
  boxShadow: `0 0 6px ${rarityGlowMap[rarity] || rarityGlowMap.common}`,
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  transition: 'transform 0.2s ease',
  '&:hover': {
    transform: 'scale(1.03)',
  },
});

export const mediaStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'block',
};

export const rarityBadge = (theme, rarity) => ({
  position: 'absolute',
  top: 6,
  left: 6,
  backgroundColor: rarityGlowMap[rarity] || 'rgba(255,255,255,0.1)',
  px: 1,
  py: 0.3,
  borderRadius: 6,
  fontSize: 10,
  color: 'white',
  textTransform: 'uppercase',
  backdropFilter: 'blur(4px)',
  WebkitBackdropFilter: 'blur(4px)',
  boxShadow: `0 0 4px ${rarityGlowMap[rarity] || 'transparent'}`,
});

export const countBadge = {
  position: 'absolute',
  bottom: 6,
  right: 6,
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  px: 1,
  py: 0.3,
  borderRadius: 6,
  fontSize: 10,
  color: 'white',
  backdropFilter: 'blur(4px)',
  WebkitBackdropFilter: 'blur(4px)',
};
