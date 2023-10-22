import React from 'react'

export default function Portfolio() {
  return (
    <>
        <img className='' src='image/Frame 7.png' alt=''/>
        <div className='flex flex-col gap-[21px] '>
            <h2 className='font-gotham font-bold tracking-[-5%] 
            text-[20px] leading-[20px]
                
            '>Mi portal U</h2>   
            <div className='flex gap-[5px] w-full'>
                <button className='whitespace-nowrap flex gap-[5px] border border-violet rounded-[12px] px-[5px] pt-[7px] bg-violetPtf text-tViolet font-gotham font-normal tracking-[-5%]
                text-[9px] leading-[9px]
                
                '>UX Design</button>
                <button className=' flex gap-[5px] border border-violet rounded-[12px] px-[5px] pt-[7px] bg-violetPtf text-tViolet font-gotham font-normal tracking-[-5%]
                text-[9px] leading-[9px]
                
                '>University</button>
                <button className=' flex gap-[5px] border border-violet rounded-[12px] px-[5px] pt-[7px] bg-violetPtf text-tViolet font-gotham font-normal tracking-[-5%]
                text-[9px] leading-[9px]
                
                '>JavaScript</button>
            </div>
        </div>    
        <button className='flex bg-gray items-center justify-center py-[0px] pt-[10px]'>
            <span className='font-gotham font-normal text-[14px] tracking-[-5%]'>Figma community</span>
        </button>               
    </>
  )
}
