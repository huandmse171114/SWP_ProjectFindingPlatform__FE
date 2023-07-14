import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import classNames from 'classnames/bind';
import styles from './BasicModal.module.scss'
import { Paper } from '@mui/material';

const cx = classNames.bind(styles);


export default function BasicModalControl({ btnLabel, fullWidth, btnIcon, children, btnClass, size, onClick, ...props}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let sizeValue = 0;
  if (size === 'large') {
    sizeValue = 800
  }else if (size === 'medium') {
    sizeValue = 600
  }else if (size === 'xlarge') {
    sizeValue = 1000
  }else {
    sizeValue = 400
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: sizeValue,
    maxHeight: '80vh',
    overflowY: 'scroll',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 3
  };

  return (
    <div onClick={onClick === undefined ? (e) => e.stopPropagation() : onClick} className={`${cx('wrapper')} ${fullWidth && cx('full-width')}`}>
      <Button {...props} className={btnClass} onClick={handleOpen}>
        {btnIcon}
        {btnLabel}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Paper sx={style}>
          {children}
        </Paper>
      </Modal>
    </div>
  );
}