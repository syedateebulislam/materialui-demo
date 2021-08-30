import React from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const PuttyGridData = () => {
   const rowData = [
       {Environment: "env1", User: "user1", Command: "cd.."},
       {Environment: "env6", User: "user3", Command: "mkdir abc"},
       {Environment: "env9", User: "user5", Command: "sh restart.sh"},
       {Environment: "env2", User: "user1", Command: "ls -l"},
       {Environment: "env1", User: "user4", Command: "cd.."},
       {Environment: "env6", User: "user6", Command: "cp abc cde"},
       {Environment: "env8", User: "user1", Command: "cd.."}
   ];

   return (
       <div className="ag-theme-alpine" style={{height: 300, width: 300}}>
           <AgGridReact
               rowData={rowData}>
               <AgGridColumn field="Environment" sortable={ true } filter={ true }></AgGridColumn>
               <AgGridColumn field="User" sortable={ true } filter={ true }></AgGridColumn>
               <AgGridColumn field="Command" sortable={ true } filter={ true }></AgGridColumn>
           </AgGridReact>
       </div>
   );
};

export default PuttyGridData;