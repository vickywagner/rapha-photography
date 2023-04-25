import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='max-w-[1240px] m-auto p-4 h-screen'>
    <h1 className='text-2xl font-bold text-center p-4'>Let&apos;s work together</h1>
    <form method='POST' action='https://getform.io/f/6170ada2-cbff-446b-b798-1faaaf1561c6' className='max-w-[600px] m-auto'>
        <div className='grid grid-cols-2 gap-2'>
            <input className='border shadow-lg p-3' type="text" name='name' placeholder='Name' />
            <input className='border shadow-lg p-3' type="email" name='email' placeholder='Email' />
        </div>
        <input className='border shadow-lg p-3 w-full my-2' type="text" name='subject' placeholder='Subject' />
        <textarea className='border shadow-lg p-3 w-full' cols="30" rows="10" name='message' placeholder='Message'></textarea>
        <button className='border shadow-lg p-3 w-full mt-2'>Submit</button>
    </form>
</div>
  )
}

export default Contact