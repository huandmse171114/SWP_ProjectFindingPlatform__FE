import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import BasicSelect from "../../../../components/Layout/component/BasicSelect";
import { TextField } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";


function DeliverableItem({ options, cx, value, index, handleDeliverableValueChange }) {
    const typeId = value ? value.id : '';
    var [value, setValue] = useState(value ? value.value : '');
    const [type, setType] = useState(typeId);

    function handlerLink(e) {
        setValue(e.target.value);
    }

    function handlerFile(e)  {
        setValue(e.target.files[0]);
    }

    useEffect(() => {
        handleDeliverableValueChange(index, type, value);
    }, [type, value])

    return (
        <li className={cx('skill-input-item')}>
            <Grid2 container justifyContent='space-between'>
                <Grid2 lg={8}>
                    {type !== undefined && (type !== "document" && type !== "file") &&
                        <TextField 
                            placeholder='Enter deliverable link' 
                            color='primary'
                            value={value}
                            fullWidth
                            onChange={handlerLink}
                        />
                    }
                    {(type === "document" || type === "file") &&
                        <TextField 
                            type="file"
                            placeholder='Upload file here' 
                            color='primary'
                            fullWidth
                            onChange={handlerFile}
                        />
                    }
                    {type === undefined &&
                        <div>Please choose deliverable type...</div>
                    }
                </Grid2>
                <Grid2 lg={2.5}>
                    <BasicSelect setParentValue={setType} defaultValue={type} label="Select Type" options={options}/>
                </Grid2>
            </Grid2>
        </li>
    );
}

export default DeliverableItem;