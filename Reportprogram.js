import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
//import { Button } from 'react-bootstrap';

const Program = props => ( <
    tr >
    <
    td > { props.Program.ProgramID } </td> <
    td > { props.Program.ProgramTitle } </td> <
    td > { props.Program.Discription } </td> <
    td >
    <
    Link to = { "/edit/" + props.Program._id } > Edit </Link> | <a href=" " onClick={() => { props.deleteProgram(props.Program._id) }}>Delete</a > </
    td > </tr> 
)

export default class ProgramList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Program: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/Program/')
            .then(response => {
                this.setState({ Program: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    getPosts() {
        axios.get('http://localhost:5000/Program/')
            .then(response => {
                this.setState({ Program: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteProgram(id) {
        if (window.confirm('Are you sure?')) {
            axios.delete('http://localhost:5000/Program/' + id)
                .then(response => { console.log(response.data) });

            this.setState({
                Program: this.state.Program.filter(el => el._id !== id)
            })
        }
    }

    ProgramList() {
        return this.state.Program.map(currentProgram => {
            return <Program Program = { currentProgram }
            deleteProgram = { this.deleteProgram }
            key = { currentProgram._id }
            />;
        })
    }

    filterData(Program, searchKey) {

        this.setState({
            Program: this.state.Program.filter(el => el.ProgramID = searchKey)
        })

    }

    handleSearchArea = (e) => {

        const searchKey = e.currentTarget.value;

        axios.get('http://localhost:5000/Program/').then(response => {

            const resultt = response.data
            const result = resultt.filter((props) =>
                props.ProgramID.includes(searchKey)
            )

            this.setState({ Program: result })

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
            <h4 > Program Report </h4> 
            </div > 
            </div>

            <table class="table table-bordered bg-light" >
            <thead className = "thead-dark align-middle" >
            <tr >
            <th className='align-middle'> Program ID </th> 
            <th className='align-middle'> Program Title </th>   
            <th className='align-middle'> Brief Type of Program </th> 
            
            </tr > 
            </thead> 
            <tbody >
            
             {
                this.state.Program.map(props =>
                    <tr key = { props.ProgramID } >
                    
                    <td > { props.ProgramID } </td>  
                    <td > { props.ProgramTitle } </td>    
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