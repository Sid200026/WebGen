import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';

import { Bubbles } from './Bubbles.jsx';
import { Dots } from './Dots.jsx';
import { Static } from './Static.jsx';

const BUBBLES = 'Bubbles';
const DOTS = 'Dots';
const STATIC = 'Static';

const particleThemeArray = [
  {
    title: BUBBLES,
    theme: Bubbles,
  },
  {
    title: DOTS,
    theme: Dots,
  },
  {
    title: STATIC,
    theme: Static,
  },
];

const generateMenuItems = () => {
  const menuItems = [];
  menuItems.push(
    <MenuItem value="" key="empty">
      <em>Choose a theme</em>
    </MenuItem>,
  );
  menuItems.push(
    particleThemeArray.map((ele) => (
      <MenuItem key={ele.title} value={ele.title}>
        {ele.title}
      </MenuItem>
    )),
  );
  return menuItems;
};

const getTheme = (name, background, entity) => {
  const theme = particleThemeArray.filter((ele) => ele.title === name);
  if (theme.length === 0) {
    return null;
  }
  const ParticleTheme = theme[0].theme;
  return <ParticleTheme backgroundColor={background} entityColor={entity} />;
};

export { generateMenuItems, particleThemeArray, getTheme };
