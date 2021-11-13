import './App.css';
import React from 'react';
import MenuAppBar from './component/menuappbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CollapsibleTableSonar from './component/CollapsibleTableSonar';
import DataTable_jenkins_real from './component/myjenkinsdata';
import DataTable_putty from './component/DataTable_putty';


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
            <Paper style={{ height: 380, width: 1220, marginLeft: 5 }}>
              <h4>Jenkins</h4>
              <DataTable_jenkins_real />
            </Paper>
          </Grid>
{/*
              <Grid item>
                <Paper style={{ height: 380, width: 1220 }}>
                  <h4>Putty</h4>
                  <DataTable_putty />
                </Paper>
              </Grid>

              <Grid item>
                <Paper style={{ height: 380, width: 600 }}>
                  <h4>Teams</h4>
                  <DataTable_teams />
                </Paper>
              </Grid>

            </Grid>

          
            <Grid container justify="center">
*/}
            <Grid item xs={12}>
              <Paper style={{ height: 250, width: '100%' }}>
                <h4>SonarQube Status</h4>
                
                <CollapsibleTableSonar />
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