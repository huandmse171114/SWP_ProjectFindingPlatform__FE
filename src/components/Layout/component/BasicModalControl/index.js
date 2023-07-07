import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import classNames from 'classnames/bind';
import styles from './BasicModal.module.scss'
import { Paper } from '@mui/material';

const cx = classNames.bind(styles);


export default function BasicModalControl({ btnLabel, btnIcon, children, btnClass, size, ...props}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let sizeValue = 0;
  if (size === 'large') {
    sizeValue = 800
  }else if (size === 'medium') {
    sizeValue = 600
  }else {
    sizeValue = 400
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: sizeValue,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 3
  };

  return (
    <div className={cx('wrapper')}>
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