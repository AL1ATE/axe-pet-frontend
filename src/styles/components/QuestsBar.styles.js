import { commonContainer } from '../layout';

export const questsContainer = {
  ...commonContainer,
  px: 2,
  py: 1,
};

export const getQuestButtonStyle = (theme, completed) => ({
  flex: 1,
  minWidth: 0,
  height: { xs: 70, sm: 80, md: 90, lg: 100 },
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  borderWidth: completed ? 2 : 1,
  borderStyle: 'solid',
  borderColor: completed ? theme.palette.success.main : theme.palette.primary.main,
  color: theme.palette.primary.main,
  textTransform: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  p: { xs: 0.3, sm: 0.6, md: 1, lg: 1.4 },
  transition: 'border-color 0.2s, box-shadow 0.2s',
  overflow: 'hidden',
  boxShadow: completed 
    ? `0 0 6px ${theme.palette.success.main}`
    : 'none',
});

export const questIconStyle = {
  fontSize: { xs: 22, sm: 28, md: 34, lg: 40 },  
  mb: { xs: 0.4, sm: 0.5, md: 0.6 },
};

export const questLabelStyle = {
  textAlign: 'center',
  fontSize: { xs: 10, sm: 11, md: 13, lg: 15 },
  color: 'text.primary',
  lineHeight: 1.2,
  fontWeight: 600,
};
