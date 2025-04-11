import React from 'react';

import { Excos } from '../../components';
import { teamData } from '../../constants/dummy';

import './team.scss';

const Team = () => {
  return (
    <div id="team" >
      <div className="flex flex-col items-center justify-center bg-[#e89611] py-6 md:py-16 px-6 gap-3 md:gap-6">
        <h3 className="font-bold p2__text text-6xl md:text-7xl text-white">The Team</h3>
        <p className="p2__text font-bold text-3xl text-white">who we are</p>
      </div>

      <div className="flex justify-center items-center flex-col w-full">
        {teamData.map((item, index) => (
          <Excos 
            name={item.name} 
            role={item.role} 
            text={item.text} 
            number={item.number} 
            email={item.email} 
            emailLink={item.emailLink} 
            facebook={item.facebook} 
            facebookLink={item.facebookLink} 
            twitter={item.twitter} 
            twitterLink={item.twitterLink} 
            linkedin={item.linkedin} 
            linkedinLink={item.linkedinLink} 
            imgUrl={item.imgUrl}  
            className={item.className} 
            key={item.name + index} />
        ))}
      </div>
    </div>
  )
}

export default Team
