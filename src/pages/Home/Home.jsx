import React, { useState, useEffect } from 'react';
import { Parallax } from 'react-parallax';
import { Link} from 'react-router-dom';

import { HomeButton, AnimatedSection } from '../../components';
import { socials, objectives } from '../../constants/dummy';
import { images } from '../../constants';
import './home.scss';
import {  urlFor, client } from '../../client';


const Home = () => {
  const [ screenSize, setScreenSize ] = useState(undefined);
  const [ parallax, setParallax ] = useState(true);
  const [post, setPost] = useState([]);

   // Ensure sorting doesn't mutate state
  const sortedPost = [...post].sort((a, b) => b.no - a.no);

  useEffect(() => {
    const query = '*[_type == "post"]';

    client.fetch(query)
    .then((data) => setPost(data))

  }, []);


  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if(screenSize <= 900) {
      setParallax(false);
    } else {
      setParallax(true);
    }
  }, [screenSize]);


  const goToAboutSection = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth < 768) {
      // Mobile screen size, go to Section 1
      return "/support#donate";
    } else if (screenWidth >= 768 && screenWidth < 1024) {
      // Tablet screen size, go to Section 2
      return "/support#donate1";
    } else {
      // Desktop screen size, go to Section 3
      return "/support#donate1";
    }
  };

  return (
    <div className="flex flex-col">
      <div className="socials hidden lg:flex justify-center items-center flex-col  gap-6 py-6 px-5 w-4 fixed right-0 bottom-[40%] z-[10]">
        {socials.map((item, index) => (
          <div key={`title-${index}`}>
            <a href={item.link} target="_blank" rel="noreferrer">
              {React.cloneElement(item.icon, { className: "fill-white hover:fill-[#e89611] ease-in duration-300" })}
            </a>
          </div>
        ))}
      </div>

      {parallax ?
        <Parallax className="z-[-999]" strength={600} bgImage={images.imgFour}>
          <div className="flex items-end justify-center h-[90vh] p-12 bg-cover bg-center z-[-999]">
            <h1 className="text-white p2__text font-bold text-6xl md:text-7xl lg:text-8xl max-w-[900px] text-center">Feeding Children, Empowering Women, and Aiding the Less Privileged Worldwide</h1>
          </div>
        </Parallax> 
        :
        <div
          className="flex items-end justify-center h-screen p-12 bg-cover bg-center"
          style={{ backgroundImage: `url(${images.imgFour})` }}
        >
          <h1 className="text-white p2__text font-bold text-6xl md:text-7xl lg:text-8xl max-w-[900px] text-center">Feeding Children, Empowering Women, and Training Farmers Worldwide</h1>
        </div>
      }

      <div 
        className="flex flex-col md:flex-row text-white p__text "
      >
        <HomeButton 
          classOne="app__flex basis-2/6 bg-[#e89611] py-8 md:py-12" 
          classTwo="p2__text text-5xl font-extrabold hover:text-[#3f3c3467] ease-in duration-300" 
          headText="Our Initiatives"
          text="Our Vision and Impact"
          link="/aboutUs"
        />
        <HomeButton 
          classOne="app__flex basis-2/6 bg-[#ff6501] py-8 md:py-12" 
          classTwo="p2__text text-5xl font-extrabold hover:text-[#2b3d38cc] ease-in duration-300" 
          headText="Contact Us"
          text="Get In Touch"
          link="/contact"
        />
        <HomeButton 
          classOne="app__flex basis-2/6 bg-[#964a18] py-8 md:py-12" 
          classTwo="p2__text text-5xl font-extrabold hover:text-[#000201c5] ease-in duration-300" 
          headText="Take Action"
          text="Support Our Cause"
          link={goToAboutSection}
        />
      </div>

      <AnimatedSection id="blogSection">
        <div className="app__flex min-h-[80vh] px-6 md:px-24 lg:px-32 xl:px-[200px] 2xl:px-[400px] py-24 bg-white text-black">
          <div className="flex items-center justify-center flex-col w-full gap-16 md:gap-20">
          <div className="text-center">
            <h4 className="font-bold p2__text text-4xl text-[#e89611]">THE BLOG</h4>
            <h2 className="font-bold p2__text text-6xl md:text-7xl">NEWS & UPDATES</h2>
          </div>
          {sortedPost.length < 0 ? (
              <div className="app__flex flex-col border  w-[100%] max-w-[1200px] px-6 py-60 text-center p__text">
                <h3 className="font-extrabold text-3xl">Check back soon</h3>
                <p>Once posts are published, you'll see them here.</p>
              </div>
          ) : (
            <div className="flex flex-row w-full text-white">
                <div className='news-column left float-left w-full lg:w-[33.333%] flex flex-col gap-8 lg:gap-0'>
                  <Link 
                    to={`/post/0`}
                    state={{ post: sortedPost[0], allPosts: sortedPost }} // Pass post data as state
                    className='relative h-auto lg:h-[400px] bg-[#e89611] hover:bg-[#ff6501] p-8 transition duration-300'
                  >
                    {sortedPost.length > 0 ? (
                      <>
                        <p>{sortedPost[0].date}</p>
                        <h3 className='uppercase font-bold text-lg'>{sortedPost[0].title}</h3>
                      </>
                    ) : (
                      <p>POSTS HERE ARE NOT AVAILABLE YET</p> // Placeholder content while fetching
                    )}
                  </Link>


                  <Link 
                    to={`/post/1`}
                    state={{ post: sortedPost[1], allPosts: sortedPost }} // Pass post data as state  
                    className='relative h-auto lg:h-[400px] p-8 bg-cover bg-center hover:text-black transition'
                    style={{ backgroundImage: sortedPost.length > 1 ? `url(${urlFor(sortedPost[1].mainImage )})` : "none" }}
                  >
                    {/* Overlay */}
                    {sortedPost.length > 1 && (
                      <div className="overlay absolute inset-0 bg-black/50 opacity-50 hover:bg-white/50 hover:opacity-100 transition duration-300"></div>
                    )}

                    {sortedPost.length > 1 ? (
                      <>
                        <div className="imge relative z-10">
                          <p>{sortedPost[1].date}</p>
                          <h3 className="uppercase font-bold text-lg">{sortedPost[1].title}</h3>
                        </div>
                      </>
                    ) : (
                      <p>POSTS HERE ARE NOT AVAILABLE YET</p> // Placeholder content while fetching
                    )}
                  </Link>


                  <Link 
                    to={`/post/2`}
                    state={{ post: sortedPost[2], allPosts: sortedPost }} // Pass post data as state  
                    className='relative h-auto lg:h-[400px] bg-[#e89611] hover:bg-[#ff6501] p-8 transition duration-300'
                  >
                    {sortedPost.length > 2 ? (
                      <>
                        <p>{sortedPost[2].date}</p>
                        <h3 className='uppercase font-bold text-lg'>{sortedPost[2].title}</h3>
                      </>
                    ) : (
                      <p>POSTS HERE ARE NOT AVAILABLE YET</p> // Placeholder content while fetching
                    )}
                  </Link>
                </div>



                <div className='news-column middle float-left lg:w-[33.333%] hidden lg:flex lg:flex-col pt-[110px]'>
                  <Link 
                    to={`/post/3`}
                    state={{ post: sortedPost[3], allPosts: sortedPost }} // Pass post data as state 
                    className='relative lg:h-[290px] p-8 hover:text-black transition'
                    style={{ backgroundImage: sortedPost.length > 3 ? `url(${urlFor(sortedPost[3].mainImage )})` : "none" }}
                  >
                  {/* Overlay */}
                  {sortedPost.length > 3 && (
                    <div className="absolute inset-0 bg-black/50 opacity-50 hover:bg-white/50 hover:opacity-100 transition duration-300"></div>
                  )}

                  {sortedPost.length > 3 ? (
                    <>
                      <div className="imge relative z-10">
                        <p>{sortedPost[3].date}</p>
                        <h3 className="uppercase font-bold text-lg">{sortedPost[3].title}</h3>
                      </div>
                    </>
                  ) : (
                    <p>POSTS HERE ARE NOT AVAILABLE YET</p> // Placeholder content while fetching
                  )}
                  </Link>


                  <Link 
                    to={`/post/4`}
                    state={{ post: sortedPost[4], allPosts: sortedPost }} // Pass post data as state  
                    className='relative lg:h-[290px] bg-[#e89611] hover:bg-[#ff6501] p-8 transition duration-300'
                  >
                    {sortedPost.length > 4 ? (
                      <>
                        <p>{sortedPost[4].date}</p>
                        <h3 className='uppercase font-bold text-lg'>{sortedPost[4].title}</h3>
                      </>
                    ) : (
                      <p>POSTS HERE ARE NOT AVAILABLE YET</p> // Placeholder content while fetching
                    )}
                  </Link>


                  <Link 
                    to={`/post/5`}
                    state={{ post: sortedPost[5], allPosts: sortedPost }} // Pass post data as state  
                    className='relative lg:h-[290px] bg-[#964a18] hover:bg-slate-200 hover:text-black p-8 transition duration-300'
                  >
                    {sortedPost.length > 5 ? (
                      <>
                        <p>{sortedPost[5].date}</p>
                        <h3 className='uppercase font-bold text-lg'>{sortedPost[5].title}</h3>
                      </>
                    ) : (
                      <p>POSTS HERE ARE NOT AVAILABLE YET</p> // Placeholder content while fetching
                    )}
                  </Link>

                  <Link 
                    to={`/post/6`}
                    state={{ post: sortedPost[6], allPosts: sortedPost }} // Pass post data as state  
                    className='relative h-auto lg:h-[290px] bg-[#e89611] hover:bg-[#ff6501] p-8 transition duration-300'
                  >
                  {sortedPost.length > 6 ? (
                    <>
                      <p>{sortedPost[6].date}</p>
                      <h3 className='uppercase font-bold text-lg'>{sortedPost[6].title}</h3>
                    </>
                  ) : (
                    <p>POSTS HERE ARE NOT AVAILABLE YET</p> // Placeholder content while fetching
                  )}
                  </Link>
                </div>


                <div className='news-column right float-left lg:w-[33.333%] hidden lg:flex lg:flex-col'>
                  <Link 
                    to={`/post/7`}
                    state={{ post: sortedPost[7], allPosts: sortedPost }} // Pass post data as state 
                    className='relative h-auto lg:h-[400px] bg-[#e89611] hover:bg-[#ff6501] p-8 transition duration-300'
                  >
                  {sortedPost.length > 7 ? (
                    <>
                      <p>{sortedPost[7].date}</p>
                      <h3 className='uppercase font-bold text-lg'>{sortedPost[7].title}</h3>
                    </>
                  ) : (
                    <p>POSTS HERE ARE NOT AVAILABLE YET</p> // Placeholder content while fetching
                  )}
                  </Link>


                  <Link 
                    to={`/post/8`}
                    state={{ post: sortedPost[8], allPosts: sortedPost }} // Pass post data as state  
                    className='relative lg:h-[400px] bg-white p-8 hover:text-black transition'
                    style={{ backgroundImage: sortedPost.length > 8 ? `url(${urlFor(sortedPost[8].mainImage )})` : "none" }}
                  >
                    {/* Overlay */}
                  {sortedPost.length > 8 && (
                    <div className="absolute inset-0 bg-black/50 opacity-50 hover:bg-white/50 hover:opacity-100 transition"></div>
                  )}
                  {sortedPost.length > 8 ? (
                    <>
                      <div className="imge relative z-10">
                        <p>{sortedPost[8].date}</p>
                        <h3 className="uppercase font-bold text-lg">{sortedPost[8].title}</h3>
                      </div>
                    </>
                  ) : (
                    <p>POSTS HERE ARE NOT AVAILABLE YET</p> // Placeholder content while fetching
                  )}
                  </Link>


                  <Link 
                    to={`/post/9`}
                    state={{ post: sortedPost[9], allPosts: sortedPost }} // Pass post data as state  
                    className='relative h-auto lg:h-[400px] bg-[#e89611] hover:bg-[#ff6501] p-8 transition duration-300'
                  >
                    {sortedPost.length > 9 ? (
                      <>
                        <p>{sortedPost[9].date}</p>
                        <h3 className='uppercase font-bold text-lg'>{sortedPost[9].title}</h3>
                      </>
                    ) : (
                      <p>POSTS HERE ARE NOT AVAILABLE YET</p> // Placeholder content while fetching
                    )}
                  </Link>
                </div>
            </div>
          )}
             
            
            <Link to="/blog" className="bg-[#ff6501] text-white text-sm md:text-lg py-2 px-6 md:py-4 md:px-9 rounded-md font-bold hover:bg-[#fcc027ce] ease-in duration-300">SEE MORE ON THE BLOG</Link>
          </div>
        </div>
      </AnimatedSection>

      <div className="app__flex py-12 px-5 bg-[#e89611]">
        <AnimatedSection id="quote1">
          <div className="text-center text-white w-[100%] max-w-[860px]">
            <h3 className="text-2xl md:text-3xl italic mb-4">Every child deserves a chance to thrive, every woman deserves to be empowered, and every farmer deserves the opportunity to succeed.</h3>
            <p>Nicholas Adeiye Alonge Foundation</p>
          </div>
        </AnimatedSection>
      </div>

      <div 
        className="relative app__flex p-6 md:p-12 text-white bg-cover bg-center z-[-999]"
        style={{ backgroundImage: `url(${images.photoSix})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="flex justify-center items-center flex-col gap-16 md:gap-20 z-10">
          <div className="flex justify-center items-center flex-col gap-6">
            <h2 className="font-bold p2__text text-6xl md:text-7xl text-center">OUR OBJECTIVES</h2>
            <div className="app__div"/>
            <p className="p__text font-bold text-xl md:text-2xl text-center">Our community partners guide us and our objectives drive us.</p>
          </div>
          <div className="flex items-center justify-center gap-8 md:gap-6 flex-col lg:flex-row lg:flex-wrap w-[100%] max-w-[1200px]">
            {objectives.map((item) => (
              <div 
                className="flex justify-start items-center flex-col gap-4 text-center w-full lg:w-half md:min-h-[221px]"
                key={`title-${item.title}`}
              >
                <h4 className="p2__text text-4xl md:text-5xl font-extrabold">{item.title}</h4>
                <div className="app__div" />
                <p className="p__text font-bold text-lg md:text-xl">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="app__flex px-6 py-8 md:py-20 bg-[#e89611]">
        <div className="app__flex flex-col">
          <div className="app__flex flex-col text-white gap-6 text-center">
            <AnimatedSection id="signUpSection">
              <h3 className="font-bold p2__text text-6xl md:text-7xl">BECOME A MEMBER</h3>
              <p className="p__text font-bold text-xl md:text-2xl text-center">Get exclusive updates on our work and how you can help.</p>
            </AnimatedSection>
            <Link to="/signupform"><button className="border-4  text-white text-sm md:text-lg py-2 px-6 md:py-4 md:px-9 rounded-md font-bold hover:bg-white hover:text-black ease-in duration-300">SIGN UP TODAY</button></Link>
          </div>
          <div className="flex lg:hidden justify-center items-center flex-row flex-wrap gap-6 py-6 mt-5">
            {socials.map((item, index) => (
              <div key={`title-${index}`}>
                <a href={item.link} target="_blank" rel="noreferrer">
                  {React.cloneElement(item.icon, { className: "fill-white hover:fill-[#ff6501] w-[20px] h-[20px] md:w-[35px] md:h-[35px] ease-in duration-300" })}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home



