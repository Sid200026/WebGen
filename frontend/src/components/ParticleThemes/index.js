import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';

import { BlackBubbles } from './BlackBubbles.jsx';
import { BlackGoldSimple } from './BlackGoldSimple.jsx';
import { BlackSimple } from './BlackSimple.jsx';
import { BlueBubbles } from './BlueBubbles.jsx';
import { BlueSimple } from './BlueSimple.jsx';
import { StarryNight } from './StarryNight.jsx';

const BLACK_BUBBLES = 'Black Bubbles';
const BLUE_BUBBLES = 'Blue Bubbles';
const BLACK_SIMPLE = 'Black Dots';
const BLUE_SIMPLE = 'Blue Dots';
const BLACK_GOLD_SIMPLE = 'Black Gold Dots';
const NIGHT_LIFE = 'Night Life';

const particleThemeArray = [
  {
    title: BLACK_BUBBLES,
    theme: BlackBubbles,
  },
  {
    title: BLUE_BUBBLES,
    theme: BlueBubbles,
  },
  {
    title: BLACK_SIMPLE,
    theme: BlackSimple,
  },
  {
    title: BLUE_SIMPLE,
    theme: BlueSimple,
  },
  {
    title: BLACK_GOLD_SIMPLE,
    theme: BlackGoldSimple,
  },
  {
    title: NIGHT_LIFE,
    theme: StarryNight,
  },
];

const generateMenuItems = () => {
  const menuItems = [];
  menuItems.push(
    <MenuItem value="">
      <em>Choose a theme</em>
    </MenuItem>,
  );
  menuItems.push(
    particleThemeArray.map((ele) => <MenuItem value={ele.title}>{ele.title}</MenuItem>),
  );
  return menuItems;
};

const getTheme = (name) => {
  const theme = particleThemeArray.filter((ele) => ele.title === name);
  if (theme.length === 0) {
    return null;
  }
  const ParticleTheme = theme[0].theme;
  return <ParticleTheme />;
};

export { generateMenuItems, particleThemeArray, getTheme };
