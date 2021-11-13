import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});


function createData(moduleName, totalIssue, blocker, critical, major, minor, date) {
  return {
    moduleName,
    totalIssue,
    blocker,
    critical,
    major,
    minor,
    date,
    history: [
      { moduleName: 'CT', totalIssue: 72, blocker: 22 , critical: 30 , major: 10, minor: 10, date: '23-Oct-21' },
      { moduleName: 'CT', totalIssue: 92, blocker: 32 , critical: 15 , major: 23, minor: 22, date: '03-Oct-21' },
      { moduleName: 'CT', totalIssue: 110, blocker: 42 , critical: 20 , major: 34, minor: 14, date: '18-Sep-21' },
      { moduleName: 'CT', totalIssue: 129, blocker: 51 , critical: 24 , major: 41, minor: 13, date: '07-Sep-21' },
      { moduleName: 'CT', totalIssue: 152, blocker: 60 , critical: 28 , major: 55, minor: 9, date: '11-Aug-21' },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>

      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>

        <TableCell component="th" scope="row">
          {row.moduleName}
        </TableCell>

        <TableCell align="right">{row.totalIssue}</TableCell>
        <TableCell align="right">{row.blocker}</TableCell>
        <TableCell align="right">{row.critical}</TableCell>
        <TableCell align="right">{row.major}</TableCell>
        <TableCell align="right">{row.minor}</TableCell>
        <TableCell align="right">{row.date}</TableCell>

      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>

          <Collapse in={open} timeout="auto" unmountOnExit>

            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Report Creation History
              </Typography>

              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Module Name</TableCell>
                    <TableCell>Total Issues</TableCell>
                    <TableCell align="right">Blocker</TableCell>
                    <TableCell align="right">Critical</TableCell>
                    <TableCell align="right">Major</TableCell>
                    <TableCell align="right">Minor</TableCell>
                    <TableCell align="right">Date</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.moduleName}
                      </TableCell>

                      <TableCell>{historyRow.totalIssue}</TableCell>
                      <TableCell align="right">{historyRow.blocker}</TableCell>
                      <TableCell align="right">{historyRow.critical}</TableCell>
                      <TableCell align="right">{historyRow.major}</TableCell>
                      <TableCell align="right">{historyRow.minor}</TableCell>
                      <TableCell align="right">{historyRow.date}</TableCell>
                      
                      
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    moduleName: PropTypes.string.isRequired,
    totalIssues: PropTypes.number.isRequired,
    blocker: PropTypes.number.isRequired,
    critical: PropTypes.number.isRequired,
    major: PropTypes.number.isRequired,
    minor: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        moduleName: PropTypes.string.isRequired,
        totalIssues: PropTypes.number.isRequired,
        blocker: PropTypes.number.isRequired,
        critical: PropTypes.number.isRequired,
        major: PropTypes.number.isRequired,
        minor: PropTypes.number.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,

  }).isRequired,
};

const rows = [
  createData('CT', 56, 0, 7, 23, 26,'14-Nov-21'),
  createData('PP', 90, 10, 20, 20, 40,'06-Nov-21'),
 ];

export default function CollapsibleTableSonar() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Module Name</TableCell>
            <TableCell align="right">Total Issues</TableCell>
            <TableCell align="right">Blocker</TableCell>
            <TableCell align="right">Critical</TableCell>
            <TableCell align="right">Major</TableCell>
            <TableCell align="right">Minor</TableCell>
            <TableCell align="right">Report Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.moduleName} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
