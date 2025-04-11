import React from 'react';

import { AnimatedSection, Donate } from '../../components';
import { images } from '../../constants';
import './support.scss';

const Support = () => {
  return (
    <div id="support">
      <div className="flex items-center justify-center bg-[#e89611] py-6 md:py-16 px-6">
        <h3 className="font-bold p2__text text-5xl md:text-6xl lg:text-7xl text-white text-center max-w-[600px]">Join Us in Creating a Better Tomorrow</h3>
      </div>

      <div className="app__flex">
        <div className="flex items-center justify-center  py-8 md:py-20 px-6">
          <div className="app__flex flex-col gap-6">
            <h4 className="font-bold p__text text-3xl md:text-4xl text-center text-[#e89611] max-w-[450px]">Empowering Lives, Inspiring Hope</h4>
            <p className="max-w-[1000px] text-center p__text">Our mission at the Nicholas Adeiye Alonge Foundation is to bring lasting and positive change to the lives of widows and children who have lost hope for an education. Through true, consistent advocacy and the harnessing of both human and material resources, we aim to uplift the most vulnerable in our country and beyond. We invite you to be part of this mission. Your support can help us provide hope, education, and a brighter future for those who need it most. Join us today and make a difference.</p>
          </div>
        </div>
      </div>

      <div className="max max-h-[500px] md:h-[500px]">
        <img className="w-full h-full object-cover object-top" src={images.photoEleven} alt="img" loading="lazy" />
      </div>

      <div id="donate1" className="app__flex px-6 py-8 md:py-20">
        <AnimatedSection id="supportSection">
          <div className="app__flex flex-col gap-3 md:gap-6">
            <h4 className="font-bold p__text text-4xl md:text-5xl text-center text-[#e89611]">Ways to Support Our Cause</h4>
            <p className="text-center p__text text-xl">Make a Contribution</p>
          </div>
        </AnimatedSection>
      </div>

      <div>
        <Donate />
      </div>
    </div>
  )
}

export default Support 
