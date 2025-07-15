import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArtifactCard from '../../components/ArtifactCard/ArtifactCard';
import {
  collectionGridWrapper,
  emptyStateWrapper,
  emptyImageStyle,
  emptyTextContainer,
  emptyTitleStyle,
  emptySubtitleStyle,
  emptyButtonStyle,
} from '../../styles/features/CollectionScreen.styles';

const responseFromBackend = {
  ok: true,
  data: {
    1: {
      id: '1',
      name: 'Rainbow',
      rarity: 'legendary',
      count: 3,
      media: { type: 'image', url: '/assets/cat-image-1.png' },
    },
    2: {
      id: '2',
      name: 'Crab',
      rarity: 'rare',
      count: 1,
      media: { type: 'video', url: '/assets/cat-video-4.mp4' },
    },
  },
};

const mockArtifacts = responseFromBackend.ok
  ? Object.entries(responseFromBackend.data).map(([id, artifact]) => ({
      id,
      ...artifact,
    }))
  : [];

function CollectionScreen() {
  const navigate = useNavigate();
  const artifacts = mockArtifacts;

  if (!artifacts || artifacts.length === 0) {
    return (
      <Box sx={emptyStateWrapper}>
        <Box>
          <Box
            component="img"
            src="/assets/images/empty-placeholder.png"
            alt="Нет артефактов"
            sx={emptyImageStyle}
          />
          <Box sx={emptyTextContainer}>
            <Typography sx={emptyTitleStyle}>
              Ваша коллекция пуста
            </Typography>
            <Typography sx={emptySubtitleStyle}>
              Соберите уникальные артефакты и станьте лидером!
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={(theme) => emptyButtonStyle(theme)}
            onClick={() => navigate('/')}
          >
            Получить первый артефакт
          </Button>
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={(theme) => collectionGridWrapper(theme)}>
      {artifacts.map((artifact) => (
        <ArtifactCard key={artifact.id} artifact={artifact} />
      ))}
    </Box>
  );
}

export default CollectionScreen;
