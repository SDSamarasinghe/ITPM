import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';
//import "./vacancylist.css"



const Program = props => ( 
    <tr >
    <td > { props.Program.ProgramID } </td> 
    <td > { props.Program.ProgramTitle } </td> 
    <td > { props.Program.Discription } </td> 
    <td >
    <Link to = { "/ediprogram/" + props.Program._id } > Edit </Link> | <a href=" " onClick={() => { props.deleteProgram(props.Program._id) }}>Delete</a > </td > </tr> 
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
        if (window.confirm('Are you sure you want to delete this Program?')) {
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
            key = { currentProgram._id }/>;
        })
    }

    filterData(Program, searchKey) {

        this.setState({
            Program: this.state.Program.filter(el => el.ProgramTitle = searchKey)
        })

    }

    handleSearchArea = (e) => {

        const searchKey = e.currentTarget.value;

        axios.get('http://localhost:5000/Program/').then(response => {

            const resultt = response.data
            const result = resultt.filter((props) =>
                props.ProgramTitle.includes(searchKey)
            )

            this.setState({ Program: result })

        });

    }

    render() {
        return ( 
            
            
            <div className = "main2" >
                <cpntainer>

            <div >
            <nav className = "navbar navbar-dark bg-dark-nav navbar-expand-lg d-flex" style={{background:"green"}}>
            <Link to = "/" 
            className = "navbar-brand text-center flex-grow-1" ><font face = "Lato" size ="10">        Career Guidance Program Management </font></Link> 
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
            <h4 >ALL PROGRAM DETAILS  </h4> 
            </div > 
            <div className = "col-lg-3 mt-2 mb-2 text-right" style = {
                { float: 'none' }
            } >

            <Link to = "/Reportprogram" >
            <button class="btn btn-success my-4 my-sm-0" type="submit" style={{background:"#fcff18",color:"#000"}}>Export Report As PDF</button></Link>
                

           
            </div>

            <div className = "col-lg-3 mt-2 mb-2" >
            <input className = "form-control"
            type = "search"
            placeholder = "Search by Program Title "
            name = "searchQuery"
            onChange = { this.handleSearchArea } >
            </input> </div > </div>

           
            <table class="table table-bordered bg-light" >
            <thead className = "thead-dark" >
            <tr >
            <th className='align-middle'> Program ID </th> 
            <th className='align-middle'> Program Title </th> 
            <th className='align-middle'> Brief Discription of Vacancy </th> 
            <th className='align-middle'> Update </th> 
            <th className='align-middle'>Delete </th> 
            
            </tr > 
            </thead> 
            <tbody >
            
             {
                this.state.Program.map(props =>
                    <
                    tr key = { props.ProgramTitle } >
                    
                    <td > { props.ProgramID } </td>  
                    <td > { props.ProgramTitle } </td>  
                    <td > { props.Discription } </td>  
                    
                    <td className='text-center'>
                    <Link to = { "/editProgram/" + props._id } className='mb-3 d-block'>  <Button variant = "info btn-sm"> ✏️ </Button> </Link>
                    </td> 
                    <td> 
                    <a href="" onClick={() => { this.deleteProgram(props._id) }}> <Button variant = "danger btn-sm">❌</Button> </a > 
                    </td >

                    </tr>
                )

            }

            </tbody> 
            </table >

            <br></br>

            <Link to = "/createprogram" >
            <center><button type="button" className="btn_add" > Add New Program</button></center>
            </Link >

            <br></br><br></br>

            </cpntainer>
            </div>
        )
    }
}
