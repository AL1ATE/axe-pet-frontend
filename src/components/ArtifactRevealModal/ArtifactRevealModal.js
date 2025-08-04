import { useEffect, useState } from 'react';
import { Box, Typography, Modal, Fade, Button, useTheme } from '@mui/material';
import {
  modalBackdropStyle,
  cardContainerStyle,
  rarityTextStyle,
  nameTextStyle,
  mediaContainerStyle,
  videoImageStyle,
} from '../../styles/components/ArtifactRevealModal.styles';
import { shareButtonStyle } from '../../styles/buttons/GlassButton.styles'
import { getRarityColor } from '../../utils/artifacts/getRarityColor';

function ArtifactRevealModal({ open, onClose, artifact, skip }) {
  const [step, setStep] = useState(0);
  const theme = useTheme();
  const rarityColor = getRarityColor(artifact?.rarity);

  useEffect(() => {
    if (!open) return;

    setStep(0);
    const timers = [
      setTimeout(() => setStep(1), 1000),
      setTimeout(() => setStep(2), 2000),
      setTimeout(() => setStep(3), 3000),
    ];

    return () => timers.forEach(clearTimeout);
  }, [open]);

  const handleSkip = () => {
    setStep(3);
    if (skip) skip();
  };

  const handleShare = () => {
    console.log('Share clicked');
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Fade in={open}>
        <Box onClick={handleSkip} sx={modalBackdropStyle}>
          <Box sx={cardContainerStyle}>
            {step >= 1 && (
              <Typography variant="h5" sx={rarityTextStyle(rarityColor)}>
                {artifact?.rarity?.toUpperCase()}
              </Typography>
            )}

            {step >= 2 && (
              <Typography variant="subtitle1" sx={nameTextStyle}>
                {artifact?.name}
              </Typography>
            )}

            {step >= 3 && artifact?.media && (
              <Box sx={mediaContainerStyle(rarityColor, theme)}>
                {artifact.media.type === 'video' ? (
                  <video
                    src={artifact.media.url}
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={videoImageStyle(false)}
                  />
                ) : (
                  <img
                    src={artifact.media.url}
                    alt={artifact.name}
                    style={videoImageStyle(true)}
                  />
                )}
              </Box>
            )}

            {step >= 3 && (
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  handleShare();
                }}
                fullWidth
                sx={shareButtonStyle}
              >
                Поделиться
              </Button>
            )}
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
}

export default ArtifactRevealModal;
