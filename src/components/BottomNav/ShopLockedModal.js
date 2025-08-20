import { Modal, Fade, Box } from '@mui/material';
import {
    modalBackdropStyle,
    cardContainerStyle,
} from '../../styles/components/ArtifactRevealModal.styles';

export default function ShopLockedModal({ open, onClose, imageSrc }) {
    return (
        <Modal open={open} onClose={onClose} closeAfterTransition>
            <Fade in={open}>
                <Box sx={modalBackdropStyle} onClick={onClose}>
                    {/* убираем внутренние отступы и растягиваем картинку на всю карточку */}
                    <Box
                        sx={{
                            ...cardContainerStyle,
                            p: 0,
                            aspectRatio: '3 / 4',
                            overflow: 'hidden',
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Box
                            component="img"
                            src={imageSrc}
                            alt="Shop teaser"
                            sx={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',      // заполняем всю форму
                                display: 'block',
                            }}
                        />
                    </Box>
                </Box>
            </Fade>
        </Modal>
    );
}
