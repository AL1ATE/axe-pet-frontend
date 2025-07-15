import { useState } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { GlowGlobalStyles } from '../../layout/Glow';
import {
  avatarOuterBox,
  avatarFlipInner,
  avatarCardFront,
  avatarCardBack,
  avatarMedia,
  rarityLabelStyle,
} from '../../styles/components/AvatarBlock.styles';

const mockResponse = {
  ok: true,
  data: {
    type: 'image',
    url: '/assets/cat-image-1.png',
    rarity: 'legendary',
    title: 'Wizard Cat',
    description: 'Limited Edition Legendary Skin',
  },
};

function AvatarBlock() {
  const [flipped, setFlipped] = useState(false);
  const theme = useTheme();
  const { ok, data } = mockResponse;

  if (!ok || !data) {
    return (
      <Box sx={{ color: 'text.secondary' }}>
        No Media Available
      </Box>
    );
  }

  return (
    <Box sx={avatarOuterBox}>
      <GlowGlobalStyles />

      <Box sx={avatarFlipInner(flipped)} onClick={() => setFlipped(!flipped)}>
        {/* FRONT */}
        <Box sx={avatarCardFront(theme, data.rarity)}>
          {data.type === 'video' ? (
            <video
              src={data.url}
              autoPlay
              loop
              muted
              playsInline
              style={avatarMedia}
            />
          ) : (
            <img
              src={data.url}
              alt="Avatar"
              style={avatarMedia}
            />
          )}

          {data.rarity && (
            <Box sx={rarityLabelStyle(theme, data.rarity)}>
              <Typography variant="caption" sx={{ fontWeight: 600 }}>
                {data.rarity.toUpperCase()}
              </Typography>
            </Box>
          )}
        </Box>

        {/* BACK */}
        <Box sx={avatarCardBack(theme)}>
          <Typography variant="h6" sx={{ fontWeight: 700, color: 'white', mb: 1 }}>
            {data.title}
          </Typography>
          <Typography variant="body1" sx={{ color: 'gray.200', fontWeight: 500, letterSpacing: 0.5 }}>
            {data.description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default AvatarBlock;
