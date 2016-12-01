import React from 'react';
import {storiesOf} from '@kadira/storybook';
import Container, {
  Table, TableBody, TableRow, TableRowColumn, TableHeader, TableHeaderColumn, TableFooter
} from '../src';

storiesOf('Table', module).add('list', () => (
  <div
    style={{
      padding: 30,
      width: 400
    }}
  >
    <Container theme="sea" subColor="dark">
      <Table>
        <TableHeader>
          <TableRow align="left">
            <TableHeaderColumn>
              header1
            </TableHeaderColumn>
            <TableHeaderColumn>
              header2
            </TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableFooter>
          <TableRow>
            <TableHeaderColumn>
              footer1
            </TableHeaderColumn>
            <TableHeaderColumn>
              header2
            </TableHeaderColumn>
          </TableRow>
        </TableFooter>
        <TableBody>
          <TableRow>
            <TableRowColumn>
              aaaaaaa
            </TableRowColumn>
            <TableRowColumn>
              bbbbbb
            </TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>
              aaaaaaa
            </TableRowColumn>
            <TableRowColumn>
              bbbbbb
            </TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
    </Container>
  </div>
));
