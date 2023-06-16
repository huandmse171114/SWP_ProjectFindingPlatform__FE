import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect(props) {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
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
                <MenuItem key={option.name} value={option.name}>{option.name}</MenuItem>
            )
          })}
        </Select>
      </FormControl>
    </Box>
  );
}