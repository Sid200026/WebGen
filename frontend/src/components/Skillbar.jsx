import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import '../styles/skillbar.scss';

const Skillbars = (props) => {
  const { skills, skillsBackground } = props;

  useEffect(() => {
    document.querySelectorAll('.skillbar').forEach((node) => {
      const dataPercentage = node.getAttribute('data-percent');
      node
        .querySelector('.skillbar-bar')
        .animate(
          { width: dataPercentage },
          { duration: 3000, iterations: 1, fill: 'forwards' },
        );
    });
    return undefined;
  });

  const findMaxSkillName = skills.reduce(
    (prev, current) => {
      return prev.text.length > current.text.length ? prev : current;
    },
    { text: '' },
  ).text;

  const getSize = () => {
    const multiplier = window.innerWidth < 750 ? 0.6 : 1;
    if (findMaxSkillName.length < 5) {
      return `${13 * findMaxSkillName.length * multiplier}px`;
    }
    if (findMaxSkillName.length < 10) {
      return `${11 * findMaxSkillName.length * multiplier}px`;
    }
    return `${10 * findMaxSkillName.length * multiplier}px`;
  };

  const displaySkills = () =>
    skills.map((skill, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <div className="skillbar clearfix" data-percent={`${skill.value}%`} key={index}>
        <div
          className="skillbar-title"
          style={{
            background: skill.color,
            width: getSize(),
          }}
        >
          <span>{skill.text}</span>
        </div>
        <div
          className="skillbar-container-bar"
          style={{ background: skillsBackground }}
        >
          <div className="skillbar-bar" style={{ background: skill.color }} />
          <div className="skill-bar-percent">{`${skill.value}%`}</div>
        </div>
      </div>
    ));

  return (
    <>
      <div className="container-skillbar">{displaySkills()}</div>
    </>
  );
};

Skillbars.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    }),
  ).isRequired,
  skillsBackground: PropTypes.string.isRequired,
};

export { Skillbars };
