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
import request from '../../../../utils/request';
import SimpleSnackbar from '../../../../components/Layout/component/SimpleSnackbar';

const cx = classNames.bind(styles);

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

function preventDefault(event) {
  event.preventDefault();
}

export default function Accounts({ data }) {
  const [currData, setCurrData] = React.useState(data);
  const [isLoading, setIsLoading] = React.useState(false);
  const [openCreate, setOpenCreate] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [currRow, setCurrRow] = React.useState('');
  const [roles, setRoles] = React.useState([]);
  const [isLoadingRole, setIsLoadingRole] = React.useState(true);
  const [message, setMessage] = React.useState();
  const [messageType, setMessageType] = React.useState();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [role, setRole] = React.useState('');
  const [isUpdatingState, setIsUpdatingState] = React.useState(false);
  const [currId, setCurrId] = React.useState('');
  const [editAccountEmail, setEditAccountEmail] = React.useState('');
  const [editAccountPassword, setEditAccountPassword] = React.useState('');
  const [editAccountConfirmPassword, setEditAccountConfirmPassword] = React.useState('');
  const [editAccountRole, setEditAccountRole] = React.useState('');

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

  const handleCreate = () => {
    if (!isLoading) {
      // console.log({
      //     email: email,
      //     password: password,
      //     role: role
      //   })
      setIsLoading(true)
      if (password !== confirmPassword) {
        setMessage("Confirm password is not correct")
        setMessageType('warning')
        setIsLoading(false)
      }else {
        request.post("auth/register", {
          email: email,
          password: password,
          role: role
        })
          .then(res => {
            request.get("accounts/all")
            .then(res2 => {
              setMessage(res.data)
              setMessageType('success')
              setEmail('')
              setPassword('')
              setConfirmPassword('')
              setRole('')
              setCurrData(res2.data);
              console.log(res2.data)
              window.sessionStorage.setItem("accounts", JSON.stringify(res2.data))
              setIsLoading(false)
            })
          })
          .catch(res => {
            setMessage(res.response.data)
            setMessageType('error')
            setIsLoading(false)
          })

      }
    }
  }

  const handleSave = () => {
    if (!isLoading) {
      console.log({
        id: currRow.id,
        email: editAccountEmail, 
        password: editAccountConfirmPassword !== '' || currRow.password,
        role: editAccountRole
      })
      if (editAccountPassword !== editAccountConfirmPassword) {
        setMessage("Confirm password is not correct")
        setMessageType('warning')
        setIsLoading(false)
      
      }else {
        setIsLoading(true)
        request.put("accounts", {
          id: currRow.id,
          email: editAccountEmail, 
          password: editAccountConfirmPassword !== '' || currRow.password,
          role: editAccountRole
        }).then(res => {
            request.get("accounts/all")
            .then(res2 => {
              setMessage(res.data)
              setMessageType('success')
              setCurrData(res2.data);
              console.log(res2.data)
              window.sessionStorage.setItem("accounts", JSON.stringify(res2.data))
              setIsLoading(false)
            })
          })
          .catch(res => {
            setMessage(res.response.data)
            setMessageType('error')
            setEditAccountEmail(currRow.email)
            setEditAccountPassword('')
            setEditAccountConfirmPassword('')
            setEditAccountRole('')
            setIsLoading(false)
          })
      }
    }
  }

  const handleUpdateStatus = (id, status) => {
    if (!isLoading) {
      setIsLoading(true)
      setIsUpdatingState(true);
      setCurrId(id)
      request.put("accounts/status", {
        id: id,
        status: status
      }).then(res => {
        console.log(res)
        request.get("accounts/all")
          .then(res2 => {
              setMessage(res.data.message)
              setMessageType('success')
              setCurrData(res2.data);
              console.log(res2.data)
              window.sessionStorage.setItem("accounts", JSON.stringify(res2.data))
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
    // ======================= Get accounts roles data =========================
    if (window.sessionStorage.getItem("account-role") === null) {
      request.get("accounts/role/all")
          .then(res => {
              setRoles(res.data);
              setIsLoadingRole(false);
              window.sessionStorage.setItem("account-role", JSON.stringify(res.data));
              console.log(JSON.parse(window.sessionStorage.getItem("account-role")))
          })
    }else {
      setRoles(JSON.parse(window.sessionStorage.getItem("account-role")));
      setIsLoadingRole(false);
    }
  }, [])

  React.useEffect(() => {
    if (message && messageType) {
      setTimeout(() => {
        setMessage(undefined)
      }, 3000)
    }
  }, [message, messageType])

  React.useEffect(() => {
    if (currRow) {
      setEditAccountEmail(currRow.email)
      setEditAccountRole(currRow.role.id)
    }
  }, [currRow])

  return (
    
    <React.Fragment>
      {(message && messageType) &&
          <SimpleSnackbar message={message} type={messageType}/>
      }
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
          {currData.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.password}</TableCell>
              <TableCell>{row.role.name}</TableCell>
              <TableCell>{row.status.name}</TableCell>
              <TableCell align="right">
                <Button onClick={() => handleOpenEdit(row)}>Edit</Button>
                {row.status.id === 0 ?
                  <Button color='error' disabled={(isUpdatingState && currId === row.id) && true} variant='contained' onClick={() => handleUpdateStatus(row.id, 1)}>
                    {(isUpdatingState && currId === row.id) ? "Updating" : "Disable"}
                  </Button> :
                  <Button color='success' disabled={(isUpdatingState && currId === row.id) && true} variant='contained' onClick={() => handleUpdateStatus(row.id, 0)}>
                    {(isUpdatingState && currId === row.id) ? "Updating" : "Enable"}
                  </Button>
                }
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
                  <TextField value={email} onChange={(e) => setEmail(e.target.value)} fullWidth label='Email'/>
              </Grid2>
              <Grid2 container justifyContent='space-between' className={cx('form-detail')}>
                  <TextField value={password} type='password' onChange={(e) => setPassword(e.target.value)} fullWidth label='Password'/>
              </Grid2>
              <Grid2 container justifyContent='space-between' className={cx('form-detail')}>
                  <TextField value={confirmPassword} type='password' onChange={(e) => setConfirmPassword(e.target.value)} fullWidth label='Confirm Password'/>
              </Grid2>
              <Grid2 container justifyContent='space-between'>
                  <Grid2 lg={7}>
                    {!isLoadingRole &&
                      <BasicSelect label="Select Role" setParentValue={setRole} options={roles} />
                    }
                  </Grid2>
                  <Grid2 lg={4}>
                      <Button onClick={handleCreate} className={cx('form-submit-btn')} variant="contained" color='primary'>Create</Button>
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
                    <TextField disabled onChange={(e) => setEditAccountEmail(e.target.value)} fullWidth label='Email' value={editAccountEmail}/>
                </Grid2>
                <Grid2 container justifyContent='space-between' className={cx('form-detail')}>
                    <TextField disabled fullWidth aria-readonly label='Current Password' value={currRow.password}/>
                </Grid2>
                <Grid2 container justifyContent='space-between' className={cx('form-detail')}>
                    <TextField type='password' value={editAccountPassword} onChange={(e) => setEditAccountPassword(e.target.value)} fullWidth label='New Password'/>
                </Grid2>
                <Grid2 container justifyContent='space-between' className={cx('form-detail')}>
                    <TextField type='password' value={editAccountConfirmPassword} onChange={(e) => setEditAccountConfirmPassword(e.target.value)} fullWidth label='Confirm New Password'/>
                </Grid2>
                <Grid2 container justifyContent='space-between'>
                    <Grid2 lg={7}>
                      {!isLoadingRole &&
                        <BasicSelect label="Select Role" value={editAccountRole} defaultValue={editAccountRole} setParentValue={setEditAccountRole} options={roles} />
                      }
                    </Grid2>
                    <Grid2 lg={4}>
                        <Button onClick={handleSave} className={cx('form-submit-btn')} variant="contained" color='primary'>Save</Button>
                    </Grid2>
                </Grid2>
            </Grid2>)
          }
        </Box>
      </Modal>
    </React.Fragment>
  );
}