import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import "./Candidateupdate.css"
import { Container } from 'react-bootstrap';
import swal from '@sweetalert/with-react';
import { Link } from 'react-router-dom';

export default class EditCandidate extends Component {
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

    componentDidMount() {
        axios.get('http://localhost:5000/Candidate/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    CandidateID: response.data.CandidateID,
                    Address: response.data.Address,
                    CandidateName: response.data.CandidateName,
                    Telephone: response.data.Telephone,
                    Email: response.data.Email,
                    Type: response.data.Type,
                    Discription: response.data.Discription,
                })
            })
            .catch(function(error) {
                console.log(error);
            })

        axios.get('http://localhost:5000/Candidate/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        Candidate: response.data.map(Candidate => Candidate.CandidateName),
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })

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

        axios.post('http://localhost:5000/Candidate/update/' + this.props.match.params.id, Candidate)
            .then(res => console.log(res.data));
            swal({
                title: "Done!",
                text: "😀Update Successfully",
                icon: "success",
                button: "Close"
            })
            .then((value) => {
               window.location = '/';
            });
    }

    render() {
        return ( 
            <div className="main3">
                <Container>

            <div >
            <nav className = "navbar navbar-dark bg-dark-nav navbar-expand-lg d-flex" style={{background:"rgb(85 0 114)"}}>
            <Link to = "/" 
            className = "navbar-brand text-center flex-grow-1" ><font face = "Lato" size ="10">UPDATE CANDIDATE </font></Link> 
            <div className = "collpase navbar-collapse flex-grow-0" >
            <form class="form-inline my-2 my-lg-0">
            <ul className = "navbar-nav mr-auto" >
            </ul >
            </form>
            </div > </nav>
            </div>
            <br></br><br></br>


            <div className = "row" >
            <div className = "col-6" >
            <br/ > < br/ > < br/ > < br/ > < br/ > < br/ >
            <img src = "https://c.tenor.com/L5g2mZgoLykAAAAS/office-of-course.gif"
            width = "90%"
            height = "60% " />
            </div> <div class = "col-6" >
            <div class = "myformstyle2" >
            <div className = "card-body," >
            <div className = "col-md-8 mt-4 mx-auto" > </div> 
            <h3 className = "text-center" > 
            <font face = "Poppins" size = "6" > 
            </font> </h3 >  
            <form onSubmit = { this.onSubmit } >
            <div className = "form-group" >
            <label ><font color="red"><b>Candidate ID:</b></font></label>
            <input type = "Number"
            required className = "form-control"
            placeholder = "Enter Candidate ID"
            value = { this.state.CandidateID }
            onChange = { this.onChangeCandidateID }/>
             </div >
             
            <div className = "form-group" >
            <label > <font color="red"><b>Candidate Name:</b></font> </label> 
            <input type = "text"
            required className = "form-control"
            placeholder = "EnterCandidate Name"
            value = { this.state.CandidateName }
            onChange = { this.onChangeCandidateName }/> </div > 
             <div className = "form-group" >
            <label ><font color="red"><b> Address:</b></font> </label> 
            <input type = "text"
            required className = "form-control"
            placeholder = "Enter Address"
            //maxlength = "10"
            value = { this.state.Address }
            onChange = { this.onChangeAddress }/>
            </div > 
             <div className = "form-group" >
            <label > <font color="red"><b>Telephone:</b></font> </label>
             <input type = "text"
            className = "form-control"
            placeholder = "Enter Telephone"
            value = { this.state.Telephone }
            onChange = { this.onChangeTelephone }/> </div > 
             <div className = "form-group" >
           
            <div className = "form-group" >
            <label > <font color="red"><b>Email:</b></font> </label> <
            input type = "email"
            required className = "form-control"
            placeholder = "Enter an Email"
            value = { this.state.Email }
            onChange = { this.onChangeEmail }/>  </div> 

            <div className = "form-group" >
            <label > <font color="red"><b>Candidate Type:</b> </font></label> <
            input type = "text"
            required className = "form-control"
            placeholder = "Candidate Type"
            value = { this.state.Type }
            onChange = { this.onChangeType }/>  </div>

            <div className = "form-group" >
            <label > <font color="red"><b>Brief Discription of Candidate:</b></font> </label> <
            input type = "text"
            required className = "form-control"
            placeholder = "Enter an Brief Discription of Employee"
            value = { this.state.Discription }
            onChange = { this.onChangeDiscription }/>  </div>

            
            
            
            
            </div > <div className = "form-group text-right" >
            <center><input type = "submit" value = "Update" className = "btn_edit"></input></center>
            </div> </form > </div> </div >  </div> </div >  <br/ > < br/ > 
            </Container>
             </div>
        );
    }
}





