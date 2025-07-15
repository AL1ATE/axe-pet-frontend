import { useState } from 'react';
import { Button, Box } from '@mui/material';
import { clickerButton } from '../../styles/components/ClickerButton.styles';
import ArtifactRevealModal from '../ArtifactRevealModal/ArtifactRevealModal';

const mockArtifacts = [
  {
    rarity: 'legendary',
    rarityColor: 'gold',
    name: 'Wizard Cat',
    media: { type: 'image', url: '/assets/cat-image-1.png' }
  },
  {
    rarity: 'rare',
    rarityColor: '#0096FF',
    name: 'Knight Cat',
    media: { type: 'video', url: '/assets/cat-video-4.mp4' }
  }
];

function ClickerButton() {
  const [clicks, setClicks] = useState(3);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentArtifact, setCurrentArtifact] = useState(null);

  const handleClick = () => {
    if (clicks <= 0) return;
    setClicks((prev) => prev - 1);

    // Симулируем загрузку с бэкенда
    const random = mockArtifacts[Math.floor(Math.random() * mockArtifacts.length)];
    setCurrentArtifact(random);
    setModalOpen(true);
  };

  return (
    <>
      <Box sx={{ px: 2 }}>
        <Button
          fullWidth
          sx={clickerButton}
          onClick={handleClick}
          disabled={clicks <= 0}
        >
          Happy Axie
        </Button>
      </Box>

      <ArtifactRevealModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        artifact={currentArtifact}
        skip={() => setModalOpen(false)}
      />
    </>
  );
}

export default ClickerButton;
