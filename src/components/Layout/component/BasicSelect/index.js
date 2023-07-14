import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({ setParentValue, defaultValue, ...props}) {
  // if (typeof defaultValue === "string") {
  //   props.options.forEach(option => {
  //     if(option.name === defaultValue) {
  //       defaultValue = option.id;
  //     }
  //     console.log(defaultValue)
  //   })
  // }
  console.log(defaultValue)
  console.log(props.option)
  const [value, setValue] = React.useState(defaultValue === 0 ? 0 : "");

  const handleChange = (event) => {
    setValue(event.target.value);
    if (setParentValue) {
      setParentValue(event.target.value);
    }
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth >
        <InputLabel id="demo-simple-select-label">{props.label || "Default" }</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          {...props}
          onChange={handleChange}
        >
          {props.options !== undefined && props.options.map(option => {
            return (
                <MenuItem key={option.name} value={option.id}>{option.name}</MenuItem>
            )
          })}
        </Select>
      </FormControl>
    </Box>
  );
}