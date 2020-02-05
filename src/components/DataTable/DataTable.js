import React from 'react'
import {default as Table, createTheme} from 'react-data-table-component'

createTheme('solarized', {
  text: {
    primary: '#268bd2',
    secondary: '#2aa198',
  },
  background: {
    default: '#002b36',
  },
  context: {
    background: '#cb4b16',
    text: '#FFFFFF',
  },
  divider: {
    default: '#073642',
  },
  action: {
    button: 'rgba(0,0,0,.54)',
    hover: 'rgba(0,0,0,.08)',
    disabled: 'rgba(0,0,0,.12)',
  },
});

const DataTable = (props) => (
  <Table
    className="table"
    title={props.title}
    columns={props.columns}
    data={props.data}
  />
);

export default DataTable
