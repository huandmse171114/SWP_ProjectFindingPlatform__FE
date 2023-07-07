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
import styles from './Members.module.scss'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import demoData from '../../../../components/Layout/component/DemoData';
import BasicSelect from '../../../../components/Layout/component/BasicSelect';

const cx = classNames.bind(styles);


// Generate Member Data
function createData(id, email, fullname, dob, phone, status, skills, major) {
  return { id, email, fullname, dob, phone, status, skills, major };
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  p: 4,
  borderRadius: 2
};

const rows = [
  
  createData(
    1,
    'huandmse171114@fpt.edu.vn',
    'Dinh Minh Huan 1',
    '05/07/2003',
    '0977588901',
    demoData.accountStatus[0],
    [
      {
        id: 1,
        name: 'Javascript',
        level: 1,
        status: demoData.skillStatus[0]
      },
      {
        id: 1,
        name: 'Java',
        level: 5,
        status: demoData.skillStatus[0]
      },
      {
        id: 1,
        name: 'Figma',
        level: 3,
        status: demoData.skillStatus[0]
      },
      {
        id: 1,
        name: 'PHP',
        level: 2,
        status: demoData.skillStatus[0]
      }
    ],
    "Software Engineer"
  ),
  createData(
    2,
    'huandmse171114@fpt.edu.vn',
    'Dinh Minh Huan 2',
    '05/07/2003',
    '0977588901',
    demoData.accountStatus[0],
    [
      {
        id: 1,
        name: 'Javascript',
        level: 1,
        status: demoData.skillStatus[0]
      },
      {
        id: 1,
        name: 'Java',
        level: 5,
        status: demoData.skillStatus[0]
      },
      {
        id: 1,
        name: 'Figma',
        level: 3,
        status: demoData.skillStatus[0]
      },
      {
        id: 1,
        name: 'PHP',
        level: 2,
        status: demoData.skillStatus[0]
      }
    ],
    "Software Engineer"
  ),
  createData(
    3,
    'huandmse171114@fpt.edu.vn',
    'Dinh Minh Huan 3',
    '05/07/2003',
    '0977588901',
    demoData.accountStatus[0],
    [
      {
        id: 1,
        name: 'Javascript',
        level: 1,
        status: demoData.skillStatus[0]
      },
      {
        id: 1,
        name: 'Java',
        level: 5,
        status: demoData.skillStatus[0]
      },
      {
        id: 1,
        name: 'Figma',
        level: 3,
        status: demoData.skillStatus[0]
      },
      {
        id: 1,
        name: 'PHP',
        level: 2,
        status: demoData.skillStatus[0]
      }
    ],
    "Software Engineer"
  ),
  createData(
    4,
    'huandmse171114@fpt.edu.vn',
    'Dinh Minh Huan 4',
    '05/07/2003',
    '0977588901',
    demoData.accountStatus[0],
    [
      {
        id: 1,
        name: 'Javascript',
        level: 1,
        status: demoData.skillStatus[0]
      },
      {
        id: 1,
        name: 'Java',
        level: 5,
        status: demoData.skillStatus[0]
      },
      {
        id: 1,
        name: 'Figma',
        level: 3,
        status: demoData.skillStatus[0]
      },
      {
        id: 1,
        name: 'PHP',
        level: 2,
        status: demoData.skillStatus[0]
      }
    ],
    "Software Engineer"
  ),

];

function preventDefault(event) {
  event.preventDefault();
}

export default function Members() {
  const [openCreate, setOpenCreate] = React.useState(false);
  const [isEdit, setIsEdit] = React.useState(false);
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
        <Title>Members</Title>
      </div>
      <Table size="medium">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Fullname</TableCell>
            <TableCell>Date of Birth</TableCell>
            <TableCell>Phone number</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.fullname}</TableCell>
              <TableCell>{row.dob}</TableCell>
              <TableCell>{row.phone}</TableCell>
              <TableCell>{row.status.name}</TableCell>
              <TableCell align="right">
                <Button onClick={() => handleOpenEdit(row)}>View Detail</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more members
      </Link>

      <Modal
        open={openEdit}
        onClose={handleCloseEdit}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h3" className={cx('modal-title')} component="h2">
            Member Detail
          </Typography>
          {currRow !== '' && 
            (<Grid2 container rowGap={4} direction='column'>
                <Grid2 container justifyContent='space-between' className={cx('form-detail')}>
                    <Grid2 lg={5.8}>
                      <TextField disabled fullWidth label='Email' value={currRow.email}/>
                    </Grid2>
                    <Grid2 lg={5.8}>
                      <TextField disabled fullWidth aria-readonly label='Fullname' value={currRow.fullname}/>
                    </Grid2>
                </Grid2>
                <Grid2 container justifyContent='space-between' className={cx('form-detail')}>
                    <Grid2 lg={5.8}>
                      <TextField disabled fullWidth label='Phone number' value={currRow.phone}/>
                    </Grid2>
                    <Grid2 lg={5.8}>
                      <TextField disabled fullWidth aria-readonly label='Major' value={currRow.major}/>
                    </Grid2>
                </Grid2>
                <Grid2 container justifyContent='space-between' className={cx('form-detail')}>
                  <Typography id="modal-modal-title" variant="h4" className={cx('modal-title')} component="h2">
                    Skills
                  </Typography>
                  <div className={cx('modal-skill-container')}>
                    <ul className={cx('modal-skill-list')}>
                      {currRow.skills.map(skill => {
                        return (
                          <li className={cx('modal-skill-item')}>
                            <div className={cx('skill-item-text')}>
                              <p>{skill.name}</p>
                              <p>Level: {skill.level}</p>
                            </div>
                            <BasicSelect options={demoData.skillStatus} defaultValue={skill.status.id} label="Select Skill Status" />
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </Grid2>
                <Grid2 container justifyContent='space-between'>
                    <Grid2 lg={7}>
                        <BasicSelect label="Select Status" defaultValue={currRow.status.id} options={demoData.accountStatus} />
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