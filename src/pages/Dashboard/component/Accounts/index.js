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
import styles from './Accounts.module.scss'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import demoData from '../../../../components/Layout/component/DemoData';
import BasicSelect from '../../../../components/Layout/component/BasicSelect';

const cx = classNames.bind(styles);


// Generate Account Data
function createData(id, email, password, role, status) {
  return { id, email, password, role, status };
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
    0,
    'huandmse171114@fpt.edu.vn',
    'jt9gjcngl@!jlrig129484jljkvngjlkgjljabdsbdsmvcldcmvcddcmmjglktvushgjk',
    demoData.roles[0],
    demoData.accountStatus[0].name
  ),

  createData(
    1,
    'huandmse171114@fpt.edu.vn',
    'jt9gjcngl@!jlrig129484jljkvngjlkgjljabdsbdsmvcldcmvcddcmmjglktvushgjk',
    demoData.roles[1],
    demoData.accountStatus[0].name
  ),

  createData(
    2,
    'huandmse171114@fpt.edu.vn',
    'jt9gjcngl@!jlrig129484jljkvngjlkgjljabdsbdsmvcldcmvcddcmmjglktvushgjk',
    demoData.roles[2],
    demoData.accountStatus[0].name
  ),

  createData(
    3,
    'huandmse171114@fpt.edu.vn',
    'jt9gjcngl@!jlrig129484jljkvngjlkgjljabdsbdsmvcldcmvcddcmmjglktvushgjk',
    demoData.roles[2],
    demoData.accountStatus[0].name
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Accounts() {
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
        <Title>Accounts</Title>
        <Button onClick={handleOpenCreate} variant='contained' color='primary'>Create</Button>
      </div>
      <Table size="medium">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Password</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.password}</TableCell>
              <TableCell>{row.role.name}</TableCell>
              <TableCell>{row.status}</TableCell>
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
            Create new account
          </Typography>
          <Grid2 container rowGap={4} direction='column'>
              <Grid2 container justifyContent='space-between' className={cx('form-detail')}>
                  <TextField fullWidth label='Email'/>
              </Grid2>
              <Grid2 container justifyContent='space-between' className={cx('form-detail')}>
                  <TextField fullWidth label='Password'/>
              </Grid2>
              <Grid2 container justifyContent='space-between' className={cx('form-detail')}>
                  <TextField fullWidth label='Confirm Password'/>
              </Grid2>
              <Grid2 container justifyContent='space-between'>
                  <Grid2 lg={7}>
                      <BasicSelect label="Select Role" options={demoData.roles} />
                  </Grid2>
                  <Grid2 lg={4}>
                      <Button className={cx('form-submit-btn')} variant="contained" color='primary'>Create</Button>
                  </Grid2>
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
            (<Grid2 container rowGap={4} direction='column'>
                <Grid2 container justifyContent='space-between' className={cx('form-detail')}>
                    <TextField disabled fullWidth label='Email' value={currRow.email}/>
                </Grid2>
                <Grid2 container justifyContent='space-between' className={cx('form-detail')}>
                    <TextField disabled fullWidth aria-readonly label='Current Password' value={currRow.password}/>
                </Grid2>
                <Grid2 container justifyContent='space-between' className={cx('form-detail')}>
                    <TextField fullWidth label='New Password'/>
                </Grid2>
                <Grid2 container justifyContent='space-between' className={cx('form-detail')}>
                    <TextField fullWidth label='Confirm New Password'/>
                </Grid2>
                <Grid2 container justifyContent='space-between'>
                    <Grid2 lg={7}>
                        <BasicSelect label="Select Role" defaultValue={currRow.role.id} options={demoData.roles} />
                    </Grid2>
                    <Grid2 lg={4}>
                        <Button className={cx('form-submit-btn')} variant="contained" color='primary'>Save</Button>
                    </Grid2>
                </Grid2>
            </Grid2>)
          }
        </Box>
      </Modal>
    </React.Fragment>
  );
}