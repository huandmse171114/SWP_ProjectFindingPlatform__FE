import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import BasicSelect from "../../../../components/Layout/component/BasicSelect";
import { TextField } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";


function SkillItem({ options, cx, index, handleSkillValueChange }) {

    const [level, setLevel] = useState("");
    const [skillId, setSkillId] = useState("");

    function handler(e) {
        if (Number(e.target.value) > 6 || Number(e.target.value) < 1) {
            setLevel(1);
        }else{
            setLevel(parseInt(e.target.value));
        }
    }

    useEffect(() => {
        console.log(`${index} - ${skillId} - ${level}`);
        handleSkillValueChange(index, skillId, level);
    }, [skillId, level])

    return (
        <li className={cx('skill-input-item')}>
            <Grid2 container justifyContent='space-between'>
                <Grid2 lg={8}>
                    <BasicSelect setParentValue={setSkillId} label="Select Skill" options={options}/>
                </Grid2>
                <Grid2 lg={2.5}>
                    <TextField 
                        placeholder='Level' 
                        type='number'  
                        color='primary'
                        onChange={handler}
                        InputProps={{ inputProps: { min: "1", max: "10", step: "1" } }}
                        value={level}
                        fullWidth
                    />
                </Grid2>
            </Grid2>
        </li>
    );
}

export default SkillItem;