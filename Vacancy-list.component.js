import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import "./vacancylist.css"



const Vacancy = props => ( 
    <tr >
    <td > { props.Vacancy.VacancyID } </td> 
    <td > { props.Vacancy.JobTitle } </td> 
    <td > { props.Vacancy.Location } </td> 
    <td > { props.Vacancy.Discription } </td> 
    <td >
    <Link to = { "/editvacancy/" + props.Vacancy._id } > Edit </Link> | <a href=" " onClick={() => { props.deleteVacancy(props.Vacancy._id) }}>Delete</a > </td > </tr> 
)

export default class VacancyList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Vacancy: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/Vacancy/')
            .then(response => {
                this.setState({ Vacancy: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    getPosts() {
        axios.get('http://localhost:5000/Vacancy/')
            .then(response => {
                this.setState({ Vacancy: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteVacancy(id) {
        if (window.confirm('Are you sure you want to delete this vacancy?')) {
            axios.delete('http://localhost:5000/Vacancy/' + id)
                .then(response => { console.log(response.data) });

            this.setState({
                Vacancy: this.state.Vacancy.filter(el => el._id !== id)
            })
        }
    }

    VacancyList() {
        return this.state.Vacancy.map(currentVacancy => {
            return <Vacancy Vacancy = { currentVacancy }
            deleteVacancy = { this.deleteVacancy }
            key = { currentVacancy._id }/>;
        })
    }

    filterData(Vacancy, searchKey) {

        this.setState({
            Vacancy: this.state.Vacancy.filter(el => el.JobTitle = searchKey)
        })

    }

    handleSearchArea = (e) => {

        const searchKey = e.currentTarget.value;

        axios.get('http://localhost:5000/Vacancy/').then(response => {

            const resultt = response.data
            const result = resultt.filter((props) =>
                props.JobTitle.includes(searchKey)
            )

            this.setState({ Vacancy: result })

        });

    }

    render() {
        return ( 
            
            
            <div className = "main2" >
                <cpntainer>

            <div >
            <nav className = "navbar navbar-dark bg-dark-nav navbar-expand-lg d-flex" style={{background:"green"}}>
            <Link to = "/" 
            className = "navbar-brand text-center flex-grow-1" ><font face = "Lato" size ="10"> Vacancy Management </font></Link> 
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
            <h4 >ALL VACANCY DETAILS  </h4> 
            </div > 
            <div className = "col-lg-3 mt-2 mb-2 text-right" style = {
                { float: 'none' }
            } >

            <Link to = "/Reportvacancy" >
            <button class="btn btn-success my-4 my-sm-0" type="submit" style={{background:"#fcff18",color:"#000"}}>Export Report As PDF</button></Link>
                

           
            </div>

            <div className = "col-lg-3 mt-2 mb-2" >
            <input className = "form-control"
            type = "search"
            placeholder = "Search by job title"
            name = "searchQuery"
            onChange = { this.handleSearchArea } >
            </input> </div > </div>

           
            <table class="table table-bordered bg-light" >
            <thead className = "thead-dark" >
            <tr >
            <th className='align-middle'> Vacancy ID </th> 
            <th className='align-middle'> Job Title </th> 
            <th className='align-middle'> Location </th>  
            <th className='align-middle'> Brief Discription of Vacancy </th> 
            <th className='align-middle'> Update </th> 
            <th className='align-middle'>Delete </th> 
            
            </tr > 
            </thead> 
            <tbody >
            
             {
                this.state.Vacancy.map(props =>
                    <
                    tr key = { props.VacancyID } >
                    
                    <td > { props.VacancyID } </td>  
                    <td > { props.JobTitle } </td>  
                    <td > { props.Location } </td>    
                    <td > { props.Discription } </td>  
                    
                    <td className='text-center'>
                    <Link to = { "/editvacancy/" + props._id } className='mb-3 d-block'>  <Button variant = "info btn-sm"> ✏️ </Button> </Link>
                    </td> 
                    <td> 
                    <a href="" onClick={() => { this.deleteVacancy(props._id) }}> <Button variant = "danger btn-sm">❌</Button> </a > 
                    </td >

                    </tr>
                )

            }

            </tbody> 
            </table >

            <br></br>

            <Link to = "/createvacancy" >
            <center><button type="button" className="btn_add" > Add New Vacancy</button></center>
            </Link >

            <br></br><br></br>

            </cpntainer>
            </div>
        )
    }
}
