import { Box, Button } from '@mui/material';
import React from 'react';

const DisplayComponents: React.FC = () => {
  return (
    <Box
      sx={{
        width: '100%',
        padding: '1rem',
      }}
    >
      <h1>Display Components</h1>
      <Box
        sx={{
          display: 'flex',
          gap: '1rem',
        }}
      >
        <h2>Button</h2>
        <Button>primary</Button>
        <Button color='secondary'>secondary</Button>
        <Button color='error'>error</Button>
      </Box>
    </Box>
  );
};

export default DisplayComponents;
