import React from 'react';
import {
  createFilterOptions,
  Autocomplete as MUIAutocomplete,
} from '@mui/material';

import { CustomInput } from './styles';

const filter = createFilterOptions();

const AutoComplete = (props) => {
  const { placeholder, field, name, onChange, options, optionKey } = props;
  const { value } = field;

  const getLabel = (value) =>
    typeof value === 'string' ? value : value[optionKey];

  return (
    <MUIAutocomplete
      {...field}
      value={value}
      id={name}
      onChange={(_event, value) => {
        onChange(value);
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        const { inputValue } = params;
        // Suggest the creation of a new value
        const isExisting = options.some(
          (option) => inputValue === option[optionKey]
        );
        if (inputValue !== '' && !isExisting) {
          filtered.push({
            [optionKey]: `${inputValue} (Agregar Nuevo)`,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      options={options}
      getOptionLabel={getLabel}
      renderOption={(props, option) => (
        <li {...props} key={option[optionKey]}>
          {option[optionKey]}
        </li>
      )}
      freeSolo
      sx={{ width: '100%' }}
      renderInput={(params) => (
        <CustomInput {...params} placeholder={placeholder} />
      )}
    />
  );
};

export default AutoComplete;
