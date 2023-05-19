import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import swal from '@sweetalert/with-react';
import Container from 'react-bootstrap/esm/Container';
//import "./vacancyadd.css"
import "./programadd.css";


export default class CreateProgram extends Component {
    constructor(props) {
        super(props);
    
        this.onChangeProgramID = this.onChangeProgramID.bind(this);
        this.onChangeProgramTitle = this.onChangeProgramTitle.bind(this);
        this.onChangeDiscription = this.onChangeDiscription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
            ProgramID: '',
            ProgramTitle: '',
            Discription: '',
            Program: []
        }
    }    

    //set the ProgramID 
    onChangeProgramID(e) {
        this.setState({
            ProgramID: e.target.value
        })
    }

    //set the ProgramTitle
    onChangeProgramTitle(e) {
        this.setState({
            ProgramTitle: e.target.value
        })
    }

   

    //set Discription
    onChangeDiscription(e) {
        this.setState({
            Discription: e.target.value
        })
    }

   

    //submit Function
    onSubmit(e) {
        e.preventDefault();
       
        const Program = {
            ProgramID: this.state.ProgramID,
            ProgramTitle: this.state.ProgramTitle,
            Discription: this.state.Discription

        }

        console.log(Program);

        //validation
        

            axios.post('http://localhost:5000/Program/add', Program)
                .then(res => console.log(res.data));

            swal({
                    title: "Done!",
                    text: "😍Added Successfully",
                    icon: "success",
                    button: "Close"
                })
                .then((value) => {
                   window.location = '/';
                });
        
    }

    render() {
        return ( 
            <div className = "main1">
                <Container>

            <div>
            <nav className = "navbar navbar-dark bg-dark-nav navbar-expand-lg d-flex" style={{background:"lightblue"}}>
            <div  
            className = "navbar-brand text-center flex-grow-1" ><font face = "Lato" size ="10"><font color="black">ADD NEW PROGRAM </font> </font></div> 
            <div className = "collpase navbar-collapse flex-grow-0" >
            <form class="form-inline my-2 my-lg-0">
            <ul className = "navbar-nav mr-auto" >
            </ul >
            </form>
            </div > </nav>
            </div>
            <br></br><br></br><br></br><br></br>
           

            <div class = "row" >
            <div class = "col-6" >
            <br/ > < br/ > < br/ > < br/ > < br/ > < br/ >
            <img src = "https://c.tenor.com/L5g2mZgoLykAAAAS/office-of-course.gif"
            width = "90%"
            height = "60% " />
            </div> <div class = "col-6" >
            <div class = "myformstyle2" >
            <div className = "card-body" >
            <div className = "col-md-8 mt-4 mx-auto" > </div> 
            <h3 className = "text-center" > 
            <font face = "Poppins" size = "6" > </font> </h3 >  
            <form onSubmit = { this.onSubmit } >


            <div className = "form-group" >
            <label > <font color="red"><font size="4"><strong>Program ID:</strong></font></font> </label>
            <input type = "Number"
            required className = "form-control"
            placeholder = "Enter Program ID"
            value = { this.state.ProgramID }
            onChange = { this.onChangeProgramID }/>
             </div >
             
              <div className = "form-group" >
            <label > <font color="red"><font size="4"><strong>Program Title:</strong></font></font> </label> 
            <input type = "text"
            required className = "form-control"
            placeholder = "Enter Program Title"
            value = { this.state.ProgramTitle }
            onChange = { this.onChangeProgramTitle }/> </div > 
             
             
             <div className = "form-group" >

            <div className = "form-group" >
            <label > <font color="red"><font size="4"><strong>Brief Discription of Program: </strong></font></font></label> <
            input type = "text"
            required className = "form-control"
            placeholder = "Brief Discription of Program"
            maxlength = "100"
            value = { this.state.Discription }
            onChange = { this.onChangeDiscription }/>  </div>

            
            
            
            <br></br>
            </div > <div className = "form-group text-right" >
            <center><input type = "submit"  value = "Save" className = "btn_save" ></input></center>
            </div> </form > </div> </div >  </div> </div >  <br/ > < br/ > 
            </Container>
             </div>
        );
    }
}