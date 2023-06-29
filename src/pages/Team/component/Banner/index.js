import React from 'react';
import styles from './Banner.module.scss';
import classNames from 'classnames/bind';
import SendIcon from '@mui/icons-material/Send';
import {Button,TextField,Paper,Pagination,IconButton,Tooltip} from '@mui/material';
 
const cx = classNames.bind(styles);
function index() {
	return (
		<div className={cx('project-banner')}>
			<h1 className={cx('project-heading')}>Finding Teams</h1>
			<Paper elevation={6} className={cx('project-search')}>
				<TextField
					className={cx('search-input')}
					label="Search team"
				></TextField>
				{/* <BasicSelect className={cx('search-select')} label='Select location' options={selectOptions} /> */}
				<Button
					className={cx('search-btn')}
					variant="contained"
					color="primary"
					endIcon={<SendIcon />}
				>
					Find
				</Button>
			</Paper>
		</div>
	);
}

export default index;
