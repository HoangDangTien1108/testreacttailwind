
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
        <Portfolio/>
      </div>
    </div>
    </> 
  );
}

export default App;
