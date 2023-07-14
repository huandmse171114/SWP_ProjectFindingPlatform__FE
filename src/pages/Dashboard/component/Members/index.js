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
import request from '../../../../utils/request';
import SimpleSnackbar from '../../../../components/Layout/component/SimpleSnackbar';

const cx = classNames.bind(styles);

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

function preventDefault(event) {
  event.preventDefault();
}

export default function Members({ data }) {
  const [openCreate, setOpenCreate] = React.useState(false);
  const [isEdit, setIsEdit] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [currRow, setCurrRow] = React.useState('');
  const [currData, setCurrData] = React.useState(data);
  const handleOpenCreate = () => setOpenCreate(true);
  const handleCloseCreate = () => setOpenCreate(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [currId, setCurrId] = React.useState('');
  const [isUpdatingState, setIsUpdatingState] = React.useState(false);
  const [status, setStatus] = React.useState([]);
  const [message, setMessage] = React.useState();
  const [messageType, setMessageType] = React.useState();
  

  const handleOpenEdit = (row) => {
    setOpenEdit(true)
    setCurrRow(row)
  };
  const handleCloseEdit = () => {
    setOpenEdit(false)
    setCurrRow('')
  };

  const handleUpdateStatus = (id, status) => {
    if (!isLoading) {
      setIsLoading(true)
      setIsUpdatingState(true)
      setCurrId(id)
      if (status === -1) { 
        if (!currRow.name) { //check if this member have name information
          status = 0 // generated status
        }else status = 1 //informed status
      }
      request.put("members/status", {
        id: id,
        status: status
      }).then(res => {
        console.log(res)
        request.get("members/all")
          .then(res2 => {
              setMessage(res.data.message)
              setMessageType('success')
              setCurrData(res2.data);
              console.log(res2.data)
              window.sessionStorage.setItem("members", JSON.stringify(res2.data))
              setIsLoading(false)
              setIsUpdatingState(false)
          }).catch(res => {
            setMessage(res.response.data.message)
            setMessageType('error')
            setIsLoading(false)
            setIsUpdatingState(false)
          })
      })
    }else {
      setMessage("Bạn ơi chậm thôi, để tôi thở cái")
      setMessageType('warning')
    }
  }

  React.useEffect(() => {
    if (message && messageType) {
      setTimeout(() => {
        setMessage(undefined)
      }, 3000)
    }
  }, [message, messageType])

  React.useEffect(() => {
    // ======================= Get members status data =========================
    if (window.sessionStorage.getItem("member-status") === null) {
      request.get("members/status/all")
          .then(res => {
              setStatus(res.data);
              setIsLoading(false);
              window.sessionStorage.setItem("member-status", JSON.stringify(res.data));
              console.log(JSON.parse(window.sessionStorage.getItem("member-status")))
          })
    }else {
      setStatus(JSON.parse(window.sessionStorage.getItem("member-status")));
      setIsLoading(false);
    }
  }, [])

  React.useEffect(() => {
    console.log(currRow)
    console.log(status)
  }, [currRow])


  return (
    <React.Fragment>
      {(message && messageType) &&
          <SimpleSnackbar message={message} type={messageType}/>
      }
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
          {currData.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.email || "Empty"}</TableCell>
              <TableCell>{row.fullname || "Empty"}</TableCell>
              <TableCell>{row.dob || "Empty"}</TableCell>
              <TableCell>{row.phone || "Empty"}</TableCell>
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
                      <TextField disabled fullWidth label='Email' value={currRow.email || "Empty"}/>
                    </Grid2>
                    <Grid2 lg={5.8}>
                      <TextField disabled fullWidth aria-readonly label='Fullname' value={currRow.fullname || "Empty"}/>
                    </Grid2>
                </Grid2>
                <Grid2 container justifyContent='space-between' className={cx('form-detail')}>
                    <Grid2 lg={5.8}>
                      <TextField disabled fullWidth label='Phone number' value={currRow.phone || "Empty"}/>
                    </Grid2>
                    <Grid2 lg={5.8}>
                      <TextField disabled fullWidth aria-readonly label='Major' value={currRow.major || "Empty"}/>
                    </Grid2>
                </Grid2>
                <Grid2 container justifyContent='space-between' className={cx('form-detail')}>
                  <Typography id="modal-modal-title" variant="h4" className={cx('modal-title')} component="h2">
                    Skills
                  </Typography>
                  <div className={cx('modal-skill-container')}>
                    <ul className={cx('modal-skill-list')}>
                      {currRow.skills ? currRow.skills.map(skill => {
                        return (
                          <li className={cx('modal-skill-item')}>
                            <div className={cx('skill-item-text')}>
                              <p>{skill.name}</p>
                              <p>Level: {skill.level}</p>
                            </div>
                            <BasicSelect options={status} defaultValue={skill.status.id} label="Select Skill Status" />
                          </li>
                        )
                      }): <p className={cx('empty-skill-message')}>No data yet</p>}
                    </ul>
                  </div>
                </Grid2>
                <Grid2 container justifyContent='space-between'>
                    <Grid2 lg={7}>
                        <BasicSelect label="Select Status" disabled defaultValue={currRow.status.id} options={status} />
                    </Grid2>
                    <Grid2 lg={4}>
                        {/* <Button className={cx('form-submit-btn')} variant="contained" color='primary'>Disable</Button> */}
                        {currRow.status.id === 3 ?
                          <Button color='success' disabled={(isUpdatingState && currId === currRow.id) && true} className={cx('form-submit-btn')} variant="outlined" 
                            onClick={() => handleUpdateStatus(currRow.id, -1)}>
                              {(isUpdatingState && currId === currRow.id) ? "Updating" : "Enable"}
                          </Button> :
                          <Button color='error' disabled={(isUpdatingState && currId === currRow.id) && true} className={cx('form-submit-btn')} variant="outlined" 
                            onClick={() => handleUpdateStatus(currRow.id, 3)}>
                              {(isUpdatingState && currId === currRow.id) ? "Updating" : "Disable"}
                          </Button>
                        }
                    </Grid2>
                </Grid2>
            </Grid2>)
          }
        </Box>
      </Modal>
    </React.Fragment>
  );
}