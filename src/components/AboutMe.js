import React from 'react'

export default function AboutMe() {
  return (
    <>
    <div className='flex flex-col sm:gap-[0px] gap-[50px]'>
      <div className='flex sm:flex-row flex-col sm:gap-[0px] gap-[50px]'>
        <div className='flex flex-col sm:w-[50%] w-full justify-between sm:gap-0 gap-[50px]'>
          <div className='flex items-center'>
            <h1 className='font-anton font-normal whitespace-nowrap
            text-[64px] leading-[64px]
            
            '>ABOUT ME</h1>
            <img className='xl:w-[35%] w-[25%] h-[30px] xl:pl-[30px] pl-[20px] md:flex hidden' src='image/Zig Zag.png' alt=''/>
          </div>
          <div className='sm:w-[80%] w-[95%]'>
            <p className='font-gothamBlack font-medium tracking-[-5%]
            xl:text-[30px] xl:leading-[30px]
            md:text-[20px] md:leading-[20px]
            sm:text-[17px] sm:leading-[17px]
            text-[20px] leading-[20px]
            '>I am a <span className='bg-gradient-to-r from-red to-orange bg-clip-text text-transparent'>Product Designer</span> and Frontend Developer, I fully understand the process of design and development of a digital product, my job is to make a product usable and visually appealing, through the <span className='bg-gradient-to-r from-red to-orange bg-clip-text text-transparent'>Design Thinking</span> methodology I manage to create products that are endearing to users.
            </p>
          </div>
          <div className='sm:flex hidden'></div>
        </div>
        <div className='sm:w-[50%] w-[100%]'>
          <img className='lg:flex hidden' src='image/Group 30.png' alt='' />
          <img className='lg:hidden flex' src='image/2021-09-13 1.png' alt=''/>
        </div>
      </div>


      <div className='flex sm:flex-row flex-col-reverse sm:gap-[0px] gap-[50px]'>
        <div className='sm:w-[50%] w-[100%]'>
          <img className='lg:flex hidden' src='image/14045773_1176013869122308_1247714166340626266_n 1.png' alt='' />
          <img className='lg:hidden flex' src='image/14045773_1176013869122308_1247714166340626266_n 2.png' alt=''/>
        </div>
        <div className='sm:w-[50%] w-full flex lg:justify-center sm:justify-end justify-start items-center lg:text-left sm:text-right'>
          <p className='font-gothamBlack font-medium tracking-[-5%] sm:w-[80%] w-[95%]
            xl:text-[30px] xl:leading-[30px]
            md:text-[20px] md:leading-[20px]
            sm:text-[17px] sm:leading-[17px]
            text-[20px] leading-[20px]
            '
          >I am passionate about <span className='bg-gradient-to-r from-blueAbout to-greenAbout bg-clip-text text-transparent'>never stop learning</span>, I am constantly training and learning about new and changing <span className='text-greenAbout'>technology</span> trends that way I bring an updated opinion of the Tech industry.</p>
        </div>
      </div>


      <div className='flex sm:flex-row flex-col sm:gap-[0px] gap-[50px]'>
        <div className='sm:w-[50%] w-full flex items-center'>
          <p className='font-gothamBlack font-medium tracking-[-5%] sm:w-[80%] w-[95%]
            xl:text-[30px] xl:leading-[30px]
            md:text-[20px] md:leading-[20px]
            sm:text-[17px] sm:leading-[17px]
            text-[20px] leading-[20px]
          '>My full name is <span className='bg-gradient-to-r from-blueName to-purple bg-clip-text text-transparent'>Cristian David Muñoz Camayo</span> and more than what I said before I am a dreamer, I am proudly <span className='lg:bg-clip-text lg:text-transparent
          lg:bg-gradient-to-r lg:from-yellowCol lg:via-blueCol lg:to-redCol
          sm:text-redCol
          bg-clip-text text-transparent
          bg-gradient-to-r from-yellowCol via-blueCol to-redCol
          '>Colombian</span> and in me you will find a human being with the desire to do his best to help others.</p>
        </div>
        <div className='sm:w-[50%] w-[100%]'>
          <img className='lg:flex hidden' src='image/IMG_20220724_092026 1.png' alt='' />
          <img className='lg:hidden flex' src='image/IMG_20220724_092026 3.png' alt=''/>
        </div>
      </div>
    </div>
    </>
  )
}
