import React from 'react';
import './basicAccordion.css'
function HelloWordDiv({checked}) {
  return (
    <div>
      <div className={checked?'large-height' : 'small-height'} >
        Hello word
      </div>
    </div>
  );
}

export default HelloWordDiv;
