import { Box, Typography, Chip } from '@mui/material';
import {
  statsContainer,
  statsLeftCard,
  statsRightCard,
  seriesSquare,
  chipStyle,
  clickTextStyle,
  seriesLabelStyle
} from '../../styles/components/StatsBar.styles';

function StatsBar() {
  return (
    <Box sx={statsContainer}>
      <Box sx={statsLeftCard}>
        <Chip label="3" color="primary" size="medium" sx={chipStyle} />
        <Typography variant="body2" sx={clickTextStyle}>
          CLICKS
        </Typography>
      </Box>

      <Box sx={statsRightCard}>
        <Typography variant="caption" sx={seriesLabelStyle}>
          SERIES OF DAYS:
        </Typography>
        <Box sx={seriesSquare}>
          {[...Array(7)].map((_, i) => (
            <Box
              key={i}
              sx={(theme) => ({
                backgroundColor: i < 5 ? theme.palette.primary.main : theme.palette.background.default,
              })}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default StatsBar;
