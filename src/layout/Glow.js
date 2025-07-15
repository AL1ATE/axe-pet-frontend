import React from 'react';
import { GlobalStyles } from '@mui/material';

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
 * Имя анимации
 */
export const glowPulseAnimationName = 'glowPulse';

/**
 * Ключевые кадры для анимации
 * Делаем очень плавно на 5 секунд
 */
export const glowPulseKeyframesCSS = `
@keyframes ${glowPulseAnimationName} {
  0%   { box-shadow: 0 0 16px rgba(255, 215, 0, 0.2); }
  10%  { box-shadow: 0 0 18px rgba(255, 215, 0, 0.25); }
  20%  { box-shadow: 0 0 20px rgba(255, 215, 0, 0.3); }
  30%  { box-shadow: 0 0 22px rgba(255, 215, 0, 0.35); }
  40%  { box-shadow: 0 0 24px rgba(255, 215, 0, 0.4); }
  50%  { box-shadow: 0 0 26px rgba(255, 215, 0, 0.45); }
  60%  { box-shadow: 0 0 24px rgba(255, 215, 0, 0.4); }
  70%  { box-shadow: 0 0 22px rgba(255, 215, 0, 0.35); }
  80%  { box-shadow: 0 0 20px rgba(255, 215, 0, 0.3); }
  90%  { box-shadow: 0 0 18px rgba(255, 215, 0, 0.25); }
  100% { box-shadow: 0 0 16px rgba(255, 215, 0, 0.2); }
}
`;

/**
 * Компонент для подключения GlobalStyles с анимацией
 */
export function GlowGlobalStyles() {
  return <GlobalStyles styles={glowPulseKeyframesCSS} />;
}
