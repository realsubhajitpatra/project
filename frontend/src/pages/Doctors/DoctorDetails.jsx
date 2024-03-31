import React from 'react'
import doctorImg from '../../assets/images/doctor-img02.png'
const DoctorDetails = () => {
  return <>
  <div className='max-w-[1170px] px-5 mx-auto'>
    <div className='grid md:grid-cols-3 gap-[50px]'>
     <div className='md:col-span-2'>
       <div className='flex items-center gap-5'>
        <figure className='max-w-[200x] max-h-[200px]'>
          <img src={doctorImg} alt="" />
        </figure>
       </div>
     </div>
    </div>
  </div>
  </>
}

export default DoctorDetails