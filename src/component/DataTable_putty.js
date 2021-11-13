import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';


const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'Env',
    headerName: 'Environment',
    width: 180
  },
  {
    field: 'User',
    headerName: 'User',
    width: 150
  },
  {
    field: 'Command',
    headerName: 'Command',
    width: 750
  },
];

const rows = [
  { "id": 1, "Env": "Snow", "User": "Jon", "Command": "cd ../../../../../../../..sdgkavdckabdljcajbabjavjab" },
  { "id": 2, "Env": "abc", "User": "asw", "Command": "cd .." },
  { "id": 3, "Env": "xyz", "User": "qwe", "Command": "cd .." }
];

export default function DataTable_putty() {
  return (
    <div style={{ height: 350, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={4}
      />
    </div>
  );
}
