import React from 'react';
import Particles from 'react-tsparticles';
import { PropTypes } from 'prop-types';

const Static = (props) => {
  const { backgroundColor, entityColor } = props;
  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: backgroundColor,
        },
        detectRetina: false,
        fpsLimit: 30,
        interactivity: {
          detectsOn: 'canvas',
          events: {
            resize: true,
          },
        },
        particles: {
          color: {
            value: entityColor,
          },
          number: {
            density: {
              enable: true,
              area: 1080,
            },
            limit: 0,
            value: 400,
          },
          opacity: {
            animation: {
              enable: true,
              minimumValue: 0.05,
              speed: 0.25,
              sync: false,
            },
            random: {
              enable: true,
              minimumValue: 0.05,
            },
            value: 1,
          },
          shape: {
            type: 'circle',
          },
          size: {
            random: {
              enable: true,
              minimumValue: 0.5,
            },
            value: 1,
          },
        },
      }}
    />
  );
};

Static.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  entityColor: PropTypes.string.isRequired,
};

export { Static };
