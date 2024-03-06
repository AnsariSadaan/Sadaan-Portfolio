import './App.scss';
// import Test from './Test';
import Navbar from './components/navbar/Navbar';
import Parallax from './components/parallax/Parallax';
import Profile from './components/profile/Profile';

function App() {
  
  return (
      <div>
        <section id='Homepage'>
          <Navbar />
          <Profile />
        </section>
        <section id='services'><Parallax type="services" /></section>
        <section id='Services'>Services</section>
        <section id='portfolio'><Parallax type="portfolio" /></section>
        <section>Portfolio 1</section>
        <section>Portfolio 2</section>
        <section>Portfolio 3</section>
        <section id='Contact'>Contact</section>
        {/* <Test />
        <Test /> */}
      </div>
  )
}

export default App
