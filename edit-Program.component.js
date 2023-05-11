import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
//import "./vacancyedit.css"
import { Container } from 'react-bootstrap';
import swal from '@sweetalert/with-react';
import { Link } from 'react-router-dom';

export default class EditProgram extends Component {
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

    componentDidMount() {
        axios.get('http://localhost:5000/Program/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    ProgramID: response.data.ProgramID,
                    ProgramTitle: response.data.ProgramTitle,
                    Discription: response.data.Discription,
                })
            })
            .catch(function(error) {
                console.log(error);
            })

        axios.get('http://localhost:5000/Program/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        Program: response.data.map(Program =>Program.ProgramTitle),
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })

    }

    //set the ProgramID 
    onChangeProgramID(e) {
        this.setState({
            ProgramID: e.target.value
        })
    }

    //set the Programtitle
    onChangeProgramTitle(e) {
        this.setState({
            ProgramTitle: e.target.value
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

        const Program = {
            ProgramID: this.state.ProgramID,
            ProgramTitle: this.state.ProgramTitle,
            Discription: this.state.Discription

        }

        console.log(Program);

        axios.post('http://localhost:5000/Program/update/' + this.props.match.params.id, Program)
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
            <nav className = "navbar navbar-dark bg-dark-nav navbar-expand-lg d-flex" style={{background:"green"}}>
            <Link to = "/" 
            className = "navbar-brand text-center flex-grow-1" ><font face = "Lato" size ="10">UPDATE PROGRAM </font></Link> 
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
           
            </div> <div class = "col-6" >
            <div class = "myformstyle2" >
            <div className = "card-body," >
            <div className = "col-md-8 mt-4 mx-auto" > </div> 
            <h3 className = "text-center" > 
            <font face = "Poppins" size = "6" > 
            </font> </h3 >  
            <form onSubmit = { this.onSubmit } >
            <div className = "form-group" >
            <label ><font color="red"><b>Program ID:</b></font></label>
            <input type = "Number"
            required className = "form-control"
            placeholder = "Enter Program ID"
            value = { this.state.ProgramID }
            onChange = { this.onChangeProgramID }/>
             </div >
             
            <div className = "form-group" >
            <label > <font color="red"><b>Program Title:</b></font> </label> 
            <input type = "text"
            required className = "form-control"
            placeholder = "Enter Program Title"
            value = { this.state.ProgramTitle }
            onChange = { this.onChangeProgramTitle }/> </div >  
             
             <div className = "form-group" >
           
    

            <div className = "form-group" >
            <label > <font color="red"><b>Brief Discription of Program:</b></font> </label> <
            input type = "text"
            required className = "form-control"
            placeholder = "Enter an Brief Discription of Vacancy"
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
