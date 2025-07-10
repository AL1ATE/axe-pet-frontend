import { Box } from '@mui/material';
import { avatarOuterBox, avatarInnerBox, avatarVideo } from '../../styles/components/AvatarBlock.styles';

function AvatarBlock() {
  return (
    <Box sx={avatarOuterBox}>
      <Box sx={avatarInnerBox}>
        <video
          src="/assets/cat-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={avatarVideo}
        />
      </Box>
    </Box>
  );
}

export default AvatarBlock;
