import styled from '@emotion/styled';
import { Box, Button } from '@mui/material';
import React, { useRef, useState } from 'react';
import Popover from '../../components/Popover';

const DisplayBox = styled(Box)`
  display: flex;
  gap: 1rem;
`;

const DisplayComponents: React.FC = () => {
  const popover1Ref = useRef<HTMLButtonElement>(null);
  const [popover1Open, setPopover1Open] = useState(false);

  return (
    <Box
      sx={{
        width: '100%',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <h1>Display Components</h1>
      <DisplayBox>
        <h2>Button</h2>
        <Button>primary</Button>
        <Button color='secondary'>secondary</Button>
        <Button color='error'>error</Button>
      </DisplayBox>
      <DisplayBox>
        <h2>Popover</h2>
        <Button ref={popover1Ref} onClick={() => setPopover1Open(true)}>
          open popover
        </Button>
        <Popover
          anchorEl={popover1Ref.current}
          open={popover1Open}
          setOpen={setPopover1Open}
          title='Popover Title'
        >
          <p>Popover Content</p>
        </Popover>
      </DisplayBox>
    </Box>
  );
};

export default DisplayComponents;
