import React from 'react'

export default function Productdesign() {
  return (
    <div className=''>
        <div className='container mx-auto px-[20px] flex gap-[19px] items-center'>
            <div className='2xl:w-[52%] xl:w-[65%] lg:w-[85%] md:w-[75%] designPro:w-[65%] w-[75%] flex lg:m-0 navBar:m-auto designPro:mx-[20px] ip12:m-auto mx-[30px]'>
                <div className='flex flex-col gap-[70px] lg:w-[95%] w-full'>
                    <div className='flex flex-col gap-[18px]'>
                        <h1 className='font-anton font-normal tracking-[-3%]
                        2xl:text-[180px] 2xl:leading-[160px]
                        xl:text-[148px] xl:leading-[133px]
                        lg:text-[112px] lg:leading-[101px]
                        md:text-[155px] md:leading-[138px]
                        designPro:text-[110px] designPro:leading-[100px]
                        text-[82px] leading-[75px]
                        '>PRODUCT DESIGNER</h1>
                        <h2 className='whitespace-nowrap font-anton font-normal tracking-[-3%]
                        2xl:text-[102px] 2xl:leading-[100px]
                        xl:text-[84px] xl:leading-[70px]
                        lg:text-[63.5px] lg:leading-[48px]
                        md:text-[88px] md:leading-[80px]
                        designPro:text-[62.5px] designPro:leading-[45px]
                        text-[46.5px] leading-[25px]
                        '>CRISTIAN MUÑOZ</h2>
                    </div>
                    <div className='flex flex-col gap-[40px] navBar:w-full designPro:w-[390px] w-[290px]'>
                        <div>
                            <ul className='flex items-center justify-between'>
                                <li className='flex rounded-[10px] border p-[5px] gap-[10px]'><img className='' src='image/instagram.png' alt=''/></li>
                                <li className='flex rounded-[10px] border p-[5px] gap-[10px]'><img src='image/Figma.png' alt=''/></li>
                                <li className='flex rounded-[10px] border p-[5px] gap-[10px]'><img src='image/linkedin.png' alt=''/></li>
                                <li className='flex rounded-[10px] border p-[5px] gap-[10px]'><img src='image/twitter.png' alt=''/></li>
                                <li className='flex rounded-[10px] border p-[5px] gap-[10px]'><img src='image/telegram.png' alt=''/></li>
                                <li className='flex rounded-[10px] border p-[5px] gap-[10px]'><img src='image/Medium Logo.png' alt=''/></li>
                            </ul>
                        </div>
                        <button className='flex gap-[8px] py-[10px] items-center justify-center bg-gray'>
                            <span className='font-gotham font-normal text-[18px] pt-[11px]'>Download Curriculum Vitae</span>
                            <img src='image/arrow-down.png' alt='' />
                        </button>
                    </div>
                </div>
                <div className='lg:flex hidden h-[24%]'> 
                    <img src='image/Portal.png' alt='' />
                </div>
            </div>
            <div className='lg:flex hidden'>
                <img src='image/colorful-vintage-collage-design 1.png' alt='' />
            </div>
        </div>
    </div>
  )
}
