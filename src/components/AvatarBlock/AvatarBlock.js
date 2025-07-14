import { Box, Typography } from '@mui/material';
import { GlowGlobalStyles } from '../../layout/Glow';
import {
  avatarOuterBox,
  getAvatarInnerBox,
  avatarMedia,
  rarityLabelStyle
} from '../../styles/components/AvatarBlock.styles';

const mockResponse = {
  ok: true,
  data: {
    type: 'image',
    url: '/assets/cat-image-1.png',
    rarity: 'legendary',
  },
};

function AvatarBlock() {
  const { ok, data } = mockResponse;

  return (
    <Box sx={avatarOuterBox}>
      <GlowGlobalStyles /> 
      {ok && data ? (
        <Box sx={(theme) => getAvatarInnerBox(data.rarity, theme)}>

          {/* Media */}
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

          {/* Rarity Label */}
          {data.rarity && (
            <Box sx={(theme) => rarityLabelStyle(theme, data.rarity)}>
              <Typography variant="caption" sx={{ fontWeight: 600 }}>
                {data.rarity.toUpperCase()}
              </Typography>
            </Box>
          )}

        </Box>
      ) : (
        <Box sx={{ color: 'text.secondary' }}>
          No Media Available
        </Box>
      )}
    </Box>
  );
}

export default AvatarBlock;
