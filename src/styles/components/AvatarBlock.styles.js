export const avatarOuterBox = {
  px: 2,
  display: 'flex',
  justifyContent: 'center',
};

export const avatarInnerBox = {
  width: '100%',
  maxWidth: {
    xs: 260,
    sm: 300,
    md: 350,
    lg: 400,
  },
  aspectRatio: '1',
  borderRadius: '50%',
  overflow: 'hidden',
  backgroundColor: '#000000',  // убираем лишнюю заливку
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export const avatarVideo = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};
