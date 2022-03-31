import { Box, Button, Paper, Table, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { useState } from 'react';
import CountryDetailTable from './CountryDetailTable';

function Country({ countries, handleDelete }) {

  const [refresh, setRefresh] = useState(Math.random())

  return (
    < Box sx={{ mb: 1 }}>
      {countries.length > 0 && <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>

          <TableHead>
            <TableRow>
              <TableCell sx={{ minWidth: 140 }}>
                <Typography variant='h6'>Continent</Typography>
              </TableCell>
              <TableCell sx={{ minWidth: 210 }}>
                <Typography variant='h6'>Country</Typography>
              </TableCell>
              <TableCell sx={{ minWidth: 150 }}>
                <Typography variant='h6'>Population</Typography>
              </TableCell>
              <TableCell sx={{ minWidth: 160 }} >
                <Typography variant='h6'>Cases</Typography>
              </TableCell>
              <TableCell sx={{ minWidth: 140 }}>
                <Typography variant='h6'>Tests</Typography>
              </TableCell>
              <TableCell sx={{ minWidth: 125 }}>
                <Typography variant='h6'>Deaths</Typography>
              </TableCell>
              <TableCell sx={{ minWidth: 120 }}>
                <Typography variant='h6'>Time</Typography>
              </TableCell>
              <TableCell align='center'>
                <Button variant='contained' onClick={() => setRefresh(Math.random())}>Refresh</Button>
              </TableCell>
            </TableRow>
          </TableHead>

          {countries.map((country) => (
            <CountryDetailTable key={country} country={country} handleDelete={handleDelete} refresh={refresh} />
          ))}

        </Table>
      </TableContainer>
      }
    </ Box>
  )
}

export default Country