import { Box, Typography, Modal, Button, Fade } from '@mui/material';
import {
    modalBackdropStyle,
    cardContainerStyle,
    rarityTextStyle,
    nameTextStyle,
    mediaContainerStyle,
    mediaContentStyle,
} from '../../styles/components/ArtifactRevealModal.styles';
import { shareButtonStyle } from '../../styles/buttons/GlassButton.styles';
import { getRarityColor } from '../../utils/artifacts/getRarityColor';

function ArtifactPreviewModal({ open, onClose, artifact }) {
    const rarityColor = getRarityColor(artifact?.rarity);
    if (!artifact) return null;

    return (
        <Modal open={open} onClose={onClose} closeAfterTransition>
            <Fade in={open}>
                <Box onClick={onClose} sx={modalBackdropStyle}>
                    <Box sx={cardContainerStyle} onClick={(e) => e.stopPropagation()}>
                        <Typography variant="h5" sx={rarityTextStyle(rarityColor)}>
                            {artifact?.rarity?.toUpperCase()}
                        </Typography>

                        <Typography variant="subtitle1" sx={nameTextStyle}>
                            {artifact?.name}
                        </Typography>

                        <Box sx={mediaContainerStyle(rarityColor)}>
                            {artifact.media?.type === 'video' ? (
                                <video
                                    src={artifact.media.url}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    style={mediaContentStyle()}
                                />
                            ) : (
                                <img
                                    src={artifact.media.url}
                                    alt={artifact.name}
                                    style={mediaContentStyle()}
                                />
                            )}
                        </Box>

                        <Button
                            fullWidth
                            onClick={(e) => {
                                e.stopPropagation();
                                console.log('Отдать артефакт');
                            }}
                            sx={shareButtonStyle}
                        >
                            Отдать артефакт
                        </Button>
                    </Box>
                </Box>
            </Fade>
        </Modal>
    );
}

export default ArtifactPreviewModal;
