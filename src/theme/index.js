import { createTheme } from '@mui/material/styles';
import palette from './palette';
import typography from './typography';
import shape from './shape';

const theme = createTheme({
  palette,
  typography,
  shape,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: shape.borderRadius,
        },
      },
    },
  },
});

export default theme;
