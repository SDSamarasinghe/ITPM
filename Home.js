import {Button, Container,Row} from "react-bootstrap";
import React,{Component, useState} from "react"
import axios from "axios";
import "./Home.css";
//import img1 from "../images/home.jpg";
//import background from "..images/home.jpg";



export default class Home extends Component {
    render(){
    return (
        <div className="main">
            <Container>
                <Row>
                    <div className="intro-text">
                   
                        <h1>CAREERS</h1>
                       

                        <div className="buttonContainer">
                            <a href="/allvacancy">
                            <Button size="lg" className="homebutton1">Career Vacancies Management</Button>
                            </a>
                            <br></br>
                            <a href="/all">
                            <Button size="lg" className="homebutton2">Candidate Management</Button>
                            </a>
                            <br></br>
                            <a href="/allprogram">
                            <Button size="lg" className="homebutton3">Career Guidance Program Management</Button>
                            </a>
                          
                        </div>

                    </div>
                </Row>
            </Container>

        </div>
    );
    }
}

