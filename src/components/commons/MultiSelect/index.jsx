import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function MultipleSelect({ initialProjects = [], onChange }) {
  const [projects, setProjects] = React.useState(initialProjects);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    console.log({ value });

    const mappedProjects = projects.map((project) => {
      if (project.id === value[value.length - 1]) {
        project.checked = !project.checked;
        return project;
      }
      return project;
    });

    setProjects(mappedProjects);
    onChange(mappedProjects);
  };

  const renderValue = (selected) => {
    const projectesChecked = selected
      ?.filter((project) => project.checked)
      .map((project) => project.titulo);

    return projectesChecked.join(', ');
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={projects}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={renderValue}
          MenuProps={MenuProps}
        >
          {projects?.map(({ id, titulo, checked }) => (
            <MenuItem key={id} value={id}>
              <Checkbox checked={checked} />
              <ListItemText primary={titulo} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
