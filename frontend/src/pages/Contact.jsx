import React from 'react'

const Contact = () => {
  return <section>
    <div className='px-4 mx-auto max-w-screen-md'>
      <h2 className='heading text-center'>Contact Us</h2>
      <p>Get a technical issue? Want to send feedback about a beta featur? Let us know.</p>
    </div>
    <form action="#" className='space-y-8'>
      <div>
        <label htmlFor="email" className='form__label'>
         Your Email
        </label>
        <input type="email" id='email' placeholder='example@gmail.com' className='form__input mt-1'/>
      </div>
    </form>
  </section>
}

export default Contact