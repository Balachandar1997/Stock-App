import React from 'react';
import './Tooltip.css';

const Tooltip = ({ text, show }) => {
  return show ? <div className="tooltip">{text}</div> : null;
};

export default Tooltip;