import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../Title';
import { Button, TextField } from '@mui/material';
import classNames from 'classnames/bind';
import styles from './Categories.module.scss'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import demoData from '../../../../components/Layout/component/DemoData';
import BasicSelect from '../../../../components/Layout/component/BasicSelect';

const cx = classNames.bind(styles);


// Generate Categories Data
function createData(id, name, status) {
  return { id, name, status };
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  p: 4,
  borderRadius: 2
};

const rows = [
  
  createData(
    1,
    'Javascript',
    demoData.accountStatus[0]
  ),

  createData(
    2,
    'NodeJS',
    demoData.accountStatus[0]
  ),

  createData(
    3,
    'React',
    demoData.accountStatus[0]
  ),

  createData(
    4,
    'Java',
    demoData.accountStatus[0]
  ),

];

function preventDefault(event) {
  event.preventDefault();
}

export default function Categories() {
  const [openCreate, setOpenCreate] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [currRow, setCurrRow] = React.useState('');
  const handleOpenCreate = () => setOpenCreate(true);
  const handleCloseCreate = () => setOpenCreate(false);
  const handleOpenEdit = (row) => {
    setOpenEdit(true)
    setCurrRow(row)
  };
  const handleCloseEdit = () => {
    setOpenEdit(false)
    setCurrRow('')
  };


  return (
    <React.Fragment>
      <div className={cx('table-head')}>
        <Title>Categories</Title>
        <Button onClick={handleOpenCreate} variant='contained' color='primary'>Create</Button>
      </div>
      <Table size="medium">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Category Name</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.status.name}</TableCell>
              <TableCell align="right">
                <Button onClick={() => handleOpenEdit(row)}>Edit</Button>
                <Button>Disable</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more accounts
      </Link>

      <Modal
        open={openCreate}
        onClose={handleCloseCreate}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title"  variant="h3"className={cx('modal-title')} component="h2">
            Create new category
          </Typography>
          <Grid2 container rowGap={4} direction='column'>
              <Grid2 container justifyContent='space-between' className={cx('form-detail')}>
                  <TextField fullWidth label='Category Name'/>
              </Grid2>
              <Grid2 container justifyContent='space-between'>
                  <Button className={cx('form-submit-btn')} variant="contained" color='primary'>Create</Button>
              </Grid2>
          </Grid2>        
        </Box>
      </Modal>

      <Modal
        open={openEdit}
        onClose={handleCloseEdit}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" className={cx('modal-title')} component="h2">
            Edit Accounts
          </Typography>
          {currRow !== '' && 
            (
            <Grid2 container rowGap={4} direction='column'>
                <Grid2 container justifyContent='space-between' className={cx('form-detail')}>
                    <TextField fullWidth label='Category Name' value={currRow.name}/>
                </Grid2>
                <Grid2 container justifyContent='space-between'>
                    <Button className={cx('form-submit-btn')} variant="contained" color='primary'>Save</Button>
                </Grid2>
            </Grid2> 
        )
          }
        </Box>
      </Modal>
    </React.Fragment>
  );
}