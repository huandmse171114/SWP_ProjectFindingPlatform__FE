import styles from './CreateProject.module.scss'
import classNames from 'classnames/bind';
import { Button, Grid, TextField } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { useState } from 'react';
import TextEditor from '../../components/Layout/component/TextEditor';
import { useEffect } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import demoData from '../../components/Layout/component/DemoData';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SimpleDropDown from '../../components/Layout/component/SimpleDropdown';
import BasicSelect from '../../components/Layout/component/BasicSelect';

const cx = classNames.bind(styles);

function ProjectDetail() {
    const [description, setDescription] = useState("")
    
    useEffect(() => {
        console.log("create page: " + description)
    }, [description])

    return (
        <div className={cx('wrapper')}>
            <div className={cx('project-container')}>
                <Grid2 container justifyContent='space-between' className={cx('project-gird')}>
                    <Grid2 lg={5} container direction='column' justifyContent='space-between' className={cx('project-input-list-container')}>
                        <Grid2 container className={cx('project-input-grid')}>
                            <ul className={cx('project-input-list')}>
                                <li className={cx('project-input-item')}>
                                    <label className={cx('project-input-label')} htmlFor='title-input'>Title</label>
                                    <div className={cx('project-input')}>
                                        <TextField id='title-input' variant='outlined' fullWidth color='primary' placeholder="Enter project's title" />
                                    </div>
                                </li>
                                <li className={cx('project-input-item')}>
                                    <Grid2 container justifyContent="space-between">
                                        <Grid2 lg={6}>
                                            <label className={cx('project-input-label')} htmlFor='title-input'>Salary</label>
                                            <FormControl className={cx('project-input')} variant="outlined">
                                                <OutlinedInput
                                                    type='number'
                                                    id="outlined-adornment-salary"
                                                    endAdornment={<InputAdornment position="end">VND</InputAdornment>}
                                                    aria-describedby="outlined-salary-helper-text"
                                                    inputProps={{
                                                    'aria-label': 'salary',
                                                    }}
                                                />
                                            </FormControl>
                                        </Grid2>
                                        <Grid2 lg={6}>
                                            <label className={cx('project-input-label')} htmlFor='title-input'>Deliver Days</label>
                                            <FormControl className={cx('project-input')} variant="outlined">
                                                <OutlinedInput
                                                    type='number'
                                                    id="outlined-adornment-deliver-days"
                                                    endAdornment={<InputAdornment position="end">day(s)</InputAdornment>}
                                                    aria-describedby="outlined-deliver-days-helper-text"
                                                    inputProps={{
                                                    'aria-label': 'deliver-days',
                                                    }}
                                                />
                                            </FormControl>
                                        </Grid2>
                                    </Grid2>
                                </li>
                                <li className={cx('project-input-item')}>
                                    <Grid2 container justifyContent="space-between">
                                        <Grid2 lg={4}>
                                            <label className={cx('project-input-label')} htmlFor='title-input'>Due Date</label>
                                            <FormControl className={cx('project-input')} variant="outlined">
                                                <OutlinedInput
                                                    type='date'
                                                    id="outlined-adornment-weight"
                                                    aria-describedby="outlined-weight-helper-text"
                                                    inputProps={{
                                                    'aria-label': 'weight',
                                                    }}
                                                />
                                            </FormControl>
                                        </Grid2>
                                        <Grid2 lg={7.5}>
                                            <label className={cx('project-input-label')} htmlFor='title-input'>Category</label>
                                            <div className={cx('project-select')}>
                                                <SimpleDropDown optionList={demoData.categories}/>
                                            </div>
                                        </Grid2>
                                    </Grid2>
                                </li>
                                
                            </ul>
                        </Grid2>
                        <Grid2 container className={cx('project-skill-grid')}>
                            <div className={cx('project-skill-input')}>
                                <div className={cx('skill-head')}>
                                    <h2 className={cx('skill-heading')} htmlFor='title-input'>Skill Require</h2>
                                    <IconButton aria-label="add">
                                        <AddCircleIcon sx={{height: 26, width: 26}} color='primary'/>
                                    </IconButton>

                                </div>
                                <ul className={cx('skill-input-input-list')}>
                                    <li className={cx('skill-input-item')}>
                                        <Grid2 container justifyContent='space-between'>
                                            <Grid2 lg={8}>
                                                <BasicSelect label="Select Skill" options={demoData.skills}/>
                                            </Grid2>
                                            <Grid2 lg={2}>
                                                <TextField placeholder='Level' type='number' color='primary'/>
                                            </Grid2>
                                        </Grid2>
                                    </li>
                                    <li className={cx('skill-input-item')}>
                                        <Grid2 container justifyContent='space-between'>
                                            <Grid2 lg={8}>
                                                <BasicSelect label="Select Skill" options={demoData.skills}/>
                                            </Grid2>
                                            <Grid2 lg={2}>
                                                <TextField placeholder='Level' type='number' color='primary'/>
                                            </Grid2>
                                        </Grid2>
                                    </li>
                                    <li className={cx('skill-input-item')}>
                                        <Grid2 container justifyContent='space-between'>
                                            <Grid2 lg={8}>
                                                <BasicSelect label="Select Skill" options={demoData.skills}/>
                                            </Grid2>
                                            <Grid2 lg={2}>
                                                <TextField placeholder='Level' type='number' color='primary'/>
                                            </Grid2>
                                        </Grid2>
                                    </li>
                                </ul>
                            </div>
                        </Grid2>
                        
                    </Grid2>
                    <Grid2 lg={6.5} className={cx('project-description-container')}>
                        <div className={cx('description-content')}>
                            <h2 className={cx('description-heading')}>Project Description</h2>
                            <TextEditor setState={setDescription}/>
                        </div>
                    </Grid2>
                </Grid2>
            </div>
        </div>
    );
}

export default ProjectDetail;