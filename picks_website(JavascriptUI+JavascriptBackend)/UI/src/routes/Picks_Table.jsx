import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, score, wrong, percentage) {
  return { name, score, wrong, percentage };
}

const rows = [
  createData('Kerry', 77, 43, 0),
  createData('Kodey', 77, 43, 0),
  createData('Emily', 75, 45, 0),
  createData('Josh', 75, 45, 0),
  createData('Caitlin', 72, 48, 0),
  createData('Haylea', 72, 48, 0),
  createData('Katrina', 70, 50, 0),
  createData('John', 67, 53, 0),
];

function Picks_Table() {
  return (
    <TableContainer
      component={Paper}
      sx={{ width: '90%', margin: 'auto', border: '1px solid black' }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Player</TableCell>
            <TableCell align="right">Score</TableCell>
            <TableCell align="right">Wrong</TableCell>
            <TableCell align="right">Percentage</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.score}</TableCell>
              <TableCell align="right">{row.wrong}</TableCell>
              <TableCell align="right">{row.percentage}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Picks_Table;
