import React from 'react';
import {
  Popover as MuiPopover,
  Box,
  Typography,
  ButtonBase,
} from '@mui/material';
import { IoCloseOutline } from 'react-icons/io5';
import { PopoverProps } from './types';
import theme from '../../styles/theme';

const fontSize = theme.typography.fontSize;

const Popover: React.FC<PopoverProps> = ({
  anchorEl,
  open,
  setOpen,
  children,
  title,
}) => {
  return (
    <MuiPopover
      open={open}
      anchorEl={anchorEl}
      anchorReference='anchorPosition'
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      anchorPosition={{
        top:
          (anchorEl?.offsetTop || 0) + (anchorEl?.offsetHeight || 0) + fontSize,
        left: anchorEl?.offsetLeft || 0,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          minWidth: '19rem', 
        }}
      >
        <Typography
          
        >{title}</Typography>
        <ButtonBase onClick={() => setOpen(false)}>
          <IoCloseOutline />
        </ButtonBase>
      </Box>
      <Box>{children}</Box>
    </MuiPopover>
  );
};

export default Popover;
