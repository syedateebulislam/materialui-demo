import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import jenkinsrawdata from "./jenkinsrawdata.json"; 

const columns = [
  { field: 'id', headerName: 'ID', width: 100,visible:false},
  {
    field: 'Status',
    headerName: 'Status',
    width: 120,
  },
  {
    field: 'Entity',
    headerName: 'Entity',
    width: 120,
  },
  {
    field: 'User',
    headerName: 'User',
    width: 150,
  },
  {
    field: 'Build',
    headerName: 'Build',
    type: 'number',
    width: 120,
  },
  {
    field: 'Jar',
    headerName: 'Jar',
    width: 150,
  },
  {
    field: 'url',
    headerName: 'Url',
    width: 450,
  },
];

const datarows = jenkinsrawdata;

export default function myjenkinsdata() {
  return (
    <div style={{ height: 350, width: '100%' }}>
      <DataGrid
        rows={datarows}
        columns={columns}
        pageSize={4}
      />
    </div>
  );
}