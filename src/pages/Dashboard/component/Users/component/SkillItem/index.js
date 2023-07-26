import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import BasicSelect from "../../../../../../components/Layout/component/BasicSelect";
import { useState } from "react";
import { useEffect } from "react";


function SkillItem({ options, cx, index, value, handleSkillStatusChange }) {
    const [statusId, setStatusId] = useState(value.status.id);

    useEffect(() => {
        console.log(`${index} - ${value.name} - ${value.level} - ${statusId}`);
        handleSkillStatusChange(index, value.id, value.level, statusId);
    }, [statusId])

    return (
        <li className={cx('modal-skill-item')}>
            <Grid2 container justifyContent='space-between'>
                <Grid2 container className={cx('skill-item-text')} justifyContent="space-between" lg={6}>
                    <p>{value.name}</p>
                    <p>Level: {value.level}</p>
                </Grid2>
                <Grid2 lg={2.5}>
                    <BasicSelect setParentValue={setStatusId}  options={options} defaultValue={statusId} label="Select Skill Status" />
                </Grid2>
            </Grid2>
        </li>
    );
}

export default SkillItem;