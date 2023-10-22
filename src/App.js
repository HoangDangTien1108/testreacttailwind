
import './App.css';
import Productdesign from './components/Productdesign';
import Navbar from './components/Navbar';
import Rates from './components/Rates';
import Portfolio from './components/Portfolio';

function App() { 

  return (
    <>
    <div className='LandingWeb bg-black text-white'>
      <header className='flex flex-col gap-[60px]'>
        <Navbar/>
        <Productdesign/>
      </header>
      <div className='content my-[200px] flex flex-col gap-[200px]'>
        <Rates/>
          <div className='Portfolio'>
          <div className='container mx-auto px-[20px] flex flex-col gap-[36px]'>
            <h1 className='font-anton font-normal text-[64px] leading-[64px]'>PORTFOLIO</h1>
            <div className='flex flex-wrap gap-[33px]'>
              <div className='border border-grayPtf rounded-[10px] p-[30px] flex flex-col gap-[23px] xl:w-[23%] lg:w-[31%] sm:w-[47%] w-[100%]'>
                <Portfolio/>
              </div>
              <div className='border border-grayPtf rounded-[10px] p-[30px] flex flex-col gap-[23px] xl:w-[23%] lg:w-[31%] sm:w-[47%] w-[100%]'>
                <Portfolio/>
              </div>
              <div className='border border-grayPtf rounded-[10px] p-[30px] flex flex-col gap-[23px] xl:w-[23%] lg:w-[31%] sm:w-[47%] w-[100%]'>
                <Portfolio/>
              </div>
              <div className='border border-grayPtf rounded-[10px] p-[30px] flex flex-col gap-[23px] xl:w-[23%] lg:w-[31%] sm:w-[47%] w-[100%]'>
                <Portfolio/>
              </div>
              <div className='border border-grayPtf rounded-[10px] p-[30px] lg:flex hidden flex-col gap-[23px] xl:w-[23%] w-[31%]'>
                <Portfolio/>
              </div>
              <div className='border border-grayPtf rounded-[10px] p-[30px] lg:flex hidden flex-col gap-[23px] xl:w-[23%] w-[31%]'>
                <Portfolio/>
              </div>
              <div className='border border-grayPtf rounded-[10px] p-[30px] xl:flex hidden flex-col gap-[23px] xl:w-[23%] w-[31%]'>
                <Portfolio/>
              </div>
              <div className='border border-grayPtf rounded-[10px] p-[30px] xl:flex hidden flex-col gap-[23px] xl:w-[23%] w-[31%]'>
                <Portfolio/>
              </div>
            </div>
          </div>   
        </div>
      </div>
    </div>
    </> 
  );
}

export default App;
