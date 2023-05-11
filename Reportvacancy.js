import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
//import { Button } from 'react-bootstrap';

const Vacancy = props => ( <
    tr >
    <
    td > { props.Vacancy.VacancyID } </td> <
    td > { props.Vacancy.JobTitle } </td> <
    td > { props.Vacancy.Location } </td> <
    td > { props.Vacancy.Discription } </td> <
    td >
    <
    Link to = { "/edit/" + props.Vacancy._id } > Edit </Link> | <a href=" " onClick={() => { props.deleteVacancy(props.Vacancy._id) }}>Delete</a > </
    td > </tr> 
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
        if (window.confirm('Are you sure?')) {
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
            key = { currentVacancy._id }
            />;
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
    Report (){ window.print();}

    render() {
        return ( <div className = "container" >
    
            <div style = {
                { float: 'none'}
            } > 
           
            </div>  <br/>
            
            <div className = "row" >
            <div className = "col-lg-9 mt-2 mb-2" >
            <h4 > Vacancy Report </h4> 
            </div > 
            </div>

            <table class="table table-bordered bg-light" >
            <thead className = "thead-dark align-middle" >
            <tr >
            <th className='align-middle'> Vacancy ID </th> 
            <th className='align-middle'> Job Title </th> 
            <th className='align-middle'> Location </th>  
            <th className='align-middle'> Brief Type of Vacancy </th> 
            
            </tr > 
            </thead> 
            <tbody >
            
             {
                this.state.Vacancy.map(props =>
                    <tr key = { props.VacancyID } >
                    
                    <td > { props.VacancyID } </td>  
                    <td > { props.JobTitle } </td>  
                    <td > { props.Location } </td>    
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