import React from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const TeamsGridData = () => {
   const rowData = [
       {Username: "Syed Islam", Status: "Available"},
       {Username: "Deepa Rana", Status: "In Call"},
       {Username: "Gaurav Mittal", Status: "Presenting"}
   ];

   return (
       <div className="ag-theme-alpine" style={{height: 300, width: 300}}>
           <AgGridReact
               rowData={rowData}>
               <AgGridColumn field="Username" sortable={ true } filter={ true }></AgGridColumn>
               <AgGridColumn field="Status" sortable={ true } filter={ true }></AgGridColumn>
           </AgGridReact>
       </div>
   );
};

export default TeamsGridData;