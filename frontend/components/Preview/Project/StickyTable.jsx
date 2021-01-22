import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { PropTypes } from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Button from '@material-ui/core/Button';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { style } from '../../../styles/Preview/stickyTable';

const useStyles = makeStyles(style);

const StickyTable = (props) => {
  const { columns, rows, projectTableBg, projectTableColor } = props;
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    background: projectTableBg,
                    color: projectTableColor,
                    borderColor: 'rgb(0,0,0,0.7)',
                    zIndex: column.sticky ? 5 : 4,
                  }}
                  className={column.sticky ? classes.sticky : ''}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  // eslint-disable-next-line react/no-array-index-key
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      if (column.button) {
                        if (value) {
                          return (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              className={column.sticky ? classes.sticky : ''}
                              style={{
                                background: projectTableBg,
                                color: projectTableColor,
                                borderColor: 'rgb(0,0,0,0.2)',
                              }}
                            >
                              <a
                                href={value}
                                target="_blank"
                                rel="noreferrer"
                                style={{ textDecoration: 'none' }}
                              >
                                <Button
                                  className="flip-card-back-button"
                                  size="small"
                                  variant="outlined"
                                  style={{
                                    borderColor: projectTableColor,
                                    color: projectTableColor,
                                    zIndex: 50,
                                  }}
                                >
                                  View
                                </Button>
                              </a>
                            </TableCell>
                          );
                        }
                        return (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            className={column.sticky ? classes.sticky : ''}
                            style={{
                              background: projectTableBg,
                              color: projectTableColor,
                              borderColor: 'rgb(0,0,0,0.2)',
                            }}
                          >
                            -
                          </TableCell>
                        );
                      }
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          className={column.sticky ? classes.sticky : ''}
                          style={{
                            background: projectTableBg,
                            color: projectTableColor,
                            borderColor: 'rgb(0,0,0,0.2)',
                          }}
                        >
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        style={{
          background: projectTableBg,
          color: projectTableColor,
          borderTop: '1px solid rgb(0,0,0,0.2)',
          borderBottom: '1px solid rgb(0,0,0,0.2)',
        }}
      />
    </Paper>
  );
};

StickyTable.propTypes = {
  projectTableBg: PropTypes.string.isRequired,
  projectTableColor: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  rows: PropTypes.array.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  columns: PropTypes.array.isRequired,
};

export { StickyTable };
