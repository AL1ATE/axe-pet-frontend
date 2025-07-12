import { Button, Box } from '@mui/material';
import { clickerButton } from '../../styles/components/ClickerButton.styles';

function ClickerButton() {
  return (
    <Box sx={{ px: 2 }}>
      <Button fullWidth sx={clickerButton}>
        Happy Axie
      </Button>
    </Box>
  );
}

export default ClickerButton;
