import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage'
import Footer from './components/Footer';
import SkillsPage from './components/SkillsPage';
import ProjectsPage from './components/ProjectsPage';
import Menu from './components/Menu';
import Contact from './components/Contact';


function App() {
  return (
    <>
    <Navbar/>
    <Menu/>
    <HomePage/>
    <SkillsPage/>
    <ProjectsPage/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
