import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import WorkExperience from "./components/WorkExperience";
import Contact from "./components/Contact";
import About from "./components/About";
import Education from "./components/Education"
import Footer from "./components/Footer"
import "./globalStyles.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import StealingParis from "./components/projects/StealingParis";

import Takeda from "./components/workexperience/Takeda";
import WGBH from "./components/workexperience/WGBH";
import Teacher from "./components/workexperience/Teacher";
import Volunteer from "./components/workexperience/Volunteer";

import GrubStreet from "./components/education/GrubStreet";
import Stanford from "./components/education/Stanford";
import HugoHouse from "./components/education/HugoHouse";
import OneStory from "./components/education/OneStory";
import Palais from "./components/education/Palais";
import Syracuse from "./components/education/Syracuse";

import ScrollToTop from "./ScrollToTop";


function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Header />
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={
                <main>
                  <Home />
                  <About />
                  <Projects />
                  <WorkExperience />
                  <Education />
                </main>
              }
              index
              
            />
            <Route
              path="/stealingparis"
              element={
                <main>
                  <StealingParis />
                </main>
              }
              index
            />
            <Route
              path="/teacher"
              element={
                <main>
                  <Teacher />
                </main>
              }
              index
            />
            <Route
              path="/takeda"
              element={
                <main>
                  <Takeda />
                </main>
              }
              index
            />
            <Route
              path="/volunteer"
              element={
                <main>
                  <Volunteer />
                </main>
              }
              index
            />
            <Route
              path="/wgbh"
              element={
                <main>
                  <WGBH />
                </main>
              }
              index
            />
            <Route
              path="/grubstreet"
              element={
                <main>
                  <GrubStreet />
                </main>
              }
              index
            />
            <Route
              path="/stanford"
              element={
                <main>
                  <Stanford />
                </main>
              }
              index
            />
            <Route
              path="/hugohouse"
              element={
                <main>
                  <HugoHouse />
                </main>
              }
              index
            />
            <Route
              path="/onestory"
              element={
                <main>
                  <OneStory />
                </main>
              }
              index
            />
            <Route
              path="/palais"
              element={
                <main>
                  <Palais />
                </main>
              }
              index
            />
            <Route
              path="/syracuse"
              element={
                <main>
                  <Syracuse />
                </main>
              }
              index
            />
          </Routes>
        </div>
        <Contact />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
