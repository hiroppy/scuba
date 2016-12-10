import React from 'react';
import Container, {
  Table, TableHeader, TableRow, TableBody, TableRowColumn, TableHeaderColumn
} from '../../../../src';

const generateTableTemplate = (propsList) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderColumn>key</TableHeaderColumn>
          <TableHeaderColumn>type</TableHeaderColumn>
          <TableHeaderColumn>default</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody>
        {
          propsList.map((item, i) => (
            <TableRow key={i}>
              <TableRowColumn>{item.name}</TableRowColumn>
              <TableRowColumn>{item.type}</TableRowColumn>
              <TableRowColumn>{item.default}</TableRowColumn>
            </TableRow>
          ))
        }
      </TableBody>
    </Table>
  );
};

export default generateTableTemplate;
