import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage'
import Footer from './components/Footer';
import SkillsPage from './components/SkillsPage';
import ProjectsPage from './components/ProjectsPage';
import Menu from './components/Menu';
import Contact from './components/Contact';
import PreSkillsPage from './components/PreSkills';
import PreProjectsPage from './components/PreProjects';


function App() {
  return (
    <>
    <Navbar/>
    <Menu/>
    <HomePage/>
    <PreSkillsPage/>
    <SkillsPage/>
    <PreProjectsPage/>
    <ProjectsPage/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
