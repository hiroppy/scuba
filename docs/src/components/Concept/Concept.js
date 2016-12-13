import React from 'react';
import { Link } from 'react-router';

const Concept = () => (
  <section>
    <h1>Concept</h1>
    <hr />
    <h3>Mission</h3>
    <p>
      The purpose of
      <em> Scuba </em>
      is that the user can create a unified design
      without considering the color scheme of each component.
      <em> Scuba </em>
      gives a sense of unity, making the site easier to build!
    </p>
    <h3>Theme and SubColor</h3>
    <p>
      Details:
      <Link to="concept/colors">Colors</Link>
    </p>
    <p>
      The features of
      <em> Scuba </em>
      is to have theme and subColor.
      {' Let\'s mix colors using the toolbar of this site😘'}
    </p>
    <p>
      Theme and subColor are reflected only in
      <Link to="components/container">Container</Link>
      .
    </p>
    <h3>CSS3</h3>
    <p>
      We use
      <a
        rel="noopener noreferrer"
        href="http://www.w3schools.com/cssref/css_units.asp"
        target="_blank"
      >
        <code>rem</code>
      </a>
      as a unit for something like
      <code>font-size</code>
      or
      <code>margin</code>
      or the others, and also we use
      <a
        rel="noopener noreferrer"
        href="http://www.w3schools.com/css/css3_flexbox.asp"
        target="_blank"
      >
        <code>flexbox</code>
      </a>
      for
      <Link to="components/Grids">Grids</Link>
      .
    </p>
    <h3>Browsers</h3>
    <p>wip</p>
  </section>
);

export default Concept;
