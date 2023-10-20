import React from 'react'

export default function Rates() {
  return (
    <div className=''>
        <div className='container mx-auto px-[20px]'>
          <div className='flex sm:flex-row flex-col justify-between items-center flex-wrap border border-rateGray bg-rateBlack rounded-[29px] gap-[10px] xl:px-[100px] sm:px-[50px] sm:py-[60px] text-green py-[20px]'>
              <div className='flex flex-col gap-[10px] lg:w-[215px] lg:h-[140px] w-[160px] h-[100px] lg:text-left text-center lg:my-0 my-[60px]'>
                <span className='font-anton font-normal text-center
                lg:text-[90px] lg:leading-[80px]
                text-[60px] leading-[53px]
                '>90%</span>
                <h1 className='font-gotham font-semibold
                lg:text-[24px] lg:leading-[24px] tracking-[-5%]
                text-[18px] leading-[18px]
                '>Job Success Score on Upwork</h1>
              </div>
              <img className='w-[50px] h-[50px] lg:flex hidden' src='image/Dawn.png' alt=''/>
              <div className='flex flex-col gap-[10px] lg:w-[270px] lg:h-[140px]  w-[200px] h-[100px] lg:text-left text-center lg:my-0 my-[60px]'>
                <span className='font-anton font-normal
                lg:text-[90px] lg:leading-[80px]
                text-[60px] leading-[53px]
                '>&gt;25.000</span>
                <h1 className='font-gotham font-semibold
                lg:text-[24px] lg:leading-[24px] tracking-[-5%]
                text-[18px] leading-[18px]
                '>Duplicates on Figma 
                Community</h1>
              </div>
              <img className='w-[50px] h-[50px] lg:flex hidden' src='image/Dawn.png' alt=''/>
              <div className='flex flex-col gap-[10px] lg:w-[135px] lg:h-[140px]  w-[100px] h-[100px] lg:text-left text-center lg:my-0 my-[60px]'>
                <span className='font-anton font-normal text-center
                lg:text-[90px] lg:leading-[80px]
                text-[60px] leading-[53px]'>&gt;2k</span>
                <h1 className='font-gotham font-semibold
                lg:text-[24px] lg:leading-[24px] tracking-[-5%]
                text-[18px] leading-[18px]'>In Finished 
                Works</h1>
              </div>
          </div> 
        </div>
    </div>
  )
}
