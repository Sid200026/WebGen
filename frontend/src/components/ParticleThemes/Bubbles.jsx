import React from 'react';
import Particles from 'react-particles-js';
import { PropTypes } from 'prop-types';

const Bubbles = (props) => {
  const { backgroundColor, entityColor } = props;
  return (
    <Particles
      params={{
        background: {
          color: {
            value: backgroundColor,
          },
        },
        particles: {
          number: {
            value: 160,
            density: {
              enable: false,
            },
          },
          color: {
            value: entityColor,
          },
          size: {
            value: 3,
            random: true,
            anim: {
              speed: 4,
              size_min: 0.3,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            random: true,
            speed: 1,
            direction: 'top',
            out_mode: 'out',
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: 'bubble',
            },
            onclick: {
              enable: true,
              mode: 'repulse',
            },
          },
          modes: {
            bubble: {
              distance: 250,
              duration: 2,
              size: 0,
              opacity: 0,
            },
            repulse: {
              distance: 400,
              duration: 4,
            },
          },
        },
      }}
    />
  );
};

Bubbles.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  entityColor: PropTypes.string.isRequired,
};

export { Bubbles };
