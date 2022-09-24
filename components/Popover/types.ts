import React from 'react';

export interface PopoverProps {
  open: boolean;
  anchorEl: HTMLElement;
  setOpen: (open: boolean) => void;
  title: string;
  children: React.ReactNode;
}
