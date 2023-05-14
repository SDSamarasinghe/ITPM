import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, BrowserRouter as Router, Route } from "react-router-dom";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar.component"
import EditCandidate from "./components/edit-Candidate.component";
import CreateCandidate from "./components/create-Candidate.component";
import CandidateList from "./components/Candidate-list.component";

import EditVacancy from "./components/edit-Vacancy.component";
import CreateVacancy from "./components/create-Vacancy.component";
import VacancyList from "./components/Vacancy-list.component";


import EditProgram from "./components/edit-Program.component";
import CreateProgram from "./components/create-Program.component";
import ProgramList from "./components/Program-list.component";


import Report from "./components/Report";
import Reportvacancy from "./components/Reportvacancy";
import Reportprogram from "./components/Reportprogram";
import Home from "./components/Home";
import Login from "./components/Login";




function App() {

    return (
       
           
        <div className = "container" style={{bacground:"#eff5ff"}}>
        <BrowserRouter>
        <Router>

        
        <br / >
        <Route path = "/"  exact component = {Login}/> 
        <Route path="/Home" component={Home}/> 
        <Route path = "/all"   component = { CandidateList }/>
        <Route path = "/edit/:id" component = { EditCandidate }/> 
        <Route path = "/create" component = { CreateCandidate}/>
        <Route path = "/Report" component = { Report }/>

        <Route path = "/allvacancy"   component = { VacancyList }/>
        <Route path = "/editvacancy/:id" component = { EditVacancy }/> 
        <Route path = "/createvacancy" component = { CreateVacancy}/>
        <Route path = "/Reportvacancy" component = { Reportvacancy }/>

        <Route path = "/allprogram"   component = { ProgramList }/>
        <Route path = "/editprogram/:id" component = { EditProgram }/> 
        <Route path = "/createprogram" component = { CreateProgram}/>
        <Route path = "/Reportprogram" component = { Reportprogram}/>


        

        </Router>
    </BrowserRouter>
    </div>
 
       
        
    );
}

export default App;

