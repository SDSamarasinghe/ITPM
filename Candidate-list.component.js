import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import "./Candidatelist.css"



const Candidate = props => ( 
    <tr >
    <td > { props.Candidate.CandidateID } </td> 
    <td > { props.Candidate.CandidateName } </td> 
    <td > { props.Candidate.Address } </td> 
    <td > { props.Candidate.Telephone } </td> 
    <td > { props.Candidate.Email } </td> 
    <td > { props.Candidate.Type } </td> 
    <td > { props.Candidate.Discription } </td> 
    <td >
    <Link to = { "/edit/" + props.Candidate._id } > Edit </Link> | <a href=" " onClick={() => { props.deleteCandidate(props.Candidate._id) }}>Delete</a > </td > </tr> 
)

export default class CandidateList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Candidate: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/Candidate/')
            .then(response => {
                this.setState({ Candidate: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    getPosts() {
        axios.get('http://localhost:5000/Candidate/')
            .then(response => {
                this.setState({ Candidate: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteCandidate(id) {
        if (window.confirm('Are you sure you want to delete this candidate?')) {
            axios.delete('http://localhost:5000/Candidate/' + id)
                .then(response => { console.log(response.data) });

            this.setState({
                Candidate: this.state.Candidate.filter(el => el._id !== id)
            })
        }
    }

    CandidateList() {
        return this.state.Candidate.map(currentCandidate => {
            return <Candidate Candidate = { currentCandidate }
            deleteCandidate = { this.deleteCandidate }
            key = { currentCandidate._id }/>;
        })
    }

    filterData(Candidate, searchKey) {

        this.setState({
            Candidate: this.state.Candidate.filter(el => el.CandidateName = searchKey)
        })

    }

    handleSearchArea = (e) => {

        const searchKey = e.currentTarget.value;

        axios.get('http://localhost:5000/Candidate/').then(response => {

            const resultt = response.data
            const result = resultt.filter((props) =>
                props.CandidateName.includes(searchKey)
            )

            this.setState({ Candidate: result })

        });

    }

    render() {
        return ( 
            
            
            <div className = "main2" >
                <cpntainer>

            <div >
            <nav className = "navbar navbar-dark bg-dark-nav navbar-expand-lg d-flex" style={{background:"rgb(85 0 114)"}}>
            <Link to = "/" 
            className = "navbar-brand text-center flex-grow-1" ><font face = "Lato" size ="10"> Candidate Management </font></Link> 
            <div className = "collpase navbar-collapse flex-grow-0" >
            <form class="form-inline my-2 my-lg-0">
            <ul className = "navbar-nav mr-auto" >
            </ul >
            </form>
            </div > </nav>
            </div>
            <br></br><br></br>

    
            <div style = {
                { float: 'none'}
            } > 
           
            </div>  <br/>
            
            <div className = "row" >
            <div className = "col-lg-9 mt-2 mb-2" >
            <h4 >ALL CANDIDATE DETAILS  </h4> 
            </div > 
            <div className = "col-lg-3 mt-2 mb-2 text-right" style = {
                { float: 'none' }
            } >

            <Link to = "/Report" >
            <button class="btn btn-success my-4 my-sm-0" type="submit" style={{background:"#fcff18",color:"#000"}}>Export Report As PDF</button></Link>
                

           
            </div>

            <div className = "col-lg-3 mt-2 mb-2" >
            <input className = "form-control"
            type = "search"
            placeholder = "Search by Candidate Name"
            name = "searchQuery"
            onChange = { this.handleSearchArea } >
            </input> </div > </div>

           
            <table class="table table-bordered bg-light" >
            <thead className = "thead-dark" >
            <tr >
            <th className='align-middle'> Candidate ID </th> 
            <th className='align-middle'> Candidate Name </th> 
            <th className='align-middle'> Candidate Address </th> 
            <th className='align-middle'> Telephone </th> 
            <th className='align-middle'> E mail </th> 
            <th className='align-middle'> Candidate Type </th> 
            <th className='align-middle'> Brief Discription of Candidate </th> 
            <th className='align-middle'> Update </th> 
            <th className='align-middle'>Delete </th> 
            
            </tr > 
            </thead> 
            <tbody >
            
             {
                this.state.Candidate.map(props =>
                    <
                    tr key = { props.CandidateID } >
                    
                    <td > { props.CandidateID } </td>  
                    <td > { props.CandidateName } </td>  
                    <td > { props.Address } </td>  
                    <td > { props.Telephone } </td>  
                    <td > { props.Email } </td>  
                    <td > { props.Type } </td>  
                    <td > { props.Discription } </td>  
                    
                    <td className='text-center'>
                    <Link to = { "/edit/" + props._id } className='mb-3 d-block'>  <Button variant = "info btn-sm"> ✏️ </Button> </Link>
                    </td> 
                    <td> 
                    <a href="" onClick={() => { this.deleteCandidate(props._id) }}> <Button variant = "danger btn-sm">❌</Button> </a > 
                    </td >

                    </tr>
                )

            }

            </tbody> 
            </table >

            <br></br>

            <Link to = "/create" >
            <center><button type="button" className="btn_add" > Add New Candidate</button></center>
            </Link >

            <br></br><br></br>

            </cpntainer>
            </div>
        )
    }
}





