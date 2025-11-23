import React from 'react'

function Image() {
  return (
    <div className='w-full h-[35vh] bg-red-500 bg-[url("/footer.webp")] bg-cover bg-center'>
        <div className='w-full h-full bg-[#000000d0] text-center flex flex-col justify-center gap-4 leading-12'>
            <h1 className='text-white text-[3.5rem] max-md:text-[2.5rem] font-bold'>Your Reliable Partner for Tyre & Battery</h1>
            <h1 className='text-white text-[3.5rem] max-md:text-[2.5rem] font-bold'>Services in Dubai</h1>

            <p className='text-white text-xl'><span className='text-[#006D77]'>Home /</span> About Us</p>
        </div>
    </div>
  )
}

export default Image