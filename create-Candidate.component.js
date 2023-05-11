import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import swal from '@sweetalert/with-react';
import Container from 'react-bootstrap/esm/Container';
import "./Candidateadd.css"


export default class CreateCandidate extends Component {
    constructor(props) {
        super(props);

        this.onChangeCandidateID = this.onChangeCandidateID.bind(this);
        this.onChangeCandidateName = this.onChangeCandidateName.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeTelephone = this.onChangeTelephone.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onChangeDiscription = this.onChangeDiscription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            CandidateID: '',
            CandidateName: '',
            Address: '',
            Telephone: '',
            Email: '',
            Type: '',
            Discription: '',
            Candidate: []
        }
    }

    //set the CandidateID 
    onChangeCandidateID(e) {
        this.setState({
            CandidateID: e.target.value
        })
    }

    //set the Address
    onChangeAddress(e) {
        this.setState({
            Address: e.target.value
        })
    }

    //set CandidateName
    onChangeCandidateName(e) {
        this.setState({
            CandidateName: e.target.value
        })
    }

   

    //set Telephone
    onChangeTelephone(e) {
        this.setState({
            Telephone: e.target.value
        })
    }

    //Set Email
    onChangeEmail(e) {
        this.setState({
            Email: e.target.value
        })
    }

     //set Type
     onChangeType(e) {
        this.setState({
            Type: e.target.value
        })
    }

    //Set Discription
    onChangeDiscription(e) {
        this.setState({
            Discription: e.target.value
        })
    }

   

    //submit Function
    onSubmit(e) {
        e.preventDefault();
       
        const Candidate = {
            CandidateID: this.state.CandidateID,
            CandidateName: this.state.CandidateName,
            Address: this.state.Address,
            Telephone: this.state.Telephone,
            Email: this.state.Email,
            Type: this.state.Type,
            Discription: this.state.Discription

        }

        console.log(Candidate);

        //validation
        

            axios.post('http://localhost:5000/Candidate/add', Candidate)
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
            <nav className = "navbar navbar-dark bg-dark-nav navbar-expand-lg d-flex" style={{background:"rgb(85 0 114)"}}>
            <div  
            className = "navbar-brand text-center flex-grow-1" ><font face = "Lato" size ="10"> ADD NEW CANDIDATE </font></div> 
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
            <label > <font color="red"><strong>Candidate ID:</strong></font> </label>
            <input type = "Number"
            required className = "form-control"
            placeholder = "Enter Candidate ID"
            value = { this.state.CandidateID }
            onChange = { this.onChangeCandidateID }/>
             </div >
             
              <div className = "form-group" >
            <label > <font color="red"><strong>Candidate Name:</strong></font> </label> 
            <input type = "text"
            required className = "form-control"
            placeholder = "Enter Candidate Name"
            value = { this.state.CandidateName }
            onChange = { this.onChangeCandidateName }/> </div > 
            
             <div className = "form-group" >
            <label ><font color="red"><strong> Address:</strong></font> </label> 
            <input type = "text"
            required className = "form-control"
            placeholder = "Enter Address"
            //maxlength = "10"
            value = { this.state.Address }
            onChange = { this.onChangeAddress }/>
            </div > 
             <div className = "form-group" >
            <label > <font color="red"><strong>Telephone:</strong> </font></label>
             <input type = "Number"
            className = "form-control"
            placeholder = "Enter Telephone"
            value = { this.state.Telephone }
            onChange = { this.onChangeTelephone }/> </div > 
             <div className = "form-group" >
           
            <div className = "form-group" >
            <label > <font color="red"><strong>Email:</strong></font> </label> <
            input type = "email"
            required className = "form-control"
            placeholder = "Enter an Email"
            value = { this.state.Email }
            onChange = { this.onChangeEmail }/>  </div> 

            <div className = "form-group" >
            <label > <font color="red"><strong>Candidate Type:</strong></font> </label> <
            input type = "text"
            required className = "form-control"
            placeholder = "Candidate Type"
            value = { this.state.Type }
            onChange = { this.onChangeType }/>  </div>

            <div className = "form-group" >
            <label > <font color="red"><strong>Brief Discription of Candidate: </strong></font></label> <
            input type = "text"
            required className = "form-control"
            placeholder = "Brief Discription of Candidate"
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



