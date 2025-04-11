import React from 'react';

import { AnimatedSection } from '../components'

const Mission = ({ title, text, imgUrl, className, id }) => {
  return (
    <div className={`w-full sm:h-auto h-full sm:px-10 md:px-16 px-4 md:mt-16 mt-10 ${className}`}>
			<div className="md:w-1/2 py-16 lg:px-28 sm:px-10 mx-4 ">
				<AnimatedSection id={id}>
					<div className="flex flex-col gap-2">
						<h2 className="font-bold p2__text text-5xl text-[#e89611]">{title}</h2>
						<p className="p__text">{text}</p>
					</div>
				</AnimatedSection>
			</div>
			<div className="md:w-1/2">
				<img className="w-full h-full object-cover" src={imgUrl} alt="img" loading="lazy" />
			</div>
    </div>
  )
}

export default Mission
