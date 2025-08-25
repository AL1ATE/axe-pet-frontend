import { Box, Typography, Chip } from '@mui/material';
import {
    statsContainer,
    statsLeftCard,
    statsRightCard,
    seriesSquare,
    chipStyle,
    clickTextStyle,
    seriesLabelStyle,
    seriesItemStyle,
} from '../../styles/components/StatsBar.styles';

function StatsBar() {
    const days = 7;
    const streak = 5; // пример: зашёл 5 дней из 7
    const clicks = 3;

    return (
        <Box sx={statsContainer}>
            <Box sx={statsLeftCard}>
                <Chip
                    label={clicks}
                    color="primary"
                    size="medium"
                    sx={(theme) => chipStyle(theme)} // как у кнопки
                />
                <Typography variant="body2" sx={clickTextStyle}>
                    CLICKS
                </Typography>
            </Box>

            <Box sx={statsRightCard}>
                <Typography variant="caption" sx={seriesLabelStyle}>
                    SERIES OF DAYS:
                </Typography>

                <Box sx={seriesSquare}>
                    {[...Array(days)].map((_, i) => {
                        const active = i < streak;
                        return <Box key={i} sx={seriesItemStyle(active)} />;
                    })}
                </Box>
            </Box>
        </Box>
    );
}

export default StatsBar;
