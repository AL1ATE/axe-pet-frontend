import { Box, Typography } from '@mui/material';
import {
  cardWrapper,
  mediaStyle,
  rarityBadge,
  countBadge,
} from '../../styles/components/ArtifactCard.styles';

function ArtifactCard({ artifact }) {
  return (
    <Box sx={(theme) => cardWrapper(theme, artifact.rarity)}>
      {artifact.media?.type === 'video' ? (
        <video
          src={artifact.media.url}
          autoPlay
          loop
          muted
          playsInline
          style={mediaStyle}
        />
      ) : (
        <img
          src={artifact.media.url}
          alt={artifact.name}
          style={mediaStyle}
        />
      )}

      <Box sx={(theme) => rarityBadge(theme, artifact.rarity)}>
        <Typography variant="caption" sx={{ fontWeight: 600 }}>
          {artifact.rarity?.toUpperCase()}
        </Typography>
      </Box>

      {artifact.count > 1 && (
        <Box sx={countBadge}>
          <Typography variant="caption" sx={{ fontWeight: 700 }}>
            x{artifact.count}
          </Typography>
        </Box>
      )}
    </Box>
  );
}

export default ArtifactCard;