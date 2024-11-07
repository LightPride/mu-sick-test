import { Home } from './components/home';
import { Header } from './components/header';
import { About } from './components/about';
import { Hero } from './components/hero-block';
import { OurMusicians } from './components/our-musicians';
import { WorkWithUs } from './components/work-with-us';
import { OurTeam } from './components/our-team';
import { News } from './components/news';
import { Footer } from './components/footer';
import { EventComponent } from './components/event/event';
import { useEffect, useState } from 'react';
import { Loader } from './components/loader';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import CustomScrollbar from '../customs';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const isNotAppleDevice = () => {
    return (
      !/iPad|iPhone|iPod|Macintosh/.test(navigator.userAgent) || window.MSStream
    );
  };

  useEffect(() => {
    if (isNotAppleDevice()) {
      console.log('Win');
      document.body.classList.add('not-mac-user');
    } else {
      document.body.classList.remove('not-apple-device');
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <div className="backdrop" />
      <Header />
      <main>
        <Home />
        <About />
        <EventComponent />
        <Hero />
        <OurMusicians />
        <WorkWithUs />
        <News />
        <OurTeam />
        <ToastContainer theme="dark" closeOnClick />
        <CustomScrollbar>
          <p className="asdf">
            ASDFGASDFGASDFGASDFGASDFGASDFGASDFGASDFGASDFG ASDFGASDFGASDFG
            ASDFGASDFGASDFG ASDFGASDFGASDFG ASDFGASDFGASDFG ASDFGASDFGASDFG
          </p>
          <p className="asdf">
            ASDFGASDFGASDFG ASDFGASDFGASDFG ASDFGASDFGASDFG ASDFGASDFGASDFG
            ASDFGASDFGASDFG ASDFGASDFGASDFG ASDFGASDFGASDFG ASDFGASDFGASDFG
            ASDFGASDFGASDFG ASDFGASDFGASDFG ASDFGASDFGASDFG ASDFGASDFGASDFG
            ASDFGASDFGASDFG ASDFGASDFGASDFG ASDFGASDFGASDFG ASDFGASDFGASDFG
            ASDFGASDFGASDFG ASDFGASDFGASDFG ASDFGASDFGASDFG ASDFGASDFGASDFG
            ASDFGASDFGASDFG ASDFGASDFGASDFG ASDFGASDFGASDFG ASDFGASDFGASDFG
            ASDFGASDFGASDFG ASDFGASDFGASDFG ASDFGASDFGASDFG ASDFGASDFGASDFG
          </p>
        </CustomScrollbar>
      </main>
      <Footer />
    </>
  );
}
export default App;
