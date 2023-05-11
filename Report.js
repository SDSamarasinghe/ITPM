import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
//import { Button } from 'react-bootstrap';

const Candidate = props => ( <
    tr >
    <
    td > { props.Candidate.CandidateID } </td> <
    td > { props.Candidate.CandidateName } </td> <
    td > { props.Candidate.Address } </td> <
    td > { props.Candidate.Telephone } </td> <
    td > { props.Candidate.Email } </td> <
    td > { props.Candidate.Type } </td> <
    td > { props.Candidate.Discription } </td> <
    td >
    <
    Link to = { "/edit/" + props.Candidate._id } > Edit </Link> | <a href=" " onClick={() => { props.deleteEmployee(props.Candidate._id) }}>Delete</a > </
    td > </tr> 
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
        if (window.confirm('Are you sure?')) {
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
            key = { currentCandidate._id }
            />;
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
    Report (){ window.print();}

    render() {
        return ( <div className = "container" >
    
            <div style = {
                { float: 'none'}
            } > 
           
            </div>  <br/>
            
            <div className = "row" >
            <div className = "col-lg-9 mt-2 mb-2" >
            <h4 > Candidate Report </h4> 
            </div > 
            </div>

            <table class="table table-bordered bg-light" >
            <thead className = "thead-dark align-middle" >
            <tr >
            <th className='align-middle'> Candidate ID </th> 
            <th className='align-middle'> Candidate Name </th> 
            <th className='align-middle'> Candidate Street Address </th> 
            <th className='align-middle'> Postal Code </th> 
            <th className='align-middle'> E mail </th> 
            <th className='align-middle'>  Type of Candidate </th> 
            <th className='align-middle'> Brief Discription of Candidate </th> 
            </tr > 
            </thead> 
            <tbody >
            
             {
                this.state.Candidate.map(props =>
                    <tr key = { props.CandidateID } >
                    
                    <td > { props.CandidateID } </td>  
                    <td > { props.CandidateName } </td>  
                    <td > { props.Address } </td>  
                    <td > { props.Telephone } </td>  
                    <td > { props.Email } </td>  
                    <td > { props.Type } </td>  
                    <td > { props.Discription } </td>  
                    

                    </tr>
                )

            }

            </tbody> </table >

            <div className = "container" >
           
            
            <input type = "Button"
            onClick = { this.Report }
            value = "Print This Report"
            className = "btn btn-danger"/>
            </div>

            </div>
        )
    }
}





