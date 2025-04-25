import React, { useState, useEffect } from 'react';

import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/material';

const CheckboxTwo = ({ selectedItems, setSelectedItems }) => {
  const [tasks, setTasks] = useState([
    'Complete online Javascript course',
    'Jog around the park 3x',
    '10 minutes meditation',
    'Read for 1 hour',
    'Pick up groceries',
    'Complete Todo App on Frontend Mentor',
  ]);

  const handleToggle = (task) => {
    setSelectedItems((prev) =>
      prev.includes(task)
        ? prev.filter((item) => item !== task)
        : [...prev, task]
    );
  };

  const handleDelete = (task) => {
    setTasks((prev) => prev.filter((t) => t !== task));
    setSelectedItems((prev) => prev.filter((item) => item !== task));
  };

  const itemsLeft = tasks.filter((task) => !selectedItems.includes(task)).length;

  const handleClearCompleted = () => {
    setSelectedItems([]);
  };

  return (
    <FormControl
      sx={{
        backgroundColor: '#2c2c2c',
        color: '#fff',
        padding: '4px',
        borderRadius: '8px',
        width: {
          xs: '90%',
          sm: '90%',
          md: '400px',
        },
        marginBottom: '33px',
        mx: 'auto',
      }}
    >
      <FormGroup>
        {tasks.map((task) => (
          <Box
            key={task}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedItems.includes(task)}
                  onChange={() => handleToggle(task)}
                  sx={{
                    color: '#fff',
                    '&.Mui-checked': { color: '#90caf9' },
                  }}
                />
              }
              label={task}
              sx={{
                color: '#fff',
                textDecoration: selectedItems.includes(task) ? 'line-through' : 'none',
                opacity: selectedItems.includes(task) ? 0.5 : 1,
                flexGrow: 1,
              }}
            />
            <IconButton onClick={() => handleDelete(task)} sx={{ color: '#fff' }}>
              <CloseIcon />
            </IconButton>
          </Box>
        ))}
      </FormGroup>

      <Box sx={{ marginTop: '8px', color: '#fff', display: 'flex', justifyContent: 'space-between' }}>
        <p>{itemsLeft} items left</p>

        <p onClick={handleClearCompleted} style={{ cursor: 'pointer' }}>
            Clear Completed
                
        </p>
      </Box>
    </FormControl>
  );
};

export default CheckboxTwo;
