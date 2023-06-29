import styles from './CreateProject.module.scss'
import classNames from 'classnames/bind';
import { Button, TextField } from '@mui/material';
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
import request from '../../utils/request';
import DeliverableItem from './components/DeliverableItem';
import { storage } from '../../Firebase'; 
import { ref, uploadBytes } from 'firebase/storage';
import LoadingOverlay from '../../components/Layout/component/LoadingOverlay';
const cx = classNames.bind(styles);

function CreateProject() {
    const user = demoData.user;
    const skillAddBtn = useRef();
    const skillList = useRef();

    const deliverableAddBtn = useRef();
    const deliverableList = useRef();

    const titleInput = useRef();
    const logoInput = useRef();
    const dueDateInput = useRef();
    const salaryInput = useRef();
    const deliverDaysInput = useRef();
    const projectCreateBtn = useRef();
    const descriptionInput = useRef();
    const categoriesInput = useRef();
    const [statusValue, setStatusValue] = useState();

    const [isLoading, setIsLoading] = useState(true);
    const [isLoadingSkills, setIsLoadingSKills] = useState(true);
    const [isLoadingCategories, setIsLoadingCategories] = useState(true);
    const [isLoadingDeliverableType, setIsLoadingDeliverableType] = useState(true);
    const [isSubmit, setIsSubmit] = useState(false);

    const [skills, setSkills] = useState();
    const [categories, setCategories] = useState()
    const [deliverableTypes, setDeliverableTypes] = useState();
    
    const [description, setDescription] = useState("");
    
    const [skillItemList, setSkillItemList] = useState([])
    const [deliverableItemList, setDeliverableItemList] = useState([])
    
    const [skillValueList, setSkillValueList] = useState([])
    const [categoryValueList, setCategoryValueList] = useState([])
    const [deliverableValueList, setDeliverableValueList] = useState([])

    function handleSkillAddBtnClick() {
        setSkillItemList(pre => {
            return [...pre, <SkillItem key={pre.length} handleSkillValueChange={handleSkillValueChange} index={pre.length} options={skills} cx={cx} />]
        });
    }

    function handleDeliverableAddBtnClick() {
        setDeliverableItemList(pre => {
            return [...pre, <DeliverableItem key={pre.length} handleDeliverableValueChange={handleDeliverableValueChange} index={pre.length} options={deliverableTypes} cx={cx} />]
        });
    }

    function handleSkillValueChange(index, id, level) {
        console.log('Running handleSkillValueChange');
        setSkillValueList(pre => {
            pre[index] = {id, level}
            console.log(skillValueList);
            return pre;
        })
    }

    function handleDeliverableValueChange(index, id, value) {
        console.log('Running handleDeliverableValueChange');
        setDeliverableValueList(pre => {
            pre[index] = {id, value}
            console.log(deliverableValueList);
            return pre;
        })
    }

    function handleCategoryValueChange(categories) {
        console.log("Running handleCategoryValueChange")
        setCategoryValueList(categories);
        console.log(categoryValueList);
    }

    function handleProjectCreateBtnClick() {
        setIsSubmit(true);
    }

    useEffect(() => {
        if (!isLoading) {
            skillAddBtn.current.addEventListener("click", handleSkillAddBtnClick)
            deliverableAddBtn.current.addEventListener("click", handleDeliverableAddBtnClick)
            projectCreateBtn.current.addEventListener("click", handleProjectCreateBtnClick)
        }
    }, [isLoading])
    
    useEffect(() => {
        if (isSubmit) {
            console.log({
                name: titleInput.current.value,
                publisherId: user.id,
                description: descriptionInput.current.value,
                wage: parseInt(salaryInput.current.value),
                imgURL: logoInput.current.files[0],
                deliverDays: parseInt(deliverDaysInput.current.value),
                dueDate: dueDateInput.current.value,
                skills: skillValueList,
                categories: categoryValueList.map(value => value.id),
                deliverables: deliverableValueList,
                status: statusValue
            })
            setIsSubmit(false);
        }
    }, [isSubmit])


    useEffect(() => {
        // ======================= Get categories data =========================
        if (window.sessionStorage.getItem("categories") === null) {
            request.get("categories/all")
                .then(res => {
                    setCategories(res.data);
                    setIsLoadingCategories(false);
                    window.sessionStorage.setItem("categories", JSON.stringify(res.data));
                    console.log(JSON.parse(window.sessionStorage.getItem("categories")))
                })
        }else {
            setCategories(JSON.parse(window.sessionStorage.getItem("categories")));
            setIsLoadingCategories(false);
        }
        
        // ======================= Get deliverable type data =========================
        if (window.sessionStorage.getItem("deliverableTypes") === null) {
            request.get("deliverable-types/all")
                .then(res => {
                    setDeliverableTypes(res.data);
                    setIsLoadingDeliverableType(false);
                    window.sessionStorage.setItem("deliverableTypes", JSON.stringify(res.data));
                    console.log(JSON.parse(window.sessionStorage.getItem("deliverableTypes")))
                })
        }else {
            setDeliverableTypes(JSON.parse(window.sessionStorage.getItem("deliverableTypes")));
            setIsLoadingDeliverableType(false);
        }

        // ========================= Get skills data ============================
        if (window.sessionStorage.getItem("skills") === null) {
            request.get("skills/all")
                .then(res => {
                    setSkills(res.data);
                    setIsLoadingSKills(false);
                    window.sessionStorage.setItem("skills", JSON.stringify(res.data));
                    console.log(JSON.parse(window.sessionStorage.getItem("skills")))
                })
        }else {
            setSkills(JSON.parse(window.sessionStorage.getItem("skills")));
            setIsLoadingSKills(false);
        }
    }, [])

    useEffect(() => {
        if (!isLoadingCategories && !isLoadingSkills && !isLoadingDeliverableType){
            setTimeout(() => {
                setIsLoading(false);
            }, 400)
        }
    }, [isLoadingCategories, isLoadingDeliverableType, isLoadingSkills])


    return (
        <div className={cx('wrapper')}>
            {isLoading && <LoadingOverlay />}
            <div className={cx('project-container')}>
                <Grid2 container rowGap={6} justifyContent='space-between' className={cx('project-gird')}>
                    <Grid2 lg={5} container direction='column' justifyContent='space-between' className={cx('project-input-list-container')}>
                        <Grid2 container className={cx('project-input-grid')}>
                            <ul className={cx('project-input-list')}>
                                <li className={cx('project-input-item')}>
                                    <label className={cx('project-input-label')} htmlFor='title-input'>Title</label>
                                    <div className={cx('project-input')}>
                                        <TextField inputRef={titleInput} id='title-input' variant='outlined' fullWidth color='primary' placeholder="Enter project's title" />
                                    </div>
                                </li>
                                <li className={cx('project-input-item')}>
                                    <label className={cx('project-input-label')} htmlFor='logo-input'>Logo</label>
                                    <div className={cx('project-input')}>
                                        <TextField type='file' id='logo-input' variant='outlined' fullWidth color='primary' inputRef={logoInput} />
                                    </div>
                                </li>
                                <li className={cx('project-input-item')}>
                                    <Grid2 container justifyContent="space-between">
                                        <Grid2 lg={6}>
                                            <label className={cx('project-input-label')} htmlFor='title-input'>Salary</label>
                                            <FormControl className={cx('project-input')} variant="outlined">
                                                <OutlinedInput
                                                    inputRef={salaryInput}
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
                                                    inputRef={deliverDaysInput}
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
                                                    inputRef={dueDateInput}
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
                                                {!isLoadingCategories && <SimpleDropDown handleChange={handleCategoryValueChange} optionList={categories}/>}
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
                                <BasicSelect label="Status" options={demoData.status} setParentValue={setStatusValue}/>
                            </div>
                            <input type='hidden' ref={descriptionInput} value={description}/>
                            <TextEditor setState={setDescription}/>
                        </div>
                    </Grid2>
                    <Grid2 container lg={12} className={cx('project-skill-grid')}>
                        <div className={cx('project-skill-input')}>
                            <div className={cx('skill-head')}>
                                <h2 className={cx('skill-heading')} htmlFor='title-input'>Deliverable</h2>
                                <IconButton ref={deliverableAddBtn} aria-label="add">
                                    <AddCircleIcon sx={{height: 26, width: 26}} color='primary'/>
                                </IconButton>

                            </div>
                            <ul ref={deliverableList} className={cx('skill-input-input-list')}>
                                {deliverableItemList}
                            </ul>
                        </div>
                    </Grid2>
                </Grid2>
                <Button className={cx('project-create-btn')} variant='contained' ref={projectCreateBtn} color='primary' size='large'>Create</Button>
            </div>
        </div>
    );
}

export default CreateProject;