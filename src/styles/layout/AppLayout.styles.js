import { commonContainer } from '../layout';

export const appLayoutContainer = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  bgcolor: 'transparent',
  ...commonContainer,
};

export const headerBox = {
  flexShrink: 0,
};

export const contentBox = {
  flexGrow: 1,
  overflowY: 'auto',
  py: 2,
};

export const bottomNavBox = {
  flexShrink: 0,
};
