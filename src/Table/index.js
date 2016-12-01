import React from 'react';
import classnames from 'classnames';
import styles from './style';

const TableHeader = (props) => (
  <thead
    {...props}
    className={classnames('scuba-tableheader', props.className)}
  >
    {props.children}
  </thead>
);

const TableHeaderColumn = (props) => (
  <th
    {...props}
    style={Object.assign({}, styles.th, props.style)}
  >
    {props.children}
  </th>
);

const TableFooter = (props) => (
  <tfoot
    {...props}
    className={classnames('scuba-tablefooter', props.className)}
  >
    {props.children}
  </tfoot>
);

const TableBody = (props) => (
  <tbody
    {...props}
  >
    {props.children}
  </tbody>
);

const createAlignStyle = (align) => {
  if (align === 'left') return {textAlign: 'left'};
  if (align === 'center') return {textAlign: 'center'};
  if (align === 'right') return {textAlign: 'right'};
  return {textAlign: 'left'};
};

type TableRowType = {
  align: 'left' | 'center' | 'right' | undefined;
  borderBottom: boolean;
};

const TableRow = (props) => (
  <tr
    {...props}
    style={Object.assign({}, createAlignStyle(props.align), props.style)}
    className={classnames((props.borderBottom ? 'scuba-tablerow' : ''), props.className)}
  >
    {props.children}
  </tr>
);

const TableRowColumn = (props) => (
  <td
    {...props}
    style={Object.assign({}, styles.td, props.style)}
  >
    {props.children}
  </td>
);

const Table = (props) => (
  <table
    {...props}
    style={Object.assign({}, styles.table, props.style)}
  >
    {props.children}
  </table>
);

export {
  Table,
  TableRow,
  TableBody,
  TableHeader,
  TableFooter,
  TableRowColumn,
  TableHeaderColumn
};
