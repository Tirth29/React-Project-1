// import logo from './logo.svg';
import './App.css';
import './navbar';
import Navbar from './navbar';
import TextForm from './Components/TextForm';
import About from './Components/about';

function App() {
  return (
    <>

    <Navbar
     title="TextUtils1"
     aboutText="About textutils"/> 
     {/* <Navbar/> */}
     <div className="container-main">
     <TextForm heading="Enter text to analyze"/>
     </div>
     <About/>
    </>
  );
}

export default App;
