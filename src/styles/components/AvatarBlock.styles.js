
import { commonContainer, glassCardBase } from '../layout';
import { rarityGlowMap, glowPulseAnimationName } from '../../layout/Glow';

export const avatarOuterBox = {
  ...commonContainer,
  px: 2,
  pt: 2,
  display: 'flex',
  justifyContent: 'center',
};

export const avatarMedia = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'block',
  borderRadius: 'inherit',
};

export const getAvatarInnerBox = (rarity, theme) => {
  const glow = rarityGlowMap[rarity] || rarityGlowMap.common;

  return {
    ...glassCardBase,
    width: '100%',
    maxWidth: { xs: 400, sm: 450, md: 500, lg: 550 },
    aspectRatio: '1',
    borderRadius: 8,
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    boxShadow: `0 0 24px ${glow}`,
    border: `2px solid ${glow}`,
    transition: 'all 0.3s ease',
    ...(rarity === 'legendary' && {
      animation: `${glowPulseAnimationName} 5s infinite ease-in-out`,
    }),
  };
};


/**
 * Стиль бейджа с надписью редкости
 */
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
