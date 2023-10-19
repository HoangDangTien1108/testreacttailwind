import React from 'react'

export default function Navbar() {
  return (
    <div className=''>
        <div className='container m-auto flex px-[20px] items-center justify-between pt-[50px] pb-[30px] w-full'>
            <img src='image/Logo.png' alt=''/>
            <div className='navBar:flex hidden'>
                <ul className='flex gap-[30px]'>
                    <li className=''>Home</li>
                    <li className=''>Portfolio</li>
                    <li className=''>Skills</li>
                    <li className=''>About Me</li>
                </ul>
            </div>
            <div className='gap-[20px] items-center justify-center navBar:flex hidden'>
                <div className='flex rounded-[32px] p-1 gap-1 bg-yellow items-center justify-center'>
                    <div className='w-[24px] h-[24px] rounded-[12px] bg-white'>
                    </div>
                    <img src='image/moon.png' alt=''/>
                </div>
                <button className='py-[10px] px-[24px] flex gap-[5px] rounded bg-navBarViolet'>
                    <span>Contact Me</span>
                </button>
            </div>
            <img className='navBar:hidden flex' src='image/menu.png' alt=''/>
        </div>
    </div>
  )
}
