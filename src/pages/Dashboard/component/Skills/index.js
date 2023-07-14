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
import styles from './Skills.module.scss'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import demoData from '../../../../components/Layout/component/DemoData';
import request from '../../../../utils/request';
import SimpleSnackbar from '../../../../components/Layout/component/SimpleSnackbar';
import { type } from '@testing-library/user-event/dist/type';
import LoadingOverlay from '../../../../components/Layout/component/LoadingOverlay';

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

export default function Skills({ data }) {
  const [currData, setCurrData] = React.useState(data);
  const [isLoading, setIsLoading] = React.useState(false);
  const [openCreate, setOpenCreate] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [currRow, setCurrRow] = React.useState('');
  const [editSkillName, setEditSkillName] = React.useState('')
  const handleOpenCreate = () => setOpenCreate(true);
  const handleCloseCreate = () => setOpenCreate(false);
  const [skillName, setSkillName] = React.useState('');
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

  const handleCreate = () => {
    if (!isLoading) {
      setIsLoading(true)
      request.post("skills", {name: skillName})
        .then(res => {
          request.get("skills/all")
          .then(res2 => {
            setMessage(res.data)
            setMessageType('success')
              setSkillName('')
              setCurrData(res2.data);
              console.log(res2.data)
              window.sessionStorage.setItem("skills", JSON.stringify(res2.data))
              setIsLoading(false)
            })
        })
        .catch(res => {
          setMessage(res.response.data)
          setMessageType('error')
          setSkillName('')
          setIsLoading(false)
        })
    }
  }

  const handleSave = () => {
    if (!isLoading && editSkillName !== currRow.name) {
      setIsLoading(true)

      request.put("skills", {
        id: currRow.id,
        name: editSkillName
      }).then(res => {
        request.get("skills/all")
          .then(res2 => {
            setMessage(res.data)
            setMessageType('success')
              setCurrData(res2.data);
              console.log(res2.data)
              window.sessionStorage.setItem("skills", JSON.stringify(res2.data))
              setIsLoading(false)
          }).catch(res => {
            setMessage(res.response.data)
            setMessageType('error')
            setEditSkillName(currRow.name)
            setIsLoading(false)
          })
      })
    }
  }

  const handleUpdateStatus = (id, status) => {
    if (!isLoading) {
      setIsLoading(true)

      request.put("skills/status", {
        id: id,
        status: status
      }).then(res => {
        console.log(res)
        request.get("skills/all")
          .then(res2 => {
              setMessage(res.data.message)
              setMessageType('success')
              setCurrData(res2.data);
              console.log(res2.data)
              window.sessionStorage.setItem("skills", JSON.stringify(res2.data))
              setIsLoading(false)
          }).catch(res => {
            setMessage(res.response.data.message)
            setMessageType('error')
            setIsLoading(false)
          })
      })
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
    if (currRow) {
      setEditSkillName(currRow.name)
    }
  }, [currRow])

  return (
    <React.Fragment>
      {/* {isLoading && <LoadingOverlay/>} */}
      {(message && messageType) &&
          <SimpleSnackbar message={message} type={messageType}/>
      }
      <div className={cx('table-head')}>
        <Title>Skills</Title>
        <Button onClick={handleOpenCreate} variant='contained' color='primary'>Create</Button>
      </div>
      <Table size="medium">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Skill Name</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currData.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.status.name}</TableCell>
              <TableCell align="right">
                <Button onClick={() => handleOpenEdit(row)}>Edit</Button>
                {row.status.id === 0 ?
                  <Button color='error' variant='contained' onClick={() => handleUpdateStatus(row.id, 0)}>Disable</Button> :
                  <Button color='success' variant='contained' onClick={() => handleUpdateStatus(row.id, 1)}>Enable</Button>
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
            Create new skill
          </Typography>
          <Grid2 container rowGap={4} direction='column'>
              <Grid2 container justifyContent='space-between' className={cx('form-detail')}>
                  <TextField value={skillName} onChange={(e) => setSkillName(e.target.value)} fullWidth label='Skill Name'/>
              </Grid2>
              <Grid2 container justifyContent='space-between'>
                  <Button onClick={handleCreate} className={cx('form-submit-btn')} variant="contained" color='primary'>Create</Button>
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
            Edit Skills
          </Typography>
          {currRow !== '' && 
            (
              <Grid2 container rowGap={4} direction='column'>
                <Grid2 container justifyContent='space-between' className={cx('form-detail')}>
                    <TextField onChange={(e) => setEditSkillName(e.target.value)} fullWidth label='Skill Name' value={editSkillName}/>
                </Grid2>
                <Grid2 container justifyContent='space-between'>
                    <Button onClick={handleSave} className={cx('form-submit-btn')} variant="contained" color='primary'>Save</Button>
                </Grid2>
            </Grid2>         
            )
          }
        </Box>
      </Modal>
    </React.Fragment>
  );
}