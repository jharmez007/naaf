import React from 'react';
import { Link } from 'react-router-dom';

import { AnimatedSection } from '../components';

const HomeButton = ({ classOne, classTwo, headText, text, link }) => {
  return (
    <div className={classOne}>
      <div className="text-center">
				<AnimatedSection id="buttonSection">
          <div className={classTwo}>
            <Link to={typeof link === 'function' ? link() : link}>{headText}</Link>
          </div>
          <p>{text}</p>
        </AnimatedSection>
      </div>
    </div>
  )
}

export default HomeButton
