import { commonContainer, glassCardBase } from '../layout';

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

/**
 * Карта цветов свечения по редкости
 */
export const rarityGlowMap = {
  common: 'rgba(255,255,255,0.08)',
  rare: 'rgba(0,150,255,0.4)',
  epic: 'rgba(155, 89, 182, 0.5)',
  legendary: 'rgba(255, 215, 0, 0.6)',
};

/**
 * Динамический стиль контейнера для media
 */
export const getAvatarInnerBox = (rarity, theme) => {
  const glow = rarityGlowMap[rarity] || rarityGlowMap.common;

  return {
    width: '100%',
    maxWidth: {
      xs: 400,
      sm: 450,
      md: 500,
      lg: 550,
    },
    aspectRatio: '1',
    borderRadius: 8,
    overflow: 'hidden',
    ...glassCardBase,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    boxShadow: `0 0 24px ${glow}`,
    border: `2px solid ${glow}`,
    transition: 'all 0.3s ease',
    ...(rarity === 'legendary' && {
      animation: 'glowPulse 3s infinite ease-in-out',
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

export const glowPulseKeyframes = `
@keyframes glowPulse {
  0%   { box-shadow: 0 0 16px rgba(255, 215, 0, 0.2); }
  8%   { box-shadow: 0 0 17px rgba(255, 215, 0, 0.23); }
  16%  { box-shadow: 0 0 18px rgba(255, 215, 0, 0.26); }
  24%  { box-shadow: 0 0 19px rgba(255, 215, 0, 0.29); }
  32%  { box-shadow: 0 0 20px rgba(255, 215, 0, 0.32); }
  40%  { box-shadow: 0 0 21px rgba(255, 215, 0, 0.35); }
  48%  { box-shadow: 0 0 22px rgba(255, 215, 0, 0.38); }
  56%  { box-shadow: 0 0 23px rgba(255, 215, 0, 0.41); }
  64%  { box-shadow: 0 0 24px rgba(255, 215, 0, 0.44); }
  72%  { box-shadow: 0 0 23px rgba(255, 215, 0, 0.41); }
  80%  { box-shadow: 0 0 22px rgba(255, 215, 0, 0.38); }
  88%  { box-shadow: 0 0 20px rgba(255, 215, 0, 0.32); }
  96%  { box-shadow: 0 0 18px rgba(255, 215, 0, 0.26); }
  100% { box-shadow: 0 0 16px rgba(255, 215, 0, 0.2); }
}
`;
