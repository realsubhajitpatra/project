import React from 'react'
import heroImg01 from '../assets/images/hero-img01.png'
import heroImg02 from '../assets/images/hero-img02.png'
import heroImg03 from '../assets/images/hero-img03.png'
import icon01 from '../assets/images/icon01.png'
import icon02 from '../assets/images/icon02.png'
import icon03 from '../assets/images/icon03.png'
import featureImg from '../assets/images/feature-img.png'
import { Link } from 'react-router-dom'
import {BsArrowRight} from 'react-icons/bs'
import About from '../components/About/About'
import Services from './Services'

import ServiceList from '../components/Services/ServiceList.jsx'
import DoctorList from '../components/Doctors/DoctorList.jsx'

const Home = () => {
  return (
    <>
{/* {----------------hero section-----------} */}
   
   <section className='hero__section pt-[60px] 2xl:h-[800px]'>
    <div className="container">
      <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
       {/* {---------hero content-------} */}
       <div>
        <div className='lg:w-[570px]'>
          <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]'>You must have, peace in your mind.</h1>
          <p className='text__para'>Prioritizing mental health is paramount for holistic well-being. Just as we care for our physical health, nurturing our minds is essential for resilience, fulfillment, and vitality.</p>
          <button className='btn'>Request an Appointment</button>
        </div>
        {/* {===========hero counter=============} */}
        <div className='mt-[30px] lg:mt[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
         <div>
          <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>10+</h2>
          <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
          <p className='text__para'>Years of experience</p>
         </div>
         <div>
          <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>1000+</h2>
          <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'></span>
          <p className='text__para'>Therapist Available </p>
         </div>
         <div>
          <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>99.9%</h2>
          <span className='w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]'></span>
          <p className='text__para'>Patient Satisfaction</p>
         </div>
        </div>
       </div>

        {/* {hero content} */}

        <div className='flex gap-[30px] justify-end'>
          <div>
            <img className='w-full' src={heroImg01} alt="heroImgo1" />
          </div>
          <div className='mt-[30px]'>
            <img className='w-full mb-[30px]' src={heroImg02}alt="heroImg02" />
            <img className='w-full' src={heroImg03} alt="heroImg03" />
          </div>
        </div>
      </div>
    </div>
   </section>
    {/* {hero section end} */}

    <section>
      <div className="container">
        <div className='lg:w-[470px] mx-auto'>
          <h2 className='heading text-center'>India&lsquo;s largest mental health therapy service.</h2>
          <h2 className='heading text-center'>100% online.</h2>
          <p className='text__para text-center'>World-class care for everyone. Our mental health System offers unmatched, expert mental health care.</p>
        </div>

        {/* <div className='flex flex-wrap items-center  justify-between flex-col md:flex-row gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'></div> */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
          <div className='py-[30px] px-5'>
            <div className='flex items-center justify-center'>
              <img src={icon01} alt="icon01" />
            </div>
             
              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Find a Therapist</h2>
                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>World-class care for everyone. Our mental health system offers unmatched,expert mental health care.From the lab to the clinic</p>
                <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-#181A1E mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                  <BsArrowRight className='group-hover:text-white w-6 h-5 '/>
                </Link>
              </div>
         </div>

         <div className='py-[30px] px-5'>
            <div className='flex items-center justify-center'>
              <img src={icon02} alt="icon01" />
            </div>
             
              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Find by location</h2>
                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>World-class care for everyone. Our mental health system offers unmatched,expert mental health care.From the lab to the clinic</p>
                <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-#181A1E mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                  <BsArrowRight className='group-hover:text-white w-6 h-5 '/>
                </Link>
              </div>
         </div>

         <div className='py-[30px] px-5'>
            <div className='flex items-center justify-center'>
              <img src={icon03} alt="icon01" />
            </div>
             
              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Book an appointment</h2>
                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>World-class care for everyone. Our mental health system offers unmatched,expert mental health care.From the lab to the clinic</p>
                <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-#181A1E mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                  <BsArrowRight className='group-hover:text-white w-6 h-5 '/>
                </Link>
              </div>
         </div>

        </div>
      </div>
    </section>

    {/* {about section start} */}
    <About/>
    {/* {about section end} */}

    {/* {service section start} */}
    <section>
      <div className='container'>
       <div className='xl:w-[470px] mx-auto'>
        <h2 className='heading text-center'>Our services</h2>
        <p className='text__para text-center'>World-class care for everyone.Our mental health system offers unmatched,expert mental health care.</p>
       </div>
       <ServiceList/>
      </div>
    </section>
    {/* {service section end} */}

    {/* {feature section} */}
         <section>
          <div className='container'>
             <div className='flex items-center justify-between flex-col lg:flex-row'>
                {/* {feature content} */}
                <div className='xl:w-[670px]'>
                  <h2 className='heading'>Get virtual treatment<br/>anytime.</h2>
                  <ul className='pl-4'>
                    <li className='text__para'>1. Schedule the online appointment directly</li>
                    <li className='text__para'>2. Schedule the office appointment directly</li>
                    <li className='text__para'>3. Search for your physician here,and contact their office.</li>
                  </ul>

                  <Link to='/'><button className="btn">Learn More</button></Link>
                </div>
                {/* {feature imge} */}
                <div className='relative z-1 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0'>
                  <img src={featureImg} className='w-3/4' alt="" />
                  <div className='w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pd-[26px] rounded-[10px]'></div>
                  <div className='flex items-center justify-between'></div>
                  <div className='flex items-center gap-[6px] lg:gap-3'></div>
                  <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-black font-[600]'>Tue,24</p>
                  <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-grey font-[400]'>10:00</p>
                </div>
             </div>
          </div>
         </section>
    {/* {feature section end} */}
  {/* {our doctors sections} */}
  <section>
  <div className="container">
        <div className='lg:w-[470px] mx-auto'>
          <h2 className='heading text-center'>Our great Therapist</h2>
          <p className='text__para text-center'>World-class care for everyone. Our mental health System offers unmatched, expert mental health care.</p>
          </div>
          <DoctorList/>
  </div>
  </section>
  {/* {our doctor section end} */}
   </>  
  )
};

export default Home;