import React from 'react'

const Contact = () => {
  return (
    <section>
      <div className="contact">
        <h2 className='text-center'>Contact Us</h2>
        <form className='control-card'>
         <input type="text" placeholder='Full Name' name='user_name' required />          
         <input type="email" placeholder='Email' name='user_email' required /> 
         <input type="text" placeholder='Subject' name='subject' required />
         <textarea name="message" cols="30" rows="10"></textarea>   
         <button  type='submit' className='btn-primary'>Send Message</button>      
        
        </form>
      </div>
    </section>
  )
}

export default Contact
