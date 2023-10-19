
import './App.css';
import Productdesign from './components/Productdesign';
import Navbar from './components/Navbar';

function App() {

  return (
    <>
    <div className='LandingWeb bg-black text-white'>
      <header className='flex flex-col gap-[60px]'>
        <Navbar/>
        <Productdesign/>
      </header>
      <nav></nav>
    </div>
    </> 
  );
}

export default App;
