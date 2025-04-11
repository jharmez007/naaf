import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ScrollToTop } from './hooks';
import { Navbar, Footer, PostDetails } from './components';
import { AboutUs, Contact, Home, SignUpForm, Support, Team, Blog } from './pages';
import { wakeServer } from './services/wakeServices';
import './App.scss';

const MainLayout = ({ children }) => (
  <>
    <Navbar />
    <div className="h-[124px] md:h-20" />
    {children}
    <Footer />
  </>
);

const App = () => {
  

  useEffect(() => {
    const wakeUpServer = async () => {
      try {
        const response = await wakeServer({url: 'https://igpi-frontend.vercel.app/'});
        if (response?.status === 200) {
          console.log(response.data);
        } else {
          console.log(response?.message);
        }
      } catch (error) {
        console.error('Error waking up the server:', error);
        console.log("An error occurred. Please try again.");
      }
    };

    wakeUpServer();
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app__container scroll-smooth snap-none">
        <Routes>
          {/* Routes with Navbar and Footer */}
          <Route path="/" element={<MainLayout><Home /></MainLayout>} />
          <Route path="/home" element={<MainLayout><Home /></MainLayout>} />
          <Route path="/aboutUs" element={<MainLayout><AboutUs /></MainLayout>} />
          <Route path="/team" element={<MainLayout><Team /></MainLayout>} />
          <Route path="/support" element={<MainLayout><Support /></MainLayout>} />
          <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
          <Route path="/blog" element={<MainLayout><Blog /></MainLayout>} />
          <Route path="/post/:id" element={<MainLayout><PostDetails /></MainLayout>} />

          {/* Route without Navbar and Footer */}
          <Route path="/signupform" element={<SignUpForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
