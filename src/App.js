import './App.css';
import React from 'react';
import MenuAppBar from './component/menuappbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CollapsibleTable from './component/CollapsibleTable';
import DataTable_jenkins from './component/DataTable_jenkins';
import DataTable_putty from './component/DataTable_putty';
import TeamsGridData from './component/TeamsGridData';
import PuttyGridData from './component/PuttyGridData';


function App() {
  return (
    <div className="App">
      <React.Fragment>
      
        <CssBaseline />
        <Container style={{ height: 100, width: '100%' }}>
          <MenuAppBar />
          <Typography component="div" style={{ backgroundColor: '#cfe8fc' }} >

          
          
            <Grid container spacing={1} justify="center">
            
              <Grid item>
                <Paper style={{ height: 380, width: 600, marginLeft: 5 }}>
                  <h4>Jenkins</h4>                  
                  <DataTable_jenkins/>
                </Paper>
              </Grid>

              <Grid item>
                <Paper style={{ height: 380, width: 300 }}>
                  <h4>Putty</h4>
                  <PuttyGridData/>
                </Paper>
              </Grid>

              <Grid item>
                <Paper style={{ height: 380, width: 300 }}>
                  <h4>Teams</h4>
                  <TeamsGridData/>
                </Paper>
              </Grid>

            </Grid>

            <Grid container justify="center">

            <Grid item xs={12}>
              <Paper style={{ height: 250, width: '100%' }}>
                <h4>My Stats</h4>
                
                <CollapsibleTable />
              </Paper>
            </Grid>
          </Grid>

          </Typography>
        </Container>
      </React.Fragment>
    </div>
  );
}

export default App;
