import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../Title';
import { Button, TextField } from '@mui/material';
import classNames from 'classnames/bind';
import styles from './Users.module.scss'
import Modal from '@mui/material/Modal';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import BasicSelect from '../../../../components/Layout/component/BasicSelect';
import request from '../../../../utils/request';
import SimpleSnackbar from '../../../../components/Layout/component/SimpleSnackbar';
import SkillItem from './component/SkillItem';
import { useState } from 'react';

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

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Users({ data }) {
    const [openCreate, setOpenCreate] = React.useState(false);
  const [isEdit, setIsEdit] = React.useState(false);
  const [openMemberEdit, setOpenMemberEdit] = React.useState(false);
  const [currMemberRow, setCurrMemberRow] = React.useState('');
  const handleOpenCreate = () => setOpenCreate(true);
  const handleCloseCreate = () => setOpenCreate(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isLoadingMemberStatus, setIsLoadingMemberStatus] = React.useState(false);
  const [isLoadingSkillStatus, setIsLoadingSkillStatus] = React.useState(false);
  const [currMemberId, setCurrMemberId] = React.useState('');
  const [isUpdatingState, setIsUpdatingState] = React.useState(false);
  const [isUpdatingSkill, setIsUpdatingSkill] = React.useState(false);
  const [status, setStatus] = React.useState([]);
  const [skillStatus, setSkillStatus] = React.useState('')
  const [message, setMessage] = React.useState();
  const [messageType, setMessageType] = React.useState();
  const { members, publishers } = data;
  const [currMemberData, setCurrMemberData] = React.useState(members);
  const [currPublishersData, setCurrPublisherData] = React.useState(publishers)
  const [skillItemList, setSkillItemList] = useState([])
  const [skillValueList, setSkillValueList] = useState([])

  const handleOpenMemberEdit = (row) => {
    setOpenMemberEdit(true)
    setCurrMemberRow(row)
  };
  const handleCloseMemberEdit = () => {
    setOpenMemberEdit(false)
    setCurrMemberRow('')
  };

  const handleUpdateMemberSkill = (id, email) => {
    console.log("Running update member skill")
    console.log({
      id: id,
      email: email,
      skills: skillValueList
    })
    if(!isLoading) {
      setIsLoading(true);
      setIsUpdatingSkill(true);
      setCurrMemberId(id); //for loading animation, if loading = true button member with this id will turn into loading
      request.put("members/skill", {
        id: id,
        email: email,
        skills: skillValueList
      }).then(res => {
        request.get("members/all")
          .then(res2 => {
              console.log("res: " +res.data)
              setMessage(res.data)
              setMessageType('success')
              setCurrMemberData(res2.data);
              console.log("res2: " + res2.data)
              // window.sessionStorage.setItem("members", JSON.stringify(res2.data))
              setIsLoading(false)
              setIsUpdatingSkill(false)
              setOpenMemberEdit(false);
          }).catch(res => {
            setMessage(res.response.data.message)
            setMessageType('error')
            setIsLoading(false)
            setIsUpdatingSkill(false)
          }).finally(res => {
            setSkillItemList([])
            setSkillValueList([])
          })
      })
    }else {
      setMessage("Please wait, system is processing")
      setMessageType('warning')
    }
  }

  function handleSkillStatusChange(index, id, level, status) {
    setSkillValueList(pre => {
        pre[index] = {id, level, status}
        console.log(skillValueList);
        return pre;
    })
}

  const handleUpdateMemberStatus = (id, status) => {
    if (!isLoading) {
      setIsLoading(true)
      setIsUpdatingState(true)
      setCurrMemberId(id)
      if (status === -1) { 
        if (!currMemberRow.name) { //check if this member have name information
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
              setCurrMemberData(res2.data);
              console.log(res2.data)
              // window.sessionStorage.setItem("members", JSON.stringify(res2.data))
              setIsLoading(false)
              setIsUpdatingState(false)
              setOpenMemberEdit(false);
          }).catch(res => {
            setMessage(res.response.data.message)
            setMessageType('error')
            setIsLoading(false)
            setIsUpdatingState(false)
          })
      })
    }else {
      setMessage("Please wait, system is processing")
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

  // React.useEffect(() => {
  //   if (!openMemberEdit) {
  //     setSkillItemList([])
  //     setSkillValueList([])
  //   }
  // }, [openMemberEdit])

  React.useEffect(() => {
    // ======================= Get members status data =========================
    if (window.sessionStorage.getItem("member-status") === null) {
      request.get("members/status/all")
          .then(res => {
              setStatus(res.data);
              setIsLoadingMemberStatus(false);
              // window.sessionStorage.setItem("member-status", JSON.stringify(res.data));
              console.log(JSON.parse(window.sessionStorage.getItem("member-status")))
          })
    }else {
      setStatus(JSON.parse(window.sessionStorage.getItem("member-status")));
      setIsLoadingMemberStatus(false);
    }

    // ======================= Get skills status data =========================
    if (window.sessionStorage.getItem("skill-status") === null) {
      request.get("skills/status/all")
          .then(res => {
              setSkillStatus(res.data);
              setIsLoadingSkillStatus(false);
              // window.sessionStorage.setItem("skill-status", JSON.stringify(res.data));
              console.log(JSON.parse(window.sessionStorage.getItem("skill-status")))
          })
    }else {
      setSkillStatus(JSON.parse(window.sessionStorage.getItem("skill-status")));
      setIsLoadingSkillStatus(false);
    }
  }, [])

  React.useEffect(() => {
    console.log(currMemberRow)
    console.log(status)
  }, [currMemberRow])

  React.useEffect(() => {
    if (!isLoadingMemberStatus && !isLoadingSkillStatus) {
      setIsLoading(false);
    }
  }, [isLoadingMemberStatus, isLoadingSkillStatus])

  React.useEffect(() => {
    if (!isLoading && currMemberRow) { //finish loading data and open edit
      if (currMemberRow.skills.length !== 0 && skillValueList.length === 0 && skillItemList.length === 0) {
        console.log("Adding skill data")
        currMemberRow.skills.forEach((skill, index) => {
            
            setSkillValueList(pre => {
                pre[index] = {id: skill.id, level: skill.level, status: skill.status.id}
                return pre;
            })
  
            setSkillItemList(pre => {
                return [...pre, <SkillItem key={pre.length} value={skill} handleSkillStatusChange={handleSkillStatusChange} index={pre.length} options={skillStatus} cx={cx} />]
            });
        })
    }
  }
  }, [isLoading, currMemberRow])

  const [value, setValue] = React.useState(0);
  console.log(publishers);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      {(message && messageType) &&
        <SimpleSnackbar message={message} type={messageType}/>
      }
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Members" {...a11yProps(0)} />
          <Tab label="Publishers" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
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
              {currMemberData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.email || "Empty"}</TableCell>
                  <TableCell>{row.name || "Empty"}</TableCell>
                  <TableCell>{row.dob || "Empty"}</TableCell>
                  <TableCell>{row.phone || "Empty"}</TableCell>
                  <TableCell>{row.status.name}</TableCell>
                  <TableCell align="right">
                    <Button onClick={() => handleOpenMemberEdit(row)}>View Detail</Button>

                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
            See more members
          </Link>

          <Modal
            open={openMemberEdit}
            onClose={handleCloseMemberEdit}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Grid2 container justifyContent="space-between">
                <Grid2 lg={5.5}>
                  <Typography id="modal-modal-title" variant="h3" className={cx('modal-title')} component="h2">
                    Member Detail
                  </Typography>
                </Grid2>
                <Grid2 container justifyContent="right" alignItems="flex-start" lg={5.5}>
                  {!isLoading && currMemberRow !== '' && currMemberRow.status.id === 3 ?
                    <Button color='success' disabled={(isUpdatingState && currMemberId === currMemberRow.id) && true} className={cx('member-status-btn')} variant="outlined" 
                      onClick={() => handleUpdateMemberStatus(currMemberRow.id, -1)}>
                        {(isUpdatingState && currMemberId === currMemberRow.id) ? "Updating" : "Enable"}
                    </Button> :
                    <Button color='error' disabled={(isUpdatingState && currMemberId === currMemberRow.id) && true} className={cx('member-status-btn')} variant="outlined" 
                      onClick={() => handleUpdateMemberStatus(currMemberRow.id, 3)}>
                        {(isUpdatingState && currMemberId === currMemberRow.id) ? "Updating" : "Disable"}
                    </Button>
                  }
                </Grid2>
              </Grid2>
              {skillStatus && currMemberRow !== '' &&
                (<Grid2 container rowGap={4} direction='column'>
                  
                    <Grid2 container justifyContent='space-between' className={cx('form-detail')}>
                        <Grid2 lg={5.8}>
                          <TextField disabled fullWidth label='Email' value={currMemberRow.email || "Empty"}/>
                        </Grid2>
                        <Grid2 lg={5.8}>
                          <TextField disabled fullWidth aria-readonly label='Fullname' value={currMemberRow.name || "Empty"}/>
                        </Grid2>
                    </Grid2>
                    <Grid2 container justifyContent='space-between' className={cx('form-detail')}>
                        <Grid2 lg={5.8}>
                          <TextField disabled fullWidth label='Phone number' value={currMemberRow.phone || "Empty"}/>
                        </Grid2>
                        <Grid2 lg={5.8}>
                          <TextField disabled fullWidth aria-readonly label='Major' value={currMemberRow.major.name || "Empty"}/>
                        </Grid2>
                    </Grid2>
                    <Grid2 container justifyContent='space-between' className={cx('form-detail')}>
                      <Typography id="modal-modal-title" variant="h4" className={cx('modal-title')} component="h2">
                        Skills
                      </Typography>
                      <div className={cx('modal-skill-container')}>
                        <ul className={cx('modal-skill-list')}>
                          {currMemberRow.skills ? 
                            skillItemList
                          : <p className={cx('empty-skill-message')}>No data yet</p>}
                        </ul>
                      </div>
                    </Grid2>
                    <Grid2 container justifyContent='space-between'>
                        <Grid2 lg={7}>
                            <BasicSelect label="Select Status" disabled defaultValue={currMemberRow.status.id} options={status} />
                        </Grid2>
                        <Grid2 lg={4}>
                          <Button color='primary' variant="contained" disabled={(isUpdatingState && currMemberId === currMemberRow.id) && true} className={cx('member-skill-btn')}
                            onClick={() => handleUpdateMemberSkill(currMemberRow.id, currMemberRow.email)}>
                              {(isUpdatingSkill && currMemberId === currMemberRow.id) ? "Updating" : "Save"}
                          </Button>
                        </Grid2>
                    </Grid2>
                </Grid2>)
              }
            </Box>
          </Modal>
        </React.Fragment>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Not available
      </CustomTabPanel>

    </Box>
  );
}