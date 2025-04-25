import React, { useState } from 'react'

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';


const RadioOne = () => {
  const [value, setValue] = useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <FormControl
        sx={{
            backgroundColor: '#2c2c2c',
            color: '#fff',
            padding: '4px',
            borderRadius: '8px',
            width: {
              xs: '90%',     // Mobile
              sm: '90%',     // Tablet
              md: '400px',   // Desktop
            },
            marginBottom: '33px',
            mx: 'auto',       // Center it horizontally
        }}
      >
        {/* <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel> */}

        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value="Create a new todo"
            control={<Radio sx={{ color: '#fff', '&.Mui-checked': { color: '#90caf9' } }} />}
            label="Create a new todo"
            sx={{ color: '#fff' }}
          />
        </RadioGroup>
      </FormControl>
    </>
  );
};

export default RadioOne;
