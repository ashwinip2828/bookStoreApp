import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div className='flex h-screen items-center justify-center dark:bg-slate-900 dark:text-white '>
     <form action="">
      <h1 className='text-2xl font-bold'>Contact Us</h1>
      {/* name */}
      <div className='mt-4 space-y-2'>
      <span className='text-lg font-semibold'>Name</span><br />
      <input type="text" placeholder='Enter your name' className='outline-none w-[640px] px-4 py-1 text-sm rounded-md border-[2px]' />
       </div>
       {/* Email */}
      <div className='mt-4 space-y-2'>
      <span className='text-lg font-semibold'>Email</span><br />
      <input type="email" placeholder='Enter your email address' className='outline-none w-[640px] px-4 py-1 text-sm rounded-md border-[2px]' />
       </div>
       {/* Message */}
      <div className='mt-4 space-y-2'>
      <span className='text-lg font-semibold'>Meassage</span><br />
      <textarea type="text" placeholder='Type your message' className='outline-none w-[640px] px-4 py-1 text-sm rounded-md border-[2px]' />
       </div>
      {/* button */}
      <button className='px-2 py-1 bg-blue-500 text-white rounded-md mt-4' type='submit'>Submit</button>
     </form>
    </div>
  )
}

export default Contact

