import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { StyledTableCell, StyledTableRow, TableContainer } from './styles';

const CustomizedTables = ({ items, columns }) => {
  return (
    <TableContainer>
      <Table
        sx={{ minWidth: 700, maxWidth: 1300 }}
        aria-label="customized table"
      >
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <StyledTableCell align="center">{column.label}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <StyledTableRow
              key={item.name}
              style={{ backgroundColor: item?.color || '' }}
            >
              {columns.map(({ value }) => (
                <StyledTableCell align="center">
                  {typeof value === 'string' && item[value]}
                  {typeof value === 'function' && value(item)}
                </StyledTableCell>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomizedTables;
