import React from 'react';
import styles from './style';
import Container, {
  Table, TableHeader, TableRow, TableBody, TableRowColumn, TableHeaderColumn
} from '../../../../lib';
import generateCodeTemplate from './generateCodeTemplate';
import generateTableTemplate from './generateTableTemplate';

const sampleCode = `import {
    Table, TableHeader, TableRow, TableBody, TableRowColumn, TableHeaderColumn
} from 'scuba';

<Table>
    <TableHeader>
        <TableRow align="center">
            <TableHeaderColumn>Fruits</TableHeaderColumn>
            <TableHeaderColumn>Like</TableHeaderColumn>
        </TableRow>
    </TableHeader>
    <TableBody>
        <TableRow align="center">
            <TableRowColumn>apple</TableRowColumn>
            <TableRowColumn>yes</TableRowColumn>
        </TableRow>
        <TableRow align="center">
            <TableRowColumn>orange</TableRowColumn>
            <TableRowColumn>yes</TableRowColumn>
        </TableRow>
    </TableBody>
</Table>
`;

const Tables = () => (
  <div>
    <h2 id="tables">Tables</h2>
    <p>
      We use
      <code>{'<Table>'}</code>
      ,
      <code>{'<TableHeader>'}</code>
      ,
      <code>{'<TableHeaderColumn>'}</code>
      ,
      <code>{'<TableFooter>'}</code>
      ,
      <code>{'<TableBody>'}</code>
      ,
      <code>{'<TableRow>'}</code>
      ,
      <code>{'<TableRowColumn>'}</code>
      ,

    </p>

    <Table>
      <TableHeader>
        <TableRow align="center">
          <TableHeaderColumn>
            Fruits
          </TableHeaderColumn>
          <TableHeaderColumn>
            Like
          </TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow align="center">
          <TableRowColumn>apple</TableRowColumn>
          <TableRowColumn>yes</TableRowColumn>
        </TableRow>
        <TableRow align="center">
          <TableRowColumn>orange</TableRowColumn>
          <TableRowColumn>yes</TableRowColumn>
        </TableRow>
      </TableBody>
    </Table>

    <p>Only TableRow has custom props.</p>
    {generateTableTemplate([
      {
        name: 'align',
        type: 'left | center | right',
        default: 'left'
      },
      {
        name: 'borderBottom',
        type: 'boolean',
        default: 'false'
      }
    ])}
    {generateCodeTemplate(sampleCode)}
  </div>
);

export default Tables;
