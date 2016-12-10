import React from 'react';
import { Drawer, Button } from '../../../../src';
import generateCodeTemplate from './generateCodeTemplate';
import generateTableTemplate from './generateTableTemplate';
import styles from './style.css';

const sampleCode1 = `import {Drawer, button} from 'scuba';

class Drawer extends React.Component {
    constructor() {
        super();

        this.state = {opened: false};
        this.openDrawer = this.openDrawer.bind(this);
    }

    openDrawer() {
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
                <Button onClick={this.openDrawer}>push!</Button>
            </div>
        );
    }
}`;


const sampleCode2 = `import {Drawer, button} from 'scuba';

class Drawer extends React.Component {
    constructor() {
        super();

        this.state = {opened: false};
        this.openDrawer = this.openDrawer.bind(this);
    }

    openDrawer() {
        this.setState({opened: !this.state.opened});
    }

    render() {
        return (
            <div>
                <Drawer
                    opened={this.state.opened}
                    onChange={this.openDrawer}
                    displayedOverlay
                  >
                    <p>section1</p>
                    <p>section2</p>
                    <p>section3</p>
                    <p>section4</p>
                    <p>section5</p>
                </Drawer>
                <Button onClick={this.openDrawer}>push!</Button>
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
        <p>Avatars can be used to images and letters(or icon, etc).</p>
        <h3>Normal Drawers</h3>
        <Drawer opened={this.state.openedDrawer}>
          <p>section1</p>
          <p>section2</p>
          <p>section3</p>
          <p>section4</p>
          <p>section5</p>
        </Drawer>
        <Button onClick={this.openDrawer}>push!</Button>
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
        <Button onClick={this.openDrawerWithOverlay}>push!</Button>
        {generateCodeTemplate(sampleCode2)}

        <h3>Properties</h3>
        {generateTableTemplate([
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
          }
        ])}
      </div>
    );
  }
}

export default Drawers;
