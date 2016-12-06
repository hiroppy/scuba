<div align="center">
  <h1>scuba</h1>
</div>

<strong>Unified UI components built by React.</strong>

see: https://abouthiroppy.github.io/scuba/

[![npm version](https://badge.fury.io/js/scuba.svg)](https://badge.fury.io/js/scuba)
[![Build Status](https://travis-ci.org/abouthiroppy/scuba.svg?branch=master)](https://travis-ci.org/abouthiroppy/scuba)
[![codecov](https://codecov.io/gh/abouthiroppy/scuba/branch/master/graph/badge.svg)](https://codecov.io/gh/abouthiroppy/scuba)
[![Build status](https://ci.appveyor.com/api/projects/status/hrk1vpy5gsxl8r37/branch/master?svg=true)](https://ci.appveyor.com/project/abouthiroppy/scuba/branch/master)
[![dependencies Status](https://david-dm.org/abouthiroppy/scuba/status.svg)](https://david-dm.org/abouthiroppy/scuba)

# Getting Started
Install the module with `npm install --save scuba`.

Scuba has 5 themes and 2 subColors.
The theme and subColor are reflected only in Container.

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import Container, {Button} from 'scuba';

const Root = () => (
  <Container
    theme="mint"
    subColor="dark"
  >
    <Button>Hello!!</Button>
  </Container>
);

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
```

## Components List
- [x] Typography
- [x] Avatars
- [x] Blockquotes
- [x] Buttons
- [x] Codes
- [ ] Forms
- [x] Lists
- [x] Tables
- [x] Papers
- [x] Grids

## Development
```
$ git clone git@github.com:abouthiroppy/scuba.git
$ cd scuba
$ npm install
$ npm run storybook
$ open localhost:8080
```
