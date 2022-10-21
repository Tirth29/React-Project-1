// import logo from './logo.svg';
import './App.css';
import './navbar';
import Navbar from './navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
    <Navbar
     title="TextUtils1"
     aboutText="About textutils"/> 
     {/* <Navbar/> */}
     <TextForm heading="Enter text to analyze"/>
    </>
  );
}

export default App;
