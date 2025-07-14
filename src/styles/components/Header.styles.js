import { commonContainer } from '../layout';

export const headerOuterBox = {
  py: 1.5,
  px: 2,
  display: 'flex',
  justifyContent: 'center',
};

export const headerInnerBox = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  ...commonContainer,
};

export const headerLeftBox = {
  display: 'flex',
  alignItems: 'center',
  gap: 1,
};

export const avatarStyle = (theme) => ({
  width: { xs: 28, sm: 32, md: 36 },
  height: { xs: 28, sm: 32, md: 36 },
  bgcolor: 'primary.main',
  fontSize: { xs: 14, sm: 16 },
  borderRadius: 10,
});

export const userNameStyle = {
  fontSize: { xs: 14, sm: 16, md: 18 },
};

export const pointsStyle = {
  fontSize: { xs: 14, sm: 16, md: 18 },
};
