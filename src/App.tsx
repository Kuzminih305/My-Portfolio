import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Main} from "./components/main/Main";
import {Skills} from "./components/skills/Skills";
import {Contacts} from "./components/contacts/Contacts";
import {Project} from "./components/projects/Project";
import {Footer} from "./components/footer/Footer";



function App() {
  return (
    <div className="App">
        <Header/>
        <Main/>
        <Skills/>
        <Project/>
        <Contacts/>
        <Footer/>
    </div>
  );
}

export default App;
