import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import BasicSelect from "../../../../components/Layout/component/BasicSelect";
import { TextField } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import styles from './SkillItem.module.scss'
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function SkillItem({ options, cx, index, value, handleSkillValueChange, skillStatus }) {
    const skillValueId = value ? value.id : '';
    const [level, setLevel] = useState(value ? value.level : '');
    const [skillId, setSkillId] = useState(skillValueId);
    const color = value && value.status.name === "VALIDATING" ? 'gold' : 'green';
    const isUpdatable = !value || value && value.status.name === "VALIDATING";
    if (value && value.status.name === "REJECTED") color = 'red';

    function handler(e) {
        if (Number(e.target.value) > 6 || Number(e.target.value) < 1) {
            setLevel(1);
        }else{
            setLevel(parseInt(e.target.value));
        }
    }

    useEffect(() => {
        console.log(`${index} - ${skillId} - ${level}`);
        handleSkillValueChange(index, skillId, level, value && value.status.id || 0 );
    }, [skillId, level])

    return (
        <li className={cx('skill-input-item')}>
            <Grid2 container justifyContent='space-between'>
                <Grid2 lg={6}>
                    <BasicSelect disabled={!isUpdatable} setParentValue={setSkillId} defaultValue={skillId} label="Select Skill" options={options}/>
                </Grid2>
                <Grid2 lg={2}>
                    <TextField 
                        placeholder='Level' 
                        type='number'  
                        color='primary'
                        onChange={handler}
                        InputProps={{ inputProps: { min: "1", max: "10", step: "1" } }}
                        value={level}
                        fullWidth
                        disabled={!isUpdatable}
                    />
                </Grid2>
                {value &&
                    <Grid2 container alignItems='center' lg={2}>
                        <p style={{fontSize: '12px', color: color, textTransform: 'lowercase', opacity: 0.8, fontWeight: 300}}>{value.status.name}</p>
                    </Grid2>
                }
            </Grid2>
        </li>
    );
}

export default SkillItem;