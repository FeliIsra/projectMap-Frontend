import React from 'react';
import { Box, Divider, IconButton } from '@mui/material';
import { Check, Close } from '@mui/icons-material';
import { Field, Form, Formik } from 'formik';
import Input from '../Input';
import { useState } from 'react';
import { validateField } from 'helpers/validateField';

const Checkpoints = ({ checkpoints, onSubmit, onClickCancel }) => {
  const [selectedId, setSelectedId] = useState(null);
  return (
    <Formik
      initialValues={{ checkpoints }}
      onSubmit={(values, action) => {
        setSelectedId(null);
        onSubmit(values);
      }}
    >
      <Form>
        <Box display="flex" flexDirection="row" columnGap={2}>
          <Box display="flex" flexDirection="column" gap={2}>
            <Box display="flex" flex={1} />
            <span>Objetivo</span>
            <span>Actual</span>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            flex={1}
            columnGap={2}
            overflow="scroll"
            sx={{
              '&::-webkit-scrollbar': {
                display: 'none',
              },
              '&': {
                '-ms-overflow-style': 'none' /* IE and Edge */,
                'scrollbar-width': 'none' /* Firefox */,
              },
            }}
          >
            {checkpoints?.map((checkpoint, index) => (
              <Box
                display="flex"
                flexDirection="column"
                flex={1}
                gap={2}
                alignItems="center"
              >
                <Box display="flex">
                  <span>{checkpoint.month}</span>
                </Box>
                <Box display="flex">
                  <span>
                    {checkpoint.target?.toLocaleString(undefined, {
                      maximumFractionDigits: 2,
                      minimumFractionDigits: 0,
                    })}
                  </span>
                </Box>
                <Box display="flex">
                  {selectedId ? (
                    <Field
                      name={`checkpoints[${index}].actual`}
                      placeholder="Actual"
                      component={Input}
                      inputProps={{
                        style: { textAlign: 'center' },
                      }}
                      hiddenLabel
                      variant="standard"
                      size="small"
                      type="number"
                      validate={validateField}
                    />
                  ) : (
                    <span onClick={() => setSelectedId(checkpoint._id)}>
                      {checkpoint.actual}
                    </span>
                  )}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
        <Box padding="10px 0">
          <Divider />
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          gap={2}
          justifyContent="flex-end"
        >
          <IconButton type="button" onClick={() => onClickCancel()}>
            <Close color="secondary" />
          </IconButton>
          <IconButton type="submit">
            <Check color="primary" />
          </IconButton>
        </Box>
      </Form>
    </Formik>
  );
};

export default Checkpoints;
