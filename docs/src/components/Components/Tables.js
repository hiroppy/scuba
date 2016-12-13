import React from 'react';
import styles from './style';
import Container, {
  Table, TableHeader, TableRow, TableBody, TableRowColumn, TableHeaderColumn
} from '../../../../src';
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
    <p>A simple table.</p>
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

    {generateCodeTemplate(sampleCode)}
    <h3>Properties</h3>
    <h4>Table</h4>
    {generateTableTemplate([
      {
        name   : 'className',
        type   : 'string',
        default: ''
      },
      {
        name   : 'style',
        type   : 'Object',
        default: ''
      },
      {
        name   : 'children',
        type   : 'React.Element<*>',
        default: ''
      }
    ])}
    <h4>TableHeader</h4>
    {generateTableTemplate([
      {
        name   : 'className',
        type   : 'string',
        default: ''
      },
      {
        name   : 'style',
        type   : 'Object',
        default: ''
      },
      {
        name   : 'children',
        type   : 'React.Element<*>',
        default: ''
      }
    ])}
    <h4>TableHeaderColumn</h4>
    {generateTableTemplate([
      {
        name   : 'className',
        type   : 'string',
        default: ''
      },
      {
        name   : 'style',
        type   : 'Object',
        default: ''
      },
      {
        name   : 'children',
        type   : 'React.Element<*>',
        default: ''
      }
    ])}
    <h4>TableBody</h4>
    {generateTableTemplate([
      {
        name   : 'className',
        type   : 'string',
        default: ''
      },
      {
        name   : 'style',
        type   : 'Object',
        default: ''
      },
      {
        name   : 'children',
        type   : 'React.Element<*>',
        default: ''
      }
    ])}
    <h4>TableRow</h4>
    {generateTableTemplate([
      {
        name   : 'className',
        type   : 'string',
        default: ''
      },
      {
        name   : 'style',
        type   : 'Object',
        default: ''
      },
      {
        name   : 'children',
        type   : 'React.Element<*>',
        default: ''
      },
      {
        name   : 'align',
        type   : 'left | center | right',
        default: 'left'
      },
      {
        name   : 'borderBottom',
        type   : 'boolean',
        default: 'false'
      }
    ])}
    <h4>TableRowColumn</h4>
    {generateTableTemplate([
      {
        name   : 'className',
        type   : 'string',
        default: ''
      },
      {
        name   : 'style',
        type   : 'Object',
        default: ''
      },
      {
        name   : 'children',
        type   : 'React.Element<*>',
        default: ''
      }
    ])}
    <h4>TableFooter</h4>
    {generateTableTemplate([
      {
        name   : 'className',
        type   : 'string',
        default: ''
      },
      {
        name   : 'style',
        type   : 'Object',
        default: ''
      },
      {
        name   : 'children',
        type   : 'React.Element<*>',
        default: ''
      }
    ])}
  </div>
);

export default Tables;
