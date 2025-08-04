import { Box, Typography, Modal, Button, Fade } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { modalBackdropStyle, cardContainerStyle, rarityTextStyle, nameTextStyle } from '../../styles/components/ArtifactRevealModal.styles';
import { shareButtonStyle, checkButtonStyle } from '../../styles/buttons/GlassButton.styles';

function QuestModal({ open, onClose, quest }) {
  const theme = useTheme();

  if (!quest) return null;

  const isShareable = quest.type === 'invite';

  return (
    <Modal open={open} onClose={onClose} closeAfterTransition>
      <Fade in={open}>
        <Box sx={modalBackdropStyle} onClick={onClose}>
          <Box sx={cardContainerStyle} onClick={(e) => e.stopPropagation()}>
            <Typography variant="h5" sx={rarityTextStyle(theme.palette.primary.main)}>
              Задание
            </Typography>
            <Typography variant="subtitle1" sx={nameTextStyle}>
              {quest.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'white',
                mt: 2,
                mb: 2,
                textAlign: 'center',
                opacity: 0.9,
              }}
            >
              {quest.description}
            </Typography>
            <Typography variant="body2" sx={{ color: '#ccc', textAlign: 'center', mb: 2 }}>
              Награда: {quest.reward} кликов
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, mt: 3 }}>
              {isShareable && (
                <Button
                  fullWidth
                  sx={{ ...shareButtonStyle, flex: 1, mt: 0 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    alert('Ссылка скопирована!');
                  }}
                >
                  Поделиться
                </Button>
              )}
              <Button
                fullWidth
                sx={{ ...checkButtonStyle, flex: 1, mt: 0 }}
                onClick={(e) => {
                  e.stopPropagation();
                  alert('Проверка задания...');
                }}
              >
                Проверить
              </Button>
            </Box>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
}

export default QuestModal;
