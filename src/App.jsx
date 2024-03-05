import './App.scss';
// import Test from './Test';
import Navbar from './components/navbar/Navbar';

function App() {
  
  return (
      <div>
        <section id='Homepage'><Navbar /></section>
        <section>Parallex</section>
        <section id='Services'>Services</section>
        <section >Parallex</section>
        <section id='Portfolio'>Portfolio 1</section>
        <section>Portfolio 2</section>
        <section>Portfolio 3</section>
        <section id='Contact'>Contact</section>
        {/* <Test />
        <Test /> */}
      </div>
  )
}

export default App
