import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import { BootstrapInput, SelectContainer } from './styles';

const SelectInput = (props) => {
  const { field, options, placeholder } = props;

  return (
    <SelectContainer>
      <Select
        {...field}
        displayEmpty
        input={<BootstrapInput />}
        style={{ flex: 1 }}
      >
        <MenuItem disabled value="">
          <em>{placeholder}</em>
        </MenuItem>
        {options.map((option) => (
          <MenuItem value={option}>{option}</MenuItem>
        ))}
      </Select>
    </SelectContainer>
  );
};

export default SelectInput;
