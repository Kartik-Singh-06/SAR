import React from 'react'

const Nav = () => {
  return (
    <div className='w-full h-[8vh] flex justify-between items-center bg-[#f1efef] px-4 shadow'>
        <p className='font-black text-[#f79d25] text-3xl'>SAR</p>
        <button className='border-2 border-[#f79d25] py-1 px-3 rounded bg-[#f79d25] text-white cursor-pointer'>Download PDF</button>
    </div>
  )
}

export default Nav