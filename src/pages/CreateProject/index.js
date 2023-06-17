import { Container, Divider, FormControl, Grid, InputAdornment, InputLabel, OutlinedInput, Paper } from '@mui/material';
import styles from './CreateProject.module.scss'
import classNames from 'classnames/bind';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

const cx = classNames.bind(styles);

function CreateProject() {
    return ( 
        <div className={cx('wrapper')}>
            <Container className={cx('create-container')}>
                <Paper elevation={2} className={cx('create-outline')}>
                    <h1 className={cx('create-title')}>Create Project</h1>
                    <Divider/>
                    <Grid2 rowGap={8} container direction='column' className={cx('create-grid')}>
                        <Grid2 container direction='column' className={cx('create-section')}>
                            <h2 className={cx('section-heading')} >Basic Information</h2>
                            <ul className={cx('section-list', 'basic-list')}>
                                <li className={cx('section-item', 'basic-item')}>
                                    <p className={cx('item-label')}>Title</p>
                                </li>
                                <li className={cx('section-item', 'basic-item')}>
                                    <p className={cx('item-label')}>Description</p>
                                </li>
                                <li className={cx('section-item', 'basic-item')}>
                                    <Grid2 container>
                                        <Grid2>
                                            <p className={cx('item-label')}>Skill set</p>
                                        </Grid2>
                                        <Grid2>
                                            <p className={cx('item-label')}>Category</p>
                                        </Grid2>
                                    </Grid2>
                                </li>
                                <li className={cx('section-item', 'basic-item')}>
                                <Grid2 justifyContent='space-between' container>
                                        <Grid2 lg={2}>
                                            <p className={cx('item-label')}>Status</p>
                                        </Grid2>
                                        <Grid2 lg={2.5}>
                                            {/* <p className={cx('item-label')}>Wage</p> */}
                                            <FormControl fullWidth sx={{ m: 1 }}>
                                                <InputLabel htmlFor="outlined-adornment-amount">Wage</InputLabel>
                                                <OutlinedInput
                                                    id="outlined-adornment-amount"
                                                    endAdornment={<InputAdornment position="start">$</InputAdornment>}
                                                    label="Wage"
                                                    placeholder='Enter project wage'
                                                    type='number'
                                                />
                                            </FormControl>
                                        </Grid2>
                                        <Grid2 lg={2}>
                                            <FormControl fullWidth sx={{ m: 1 }}>
                                                <InputLabel htmlFor="outlined-adornment-amount">Deliver Days</InputLabel>
                                                <OutlinedInput
                                                    id="outlined-adornment-amount"
                                                    endAdornment={<InputAdornment position="end">day(s)</InputAdornment>}
                                                    label="Wage"
                                                    placeholder='Enter deliver day(s)'
                                                    type='number'
                                                />
                                            </FormControl>
                                        </Grid2>
                                        <Grid2 lg={3}>
                                            <FormControl fullWidth sx={{ m: 1 }}>
                                                <InputLabel htmlFor="outlined-adornment-amount">Due Date</InputLabel>
                                                <OutlinedInput
                                                    id="outlined-adornment-amount"
                                                    startAdornment={<InputAdornment position="end"></InputAdornment>}
                                                    label="Due Date"
                                                    type='date'
                                                />
                                            </FormControl>
                                        </Grid2>
                                    </Grid2>
                                </li>
                            </ul>
                        </Grid2>
                        <Grid2 container direction='column' className={cx('create-section')}>
                            <h2 className={cx('section-heading')} >Deliverable</h2>
                            <ul className={cx('section-list', 'deliverable-list')}>
                                <li className={cx('section-item', 'deliverable-item')}>Deliverable Item 1</li>
                                <li className={cx('section-item', 'deliverable-item')}>Deliverable Item 2</li>
                                <li className={cx('section-item', 'deliverable-item')}>Deliverable Item 3</li>
                            </ul>
                        </Grid2>
                    </Grid2>
                </Paper>
            </Container>
        </div>
     );
}

export default CreateProject;