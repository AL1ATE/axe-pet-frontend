export const commonContainer = {
  width: '100%',
  maxWidth: {
    xs: 450,
    sm: 800,
    md: 700,
    lg: 750,
  },
  mx: 'auto',
};

export const glassCardBase = {
  backgroundColor: 'rgba(20, 20, 30, 0.5)',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  boxSizing: 'border-box',
  WebkitTapHighlightColor: 'transparent',
  touchAction: 'manipulation',
  userSelect: 'none',
};

export const glassSelectedItemBase = {
  backgroundColor: 'rgba(255, 255, 255, 0.08)',
  backdropFilter: 'blur(8px)',
  WebkitBackdropFilter: 'blur(8px)',
  border: '1px solid rgba(255, 255, 255, 0.12)',
  boxSizing: 'border-box',
  WebkitTapHighlightColor: 'transparent',
  touchAction: 'manipulation',
  userSelect: 'none',
};

export const getGlassButtonStyle = (accentColor = 'rgba(155, 89, 182, 0.4)') => ({
  backgroundColor: accentColor,
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  border: `1px solid ${accentColor.replace('0.4', '0.6')}`,
  boxShadow: `0 0 12px ${accentColor.replace('0.4', '0.3')}`,
  boxSizing: 'border-box',
  WebkitTapHighlightColor: 'transparent',
  touchAction: 'manipulation',
  userSelect: 'none',
});

export const getGlassDotStyle = (accentColor = 'rgba(155, 89, 182, 0.4)') => ({
  backgroundColor: accentColor,
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)',
  border: `1px solid ${accentColor.replace('0.4', '0.6')}`,
  boxShadow: `0 0 4px ${accentColor.replace('0.4', '0.3')}`,
  boxSizing: 'border-box',
});


