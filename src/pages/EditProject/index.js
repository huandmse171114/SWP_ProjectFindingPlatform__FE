import styles from './EditProject.module.scss'
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
import SkillItem from './components/SkillItem';
import { useRef } from 'react';
import { useParams } from 'react-router-dom';

const cx = classNames.bind(styles);

function EditProject() {
    const { id } = useParams();
    const projects = JSON.parse(window.sessionStorage.getItem("projects")) || demoData.projects;
    const project = projects.filter(project => project.id + "" === id)[0]

    const skillAddBtn = useRef();
    const skillList = useRef();
    const [title, setTitle] = useState(project.name);
    const [dueDate, setDueDate] = useState(project.dueDate);
    const [salary, setSalary] = useState(project.wage);
    const [deliverDays, setDeliverDays] = useState(project.deliverDays);
    const saveButton = useRef();

    const [description, setDescription] = useState(project.description);
    const [skillValueList, setSkillValueList] = useState([])
    const [skillItemList, setSkillItemList] = useState([<SkillItem key={0} index={0} handleSkillValueChange={handleSkillValueChange} options={demoData.skills} cx={cx} />])


    function handleSkillAddBtnClick() {
        setSkillItemList(pre => {
            return [...pre, <SkillItem key={pre.length} handleSkillValueChange={handleSkillValueChange} index={pre.length} options={demoData.skills} cx={cx} />]
        });
    }

    function handleSkillValueChange(index, skill, level) {
        console.log('Running handleSkillValueChange');
        setSkillValueList(pre => {
            pre[index] = {skill, level}
            console.log(skillValueList);
            return pre;
        })
    }

    useEffect(() => {
        skillAddBtn.current.addEventListener("click", handleSkillAddBtnClick)
    }, [])

    useEffect(() => {
        console.log({
            title: title,
            salary: salary,
            dueDate: dueDate,
            skills: skillValueList,
            deliverDays: deliverDays,
            description: description
        })
    }, [title,salary,dueDate,skillValueList,deliverDays])

    function changeFormat(date) {
        return date.replaceAll("/", "-")
    }


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
                                        <TextField onChange={(e) => setTitle(e.target.value)} value={title} id='title-input' variant='outlined' fullWidth color='primary' placeholder="Enter project's title" />
                                    </div>
                                </li>
                                <li className={cx('project-input-item')}>
                                    <Grid2 container justifyContent="space-between">
                                        <Grid2 lg={6}>
                                            <label className={cx('project-input-label')} htmlFor='title-input'>Salary</label>
                                            <FormControl className={cx('project-input')} variant="outlined">
                                                <OutlinedInput
                                                    onChange={(e) => setSalary(parseInt(e.target.value))}
                                                    value={salary}
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
                                                    onChange={(e) => setDeliverDays(parseInt(e.target.value))}
                                                    value={deliverDays}
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
                                                    onChange={(e) => setDueDate(e.target.value)}
                                                    defaultValue={changeFormat(project.dueDate)}
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
                                    <IconButton ref={skillAddBtn} aria-label="add">
                                        <AddCircleIcon sx={{height: 26, width: 26}} color='primary'/>
                                    </IconButton>

                                </div>
                                <ul ref={skillList} className={cx('skill-input-input-list')}>
                                    {skillItemList}
                                </ul>
                            </div>
                        </Grid2>
                        
                    </Grid2>
                    <Grid2 lg={6.5} className={cx('project-description-container')}>
                        <div className={cx('description-content')}>
                            <div className={cx('description-head')}>
                                <h2 className={cx('description-heading')}>Project Description</h2>
                                <BasicSelect label="Status" options={demoData.status}/>
                            </div>
                            <TextEditor value={description} setState={setDescription}/>
                        </div>
                    </Grid2>
                </Grid2>
                <div ref={saveButton}>Save</div>
            </div>
        </div>
    );
}

export default EditProject;