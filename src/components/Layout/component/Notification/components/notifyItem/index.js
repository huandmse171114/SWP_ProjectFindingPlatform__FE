import classNames from "classnames/bind";
import styles from './NotifyItem.module.scss'
import { Avatar, Button } from "@mui/material";
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import demoData from "../../../DemoData";
import images from "../../../../../../assets/images";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useEffect, useRef, useState } from "react";

const cx = classNames.bind(styles);

const invitationModalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 3
  };

function NotifyItem({ request }) {

    const acceptBtn = useRef();
    const rejectBtn = useRef();
    const [openInviteModal, setOpenInviteModal] = useState(false);
    const handleOpenInviteModal = () => {
        setOpenInviteModal(true)
    };
    const handleCloseInviteModal = (e) => {
        e.stopPropagation();
        setOpenInviteModal(false)
    };

    function handleAccept(e) {
    }

    function handleReject(e) {
    }

    return ( 
        <div className={cx('wrapper')}>
            <div onClick={handleOpenInviteModal} className={cx('request-head')}>
                <div className={cx('leader-info')}>
                    <Avatar src={images.demoAvt} className={cx('leader-avt')}/>
                    <div className={cx('leader-content')}>
                        <p className={cx('leader-name')}>{request.leadName}</p>
                        <p className={cx('leader-role')}>Team Lead</p>
                    </div>
                </div>
                <div className={cx('team-info')}>
                    <SubdirectoryArrowRightIcon className={cx('team-info-icon')} />
                    <p className={cx('team-name')}>{request.name}</p>
                </div>
            </div>
            <div className={cx('request-body')}>
                <p className={cx('request-message')}>{request.message}</p>
            </div>
            <div className={cx('request-btn-group')}>
                <Button variant="contained" color="primary" className={cx('request-btn')}>Accept</Button>
                <Button variant="outlined" color="primary" className={cx('request-btn')}>Reject</Button>
            </div>

            <Modal
                open={openInviteModal}
                onClose={handleCloseInviteModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={invitationModalStyle}>
                    <Typography id="modal-modal-title" variant="h3" component="h2">
                        Team Invitation Detail
                    </Typography>
                    <div className={cx('request-head')}>
                        <div className={cx('leader-info')}>
                            <Avatar src={images.demoAvt} className={cx('leader-avt')}/>
                            <div className={cx('leader-content')}>
                                <p className={cx('leader-name')}>{request.leadName}</p>
                                <p className={cx('leader-role')}>Team Lead</p>
                            </div>
                        </div>
                        <div className={cx('team-info')}>
                            <SubdirectoryArrowRightIcon className={cx('team-info-icon')} />
                            <p className={cx('team-name')}>{request.name}</p>
                        </div>
                    </div>
                    <div className={cx('request-body')}>
                        <p className={cx('request-message')}>{request.message}</p>
                    </div>
                    <div className={cx('request-btn-group')}>
                        <Button onClick={handleAccept} variant="contained" color="primary" className={cx('request-btn')}>Accept</Button>
                        <Button onClick={handleReject} variant="outlined" color="primary" className={cx('request-btn')}>Reject</Button>
                    </div>
                </Box>
            </Modal>
        </div>
     );
}

export default NotifyItem;