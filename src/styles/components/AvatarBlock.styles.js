import { glassCardBase } from '../layout';
import { rarityGlowMap, glowPulseAnimationName } from '../../layout/Glow';

/** Внешний контейнер */
export const avatarOuterBox = {
  display: 'flex',
  justifyContent: 'center',
  px: 2,
  pt: 2,
  perspective: '1500px',
  width: '100%',
  boxSizing: 'border-box',
};

/** Внутренний флиппер контейнер */
export const avatarFlipInner = (flipped) => ({
  width: '100%',
  maxWidth: { xs: 400, sm: 450, md: 500, lg: 550 },
  aspectRatio: '1',
  position: 'relative',
  transformStyle: 'preserve-3d',
  transition: 'transform 0.8s',
  transform: flipped ? 'rotateY(180deg)' : 'none',
  cursor: 'pointer',
});

/** Общий каркас карточки */
export const avatarCardBase = (theme) => ({
  ...glassCardBase,
  width: '100%',
  height: '100%',
  borderRadius: 8,
  overflow: 'hidden',
  position: 'absolute',
  top: 0,
  left: 0,
  backfaceVisibility: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  boxSizing: 'border-box',
});

/** FRONT */
export const avatarCardFront = (theme, rarity) => {
  const glow = rarityGlowMap[rarity] || rarityGlowMap.common;

  return {
    ...avatarCardBase(theme),
    boxShadow: `0 0 24px ${glow}`,
    border: `2px solid ${glow}`,
    backgroundColor: 'rgba(20,20,30,0.85)',
    ...(rarity === 'legendary' && {
      animation: `${glowPulseAnimationName} 5s infinite ease-in-out`,
    }),
  };
};

/** BACK */
export const avatarCardBack = (theme) => ({
  ...avatarCardBase(theme),
  transform: 'rotateY(180deg)',
  backgroundColor: 'rgba(20,20,30,0.85)',
});

/** Медиа */
export const avatarMedia = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'block',
  borderRadius: 'inherit',
};

/** Лейбл редкости */
export const rarityLabelStyle = (theme, rarity) => ({
  position: 'absolute',
  bottom: 8,
  left: '50%',
  transform: 'translateX(-50%)',
  px: 1.4,
  py: 0.4,
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  borderRadius: theme.shape.borderRadius * 1.5,
  color: 'white',
  fontSize: 12,
  textTransform: 'uppercase',
  border: `1px solid ${rarityGlowMap[rarity] || 'transparent'}`,
  backdropFilter: 'blur(4px)',
  WebkitBackdropFilter: 'blur(4px)',
  boxShadow: `0 0 6px ${rarityGlowMap[rarity] || 'transparent'}`,
  transition: 'all 0.3s ease',
  fontWeight: 600,
  letterSpacing: 1,
  textAlign: 'center',
});
