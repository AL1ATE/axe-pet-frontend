import { commonContainer, glassCardBase } from '../layout';

export const questsContainer = {
  ...commonContainer,
  px: 2,
  py: 1,
};

/**
 * Стили для одной карточки квеста
 */
export const getQuestCardStyle = (theme, completed) => {
  const accentColor = completed ? theme.palette.success.main : theme.palette.primary.main;

  return {
    flex: 1,
    minWidth: 0,
    height: { xs: 70, sm: 80, md: 90, lg: 100 },
    ...glassCardBase,
    border: `1px solid ${accentColor}`,
    boxShadow: `0 0 8px ${accentColor}44`,
    color: accentColor,
    borderRadius: theme.shape.borderRadius * 1.5,
    textTransform: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    p: { xs: 0.3, sm: 0.6, md: 1, lg: 1.4 },
    transition: 'border-color 0.2s, box-shadow 0.2s, background-color 0.2s',
    overflow: 'hidden',
  };
};

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
