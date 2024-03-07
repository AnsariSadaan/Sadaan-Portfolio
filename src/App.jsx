import './App.scss';
import Contact from './components/contact/Contact';
import Cursor from './components/cursor/Cursor';
// import Test from './Test';
import Navbar from './components/navbar/Navbar';
import Parallax from './components/parallax/Parallax';
import Portfolio from './components/portfolios/Portfolio';
import Profile from './components/profile/Profile';

function App() {
  
  return (
      <div>
        <Cursor />
        <section id='Homepage'>
          <Navbar />
          <Profile />
        </section>
        <section id='services'><Parallax type="services" /></section>
        <section id='Services'>Services</section>
        <section id='portfolio'><Parallax type="portfolio" /></section>
        <Portfolio />
        <section id='Contact'>
          <Contact />
        </section>
        {/* <Test />
        <Test /> */}
      </div>
  )
}

export default App
