import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import swal from '@sweetalert/with-react';
import Container from 'react-bootstrap/esm/Container';
import "./vacancyadd.css"


export default class CreateVacancy extends Component {
    constructor(props) {
        super(props);
    
        this.onChangeVacancyID = this.onChangeVacancyID.bind(this);
        this.onChangeJobTitle = this.onChangeJobTitle.bind(this);
        this.onChangeLocation = this.onChangeLocation.bind(this);
        this.onChangeDiscription = this.onChangeDiscription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
            VacancyID: '',
            JobTitle: '',
            Location: '',
            Discription: '',
            Vacancy: []
        }
    }    

    //set the VacancyID 
    onChangeVacancyID(e) {
        this.setState({
            VacancyID: e.target.value
        })
    }

    //set the JobTitle
    onChangeJobTitle(e) {
        this.setState({
            JobTitle: e.target.value
        })
    }

    //set Location
    onChangeLocation(e) {
        this.setState({
            Location: e.target.value
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
       
        const Vacancy = {
            VacancyID: this.state.VacancyID,
            JobTitle: this.state.JobTitle,
            Location: this.state.Location,
            Discription: this.state.Discription

        }

        console.log(Vacancy);

        //validation
        

            axios.post('http://localhost:5000/Vacancy/add', Vacancy)
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
            <nav className = "navbar navbar-dark bg-dark-nav navbar-expand-lg d-flex" style={{background:"green"}}>
            <div  
            className = "navbar-brand text-center flex-grow-1" ><font face = "Lato" size ="10"> ADD NEW VACANCY </font></div> 
            <div className = "collpase navbar-collapse flex-grow-0" >
            <form class="form-inline my-2 my-lg-0">
            <ul className = "navbar-nav mr-auto" >
            </ul >
            </form>
            </div > </nav>
            </div>
            <br></br><br></br>


            <div class = "row" >
            <div class = "col-6" >
            <br/ > < br/ > < br/ > < br/ > < br/ > < br/ >
           
            </div> <div class = "col-6" >
            <div class = "myformstyle2" >
            <div className = "card-body" >
            <div className = "col-md-8 mt-4 mx-auto" > </div> 
            <h3 className = "text-center" > 
            <font face = "Poppins" size = "6" > </font> </h3 >  
            <form onSubmit = { this.onSubmit } >


            <div className = "form-group" >
            <label > <font color="red"><font size="5"><strong>Vacancy ID:</strong></font></font> </label>
            <input type = "Number"
            required className = "form-control"
            placeholder = "Enter Vacancy ID"
            value = { this.state.VacancyID }
            onChange = { this.onChangeVacancyID }/>
             </div >
             
              <div className = "form-group" >
            <label > <font color="red"><font size="5"><strong>Job Title:</strong></font></font> </label> 
            <input type = "text"
            required className = "form-control"
            placeholder = "Enter Job Title"
            value = { this.state.JobTitle }
            onChange = { this.onChangeJobTitle }/> </div > 
            
             <div className = "form-group" >
            <label ><font color="red"><font size="5"><strong> Location:</strong></font></font> </label> 
            <input type = "text"
            required className = "form-control"
            placeholder = "Enter Location"
            //maxlength = "10"
            value = { this.state.Location }
            onChange = { this.onChangeLocation }/>
            </div > 
             
             <div className = "form-group" >

            <div className = "form-group" >
            <label > <font color="red"><font size="5"><strong>Brief Discription of Vacancy: </strong></font></font></label> <
            input type = "text"
            required className = "form-control"
            placeholder = "Brief Discription of Vacancy"
            maxlength = "100"
            value = { this.state.Discription }
            onChange = { this.onChangeDiscription }/>  </div>

            
            
            
            
            </div > <div className = "form-group text-right" >
            <center><input type = "submit"  value = "Save" className = "btn_save" ></input></center>
            </div> </form > </div> </div >  </div> </div >  <br/ > < br/ > 
            </Container>
             </div>
        );
    }
}