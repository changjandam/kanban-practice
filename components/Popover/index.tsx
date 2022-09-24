import React from 'react';
import {
  Popover as MuiPopover,
  Box,
  Typography,
  ButtonBase,
} from '@mui/material';
import { IoCloseOutline } from 'react-icons/io5';
import { PopoverProps } from './types';

const Popover: React.FC<PopoverProps> = ({
  anchorEl,
  open,
  setOpen,
  children,
  title,
}) => {
  return (
    <MuiPopover open={open} anchorEl={anchorEl}>
      <Box>
        <Typography>{title}</Typography>
        <ButtonBase onClick={() => setOpen(false)}>
          <IoCloseOutline />
        </ButtonBase>
      </Box>
      <Box>{children}</Box>
    </MuiPopover>
  );
};

export default Popover;
