import React from 'react'

export default function Footer() {
  return (
    <>
        <div className='relative container mx-auto px-[20px] sm:top-[-100px] top-[-45px]'>
            <div className='absolute sm:h-[180px] h-[112px] rounded-[15px] bg-violetFotter w-[100%] z-0 flex items-center justify-between top-0 left-0'>
                <div className='z-10'>
                    <img className='sm:flex hidden z-10 absolute top-[50px] left-0' src='image/Frame 36.png' alt=''/>
                    <img className='z-20 absolute sm:top-[-217px] designPro:top-[-110.3px] ip12:top-[-81px] ip12:bottom-0 bottom-[0] sm:left-[-30px] left-[-10px] sm:w-auto w-[35%]' src='image/wepik-photo-mode-2022926-13587.png' alt=''/>
                </div>
                <div className='z-10 absolute
                2xl:left-[20%]  2xl:w-[69%] 
                xl:left-[23%] xl:w-[63%]
                lg:left-[27%] lg:w-[59%]  
                md:left-[37%] md:w-[47%]
                sm:left-[40%] sm:w-[39%]
                left-[33%] w-[52%]
                '>
                    <p className='font-gotham sm:font-bold font-light tracking-[-5%]
                    lg:text-[20px] lg:leading-[20px] 
                    sm:text-[16px] sm:leading-[16px]
                    text-[12px] leading-[12px]
                    '>Thanks for visit my website<br/>
                    If you have any questions you can write me to any of my social networks, I am sure I will answer you.</p>
                </div>
                <div className='z-10 absolute top-0 sm:right-0 right-[-75px]'>
                    <img className='sm:w-auto w-[50%]' src='image/Frame 35.png' alt=''/>
                </div>
            </div>
            <div className='flex sm:flex-row flex-col justify-between items-center sm:pt-[250px] pt-[150px]'>
                <img className='sm:w-[164px] sm:h-[60px] w-[123px] h-[45px]' src='image/Logo.png' alt=''/>
                <div className=''>
                    <ul className='flex gap-[30px] sm:pt-[0px] pt-[35px]'>
                        <li className=''>Home</li>
                        <li className=''>Portfolio</li>
                        <li className=''>Skills</li>
                        <li className=''>About Me</li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}
