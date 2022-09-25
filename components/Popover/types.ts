import React from 'react';

export interface PopoverProps {
  open: boolean;
  anchorEl?: HTMLElement | null;
  setOpen: (open: boolean) => void;
  title: string;
  children: React.ReactNode;
}
