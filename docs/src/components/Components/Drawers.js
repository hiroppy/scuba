import React from 'react';
import { Drawer, Button, Grid, Cell } from '../../../../src';
import generateCodeTemplate from './generateCodeTemplate';
import generateTableTemplate from './generateTableTemplate';
import styles from './style.css';

const sampleCode1 = `import {Drawer, button} from 'scuba';

class Drawer extends React.Component {
    constructor() {
        super();

        this.state = {opened: false};
        this.toggleDrawer = this.toggleDrawer.bind(this);
    }

    toggleDrawer() {
        this.setState({opened: !this.state.opened});
    }

    render() {
        return (
            <div>
                <Drawer opened={this.state.opened}>
                    <p>section1</p>
                    <p>section2</p>
                    <p>section3</p>
                    <p>section4</p>
                    <p>section5</p>
                </Drawer>
                <Button onClick={this.toggleDrawer}>open!</Button>
            </div>
        );
    }
}`;


const sampleCode2 = `import {Drawer, button} from 'scuba';

class Drawer extends React.Component {
    constructor() {
        super();

        this.state = {opened: false};
        this.toggleDrawer = this.toggleDrawer.bind(this);
    }

    toggleDrawer() {
        this.setState({opened: !this.state.opened});
    }

    render() {
        return (
            <div>
                <Drawer
                    opened={this.state.opened}
                    onChange={this.toggleDrawer}
                    displayedOverlay
                  >
                    <p>section1</p>
                    <p>section2</p>
                    <p>section3</p>
                    <p>section4</p>
                    <p>section5</p>
                </Drawer>
                <Button onClick={this.toggleDrawer}>open!</Button>
            </div>
        );
    }
}`;

class Drawers extends React.Component {
  openDrawer() {
    this.setState({ openedDrawer: !this.state.openedDrawer });
  }

  openDrawerWithOverlay() {
    this.setState({ openedDrawerWithoverlay: !this.state.openedDrawerWithoverlay });
  }

  constructor() {
    super();

    this.state = {
      openedDrawer           : false,
      openedDrawerWithoverlay: false
    };

    this.openDrawer = this.openDrawer.bind(this);
    this.openDrawerWithOverlay = this.openDrawerWithOverlay.bind(this);
  }

  render() {
    return (
      <div>
        <h2>Drawers</h2>
        <p>Drawers provide only the outer frame.</p>
        <h3>Normal Drawers</h3>
        <Drawer opened={this.state.openedDrawer}>
          <p>section1</p>
          <p>section2</p>
          <p>section3</p>
          <p>section4</p>
          <p>section5</p>
        </Drawer>
        <Grid justifyContent="flex-start">
          <Cell
            ratio={1 / 5}
            textAlign="left"
          >
            <Button
              width="100%"
              onClick={this.openDrawer}
            >
              open!
            </Button>
          </Cell>
        </Grid>
        {generateCodeTemplate(sampleCode1)}

        <h3>Drawers with overlay</h3>
        <Drawer
          opened={this.state.openedDrawerWithoverlay}
          onChange={this.openDrawerWithOverlay}
          displayedOverlay
        >
          <p>section1</p>
          <p>section2</p>
          <p>section3</p>
          <p>section4</p>
          <p>section5</p>
        </Drawer>
        <Grid justifyContent="flex-start">
          <Cell
            ratio={1 / 5}
            textAlign="left"
          >
            <Button
              width="100%"
              onClick={this.openDrawerWithOverlay}
            >
              open!
            </Button>
          </Cell>
        </Grid>
        {generateCodeTemplate(sampleCode2)}

        <h3>Properties</h3>
        {generateTableTemplate([
          {
            name   : 'className',
            type   : 'string',
            default: 'undefined'
          },
          {
            name   : 'style',
            type   : 'Object',
            default: 'undefined'
          },
          {
            name   : 'width',
            type   : 'number',
            default: '200px'
          },
          {
            name   : 'opened',
            type   : 'boolean',
            default: 'false'
          },
          {
            name   : 'position',
            type   : 'left | right',
            default: 'left'
          },
          {
            name   : 'paddingWidth',
            type   : 'number',
            default: '10px'
          },
          {
            name   : 'displayedOverlay',
            type   : 'boolean',
            default: 'false'
          },
          {
            name   : 'onChange',
            type   : 'Function',
            default: 'undefined'
          }
        ])}
      </div>
    );
  }
}

export default Drawers;
