import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/large_freudia_0.png'
// import{RilLinkedinFill} from 'react-icons/ri'
// import{AiFillYoutube,AiFillGithub,AiOutlineInstagram} from 'react-icons/ai'
const Footer = () => {
  const year=new Date().getFullYear();
  return <footer className='pb-16 pt-10'>
    <div className='container'>
      <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px]'>
        <div>
          <img src={logo} alt="" />
          <p className='text-[16px] leading-7 font-[400] text-textColor'>© {year} freudia Pvt. Ltd.</p>
        </div>
      </div>
    </div>
  </footer>
  
}

export default Footer