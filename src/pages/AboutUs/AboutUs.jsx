import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import { aboutData } from '../../constants/dummy';
import { images } from '../../constants';
import { Mission, AnimatedSection } from '../../components';
import './aboutUs.scss';


const customClass = 'absolute top-0 bottom-0 right-0 left-0 bg-black opacity-15 hover:opacity-50 ease-in duration-300';
const imgClass = 'w-full h-full object-cover hover:opacity-30 ease-in duration-300';

const AboutUs = () => {
  const navigate = useNavigate();

  const goToAboutSection = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth < 768) {
      // Mobile screen size, go to Section 1
      navigate("/support#donate");
    } else if (screenWidth >= 768 && screenWidth < 1024) {
      // Tablet screen size, go to Section 2
      navigate("/support#donate1");
    } else {
      // Desktop screen size, go to Section 3
      navigate("/support#donate1");
    }
  };

  return (
    <div id="aboutUs">
      <div className="flex items-center justify-center bg-[#e89611] py-6 md:py-16 px-6">
        <h3 className="font-bold p2__text text-6xl md:text-7xl text-white">About Us</h3>
      </div>

      <div className="flex items-center justify-center  py-8 md:py-20 px-6">
        <p className="max-w-[1000px] text-center p__text">Nicholas Adeiye Alonge Foundation is dedicated to feeding children, empowering women, training farmers, responding to disasters, and serving communities in need. We are committed to providing health education and facilities, promoting cross-cultural heritage, taking vulnerable children and youths off the street, and offering skills development programs. This is a space to share our journey, the impact of our services, and what sets us apart in our mission to bring lasting and postive change to lives.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 lg:max-h-[680px]">
        <div className="flex flex-col md:flex-row lg:basis-7/12 gap-6">
          <div className="flex flex-col md:basis-3/6 lg:basis-7/12 gap-6">
            <div className="flex flex-col md:flex-row w-full gap-6">
              <div className="w-full h-full md:basis-3/6 relative cursor-pointer"><div className={customClass}/><img className={imgClass} src={images.imgThree} alt="education" loading="lazy"/></div>
              <div className="w-full h-full md:basis-3/6 relative cursor-pointer"><div className={customClass}/><img className={imgClass} src={images.imgEight} alt="education" loading="lazy"/></div>
            </div>
            <div className="w-full h-full relative cursor-pointer"><div className={customClass}/><img className={imgClass} src={images.photoThree} alt="learning" loading="lazy"/></div>
          </div>

          <div className="flex flex-col md:basis-3/6 lg:basis-5/12 gap-6">
            <div className="w-full h-full relative cursor-pointer"><div className={customClass}/><img className={imgClass} src={images.photoFour} alt="development" loading="lazy"/></div>
            <div className="w-full h-full relative cursor-pointer"><div className={customClass}/><img className={imgClass} src={images.photoNine} alt="catering" loading="lazy"/></div>
          </div>
        </div>

        <div className="w-full lg:basis-5/12">
          <div className="w-full h-full relative cursor-pointer"><div className={customClass}/><img className={imgClass} src={images.imgFour} alt="development" loading="lazy"/></div>
        </div>
      </div>

      <div className="app__flex py-12 px-5 bg-[#ff6501]">
        <AnimatedSection id="quote2">
          <div className="text-center text-white w-[100%] max-w-[860px]">
            <h3 className="text-2xl md:text-3xl italic">"Where the world sees helplessness, we see humanity. Through advocacy and unity, we bring education, healing, and hope to those who need it most."</h3>
          </div>
        </AnimatedSection>
      </div>

      <div className="flex justify-center items-center flex-col w-full">
        {aboutData.map((item, index) => (
          <Mission title={item.title} text={item.text} imgUrl={item.imgUrl} className={item.className} id={item.id} key={item.title + index} />
        ))}
      </div>


      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="relative py-16 px-6 md:px-12 bg-gradient-to-r from-[#f59e0b] via-[#f97316] to-[#ef4444]">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-30 z-0"></div>

          {/* Content */}
          <div className="relative z-10 max-w-6xl mx-auto text-white">
            <h2 className="text-4xl md:text-5xl  font-bold text-center mb-12">Meet Our Founder</h2>
            <p className="text-lg md:text-xl text-center mb-8">This document presents the Biography of Mr. Alonge Sunday Samuel, the Chief Executive Officer of the Nicholas Adeiye Alonge Foundation (NAAF).</p>

            <div className="flex flex-col lg:flex-row gap-12 items-center">
              {/* Founder Image */}
              <div className="w-full lg:w-5/12">
                <img
                  src={images.exco}
                  alt="Founder Nicholas Adeiye Alonge"
                  className="rounded-2xl shadow-2xl object-cover w-full max-h-[500px]"
                  loading="lazy"
                />
              </div>

              {/* Timeline Text */}
              <div className="w-full lg:w-7/12 space-y-10">
                <div className="border-l-4 border-white pl-6 relative">
                  <div className="absolute -left-3 top-1.5 w-5 h-5 bg-white rounded-full border-2 border-[#ffedd5]"></div>
                  <h4 className="text-xl font-semibold">Humble Origins</h4>
                  <p className="text-base opacity-90">
                  I am Sunday Samuel Alonge, born on a brisk winter day in the 1980s in a quaint town named 'Idoani' in Ondo State, into the household of Mr. and Mrs. Alonge. I hail from a family of three, being the youngest and sole male member. My Educational journey began at LA/AUD and Holy Trinity Anglican Primary School, followed by Ireakari Comprehensive and Super Topmost College for my secondary education. After a six-year hiatus, I gained admission to Kogi State University in 2012, graduating in 2015. Subsequently, I undertook my National Youth Service Corps in Adamawa, serving at Aliyu Musdafa College in Yola in 2017. Upon returning to Lagos, I commenced my professional career at Emzor Pharmaceuticals Nig Industries. Two years later, I transitioned to the Federal Housing Authority, where I am currently employed. In 2023, I entered into matrimony, and the union has been blessed with prosperity.
                  As a student of philosophy, I align with the Epicurean school of thought, which posits that philosophers are individuals who cultivate happiness through contemplation. Additionally, I hold an associate membership with the Association of Environmental Safety and Management (A.E.S.M), serve as a registered church worker in the Celestial Church of Christ W/W, and was inducted as a new member of the Nigeria Institute of Management in 2024 (NIM).
                  </p>
                </div>

                <div className="border-l-4 border-white pl-6 relative">
                  <div className="absolute -left-3 top-1.5 w-5 h-5 bg-white rounded-full border-2 border-[#ffedd5]"></div>
                  <h4 className="text-xl font-semibold">Family Life</h4>
                  <p className="text-base opacity-90">
                    My grandparents, exemplars of industry and benevolence, instilled in me the virtue of compassion from a young age. Tragically, my father passed away eight days prior to my birth, leaving my mother to shoulder the responsibilities with the assistance of her parents. While my grandfather toiled as a farmer, my grandmother managed a small shop that offered the community delectable delicacies such as Akara and Pap. It was within this nurturing environment that my ethos of magnanimity took root. I fondly recall observing my grandmother discreetly packaging additional portions of bean cakes and pap for those in need.
                    The Emergence of Empathy during my high school years, I embarked on my initial foray into volunteering by joining a local community service club. Engaging in endeavors such as clothing drives and soup kitchens for the less fortunate, I, alongside Mr. Babaloye Oluwaseun Stephen and Mr. Oloruntele Gbenga Samuel, established the God's Pillar Society, dedicated to aiding widows and the underprivileged in society. It was during this period that I realized generosity transcended mere material donations; it encompassed the sharing of one's time, energy, and heart.
                    The Path of Giving
                    Serving as the President of the God's Pillar Society for a decade, I traversed a challenging path marked by moments of despondency and elation, yet my resolve to assist others propelled me forward. Confronted with families on the brink of homelessness and children deprived of care, I harbored a persistent belief that more could be done to ameliorate their circumstances. This conviction led me to establish a non-profit organization dedicated to providing mentorship and resources to underprivileged youth, thereby alleviating poverty within the community.
                  </p>
                </div>

                <div className="border-l-4 border-white pl-6 relative">
                  <div className="absolute -left-3 top-1.5 w-5 h-5 bg-white rounded-full border-2 border-[#ffedd5]"></div>
                  <h4 className="text-xl font-semibold">Forging Connections</h4>
                  <p className="text-base opacity-90">
                  Since the inception of this non-profit organization, I have been privileged to encounter remarkable individuals who have become integral to my journey. We have extended support to the less privileged, furnished essential items, and organized summer camps within local environs. Witnessing the delight in a child's eyes upon receiving school supplies or distributing meals to beggars in the streets of Lagos, particularly in Mushin, Yaba, Oshodi, and Ikotun, imbued them with a sense of worthiness. I realized that generosity was infectious; by extending a helping hand, others were inspired to join. Our community metamorphosed into a network of mutual support and affection.
                  </p>
                </div>

                <div className="border-l-4 border-white pl-6 relative">
                  <div className="absolute -left-3 top-1.5 w-5 h-5 bg-white rounded-full border-2 border-[#ffedd5]"></div>
                  <h4 className="text-xl font-semibold">Collaborative Endeavors</h4>
                  <p className="text-base opacity-90">
                  Over the years, I aspired to collaborate with local enterprises and international entities to contribute resources and time to schools and other organizations, fostering a more cohesive front against poverty. I gleaned that generosity transcends individual endeavors; it thrives within a community that esteems support and empathy.
                  </p>
                </div>

                <div className="border-l-4 border-white pl-6 relative">
                  <div className="absolute -left-3 top-1.5 w-5 h-5 bg-white rounded-full border-2 border-[#ffedd5]"></div>
                  <h4 className="text-xl font-semibold">Personal Contemplations</h4>
                  <p className="text-base opacity-90">
                  While my outward journey of philanthropy has been enriching, my personal life was not devoid of trials. I confronted numerous challenges and moments of self-doubt. However, I realized that during my darkest hours, the kindness of others served as a beacon of hope. This, too, underscored a crucial lesson: generosity operates as a reciprocal exchange. Each of us possesses the capacity to give and receive.
                  Perpetuating the Legacy
                  Presently, I persist in my philanthropic pursuits, endeavoring to inspire the forthcoming generation to embrace the ethos of generosity. When afforded the opportunity, I share my narrative at schools, auditoriums, and community events, encouraging others to explore their distinct avenues of giving, be it through time, resources, or merely offering solace to those in need.
                  In retrospect, I recognize that a magnanimous heart not only transforms the lives of others but also enriches our own existence immeasurably. 
                  </p>
                </div>

                <div className="border-l-4 border-white pl-6 relative">
                  <div className="absolute -left-3 top-1.5 w-5 h-5 bg-white rounded-full border-2 border-[#ffedd5]"></div>
                  <h4 className="text-xl font-semibold">Reflection</h4>
                  <p className="text-base opacity-90">
                  As I reflect upon this odyssey, I stand humbled and grateful, cognizant that authentic wealth resides in the love we dispense and receive.<br/><br/>
                  Your Brother and Friend.
                  Samuel Sunday Alonge 
                  CEO/ Nicholas Adeiye Alonge Foundation NAAF.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="app__flex px-6 py-8 md:py-20 bg-[#e89611]">
        <AnimatedSection id="about2">
          <div className="app__flex flex-col text-white gap-6">
            <h4 className="font-bold p__text text-4xl md:text-5xl text-center">Support Our Cause Today!</h4>
            <button onClick={goToAboutSection} className="border-4 text-white text-sm md:text-lg py-2 px-6 md:py-4 md:px-9 rounded-md font-bold hover:bg-white hover:text-black ease-in duration-300">GIVE NOW</button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}

export default AboutUs
