import React, { Component } from 'react';
import './App.css';
// import Form from './components/form/form';
import Header from './components/header/header';
import Table from './components/table/table';

import API from './service/api';

class App2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
         data: [],
         dataForm: {
             id: 1,
             name: '',
             email: '',
             phonenumber: ''
         },
         isUpdate: false
    }
  }
  
  //Method
  getDataEmp(){
    API.getData().then(result => {
        this.setState({
          data: result
        })        
    })
    .catch(err => {
      console.log(err)
    });
  }

  postDataEmp = () => {
    API.postData(this.state.dataForm).then((res) =>{
      this.getDataEmp();
      this.setState({
        dataForm: {
          id: 1,
          name: '',
          email: '',
          phonenumber: ''
        }
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  putDataEmp = () =>{        
    API.putData(this.state.dataForm.id, this.state.dataForm).then((res) => {
      this.getDataEmp();
      this.setState({
        dataForm: {
          id: 1,
          name: '',
          email: '',
          phonenumber: ''
        }
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  deleteDataEmp = (id) =>{        
    API.deleteData(id).then((res) => {
      this.getDataEmp();
    })
    .catch(err => {
      console.log(err)
    })
  }

  // Event Handling
  handleOnChange= (event) => {
    let dataFormNew = {...this.state.dataForm}
    let idTime = new Date().getTime();

    if(!this.state.isUpdate){
      dataFormNew['id'] = idTime
    }
    
    dataFormNew[event.target.name] = event.target.value
    this.setState({
      dataForm: dataFormNew
    })
  }

  handleUpdate = (data) =>{
    this.setState({
        dataForm: data,
        isUpdate: true
    })
  }

  handleRemove = (id) =>{
    this.deleteDataEmp(id)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.isUpdate){
      this.putDataEmp();    
      this.setState({
          isUpdate: false,
          dataForm: {
            id: 1,
            name: '',
            email: '',
            phonenumber: ''
          },
      })          
    } else{
        this.postDataEmp();   
    }         
  }

  //Lifecycle
  componentDidMount() {    
    this.getDataEmp();        
  }
  render() {
    return (
      <div className="container">  
        <Header title="Rekadia Employee"></Header>  
        {/* <Form name={this.state.dataForm.name} email={this.state.dataForm.email} phonenumber={this.state.dataForm.phonenumber} submit={this.handleSubmit} onchange={this.handleOnChange}></Form> */}
        {/* Form */}
        <form className="form">
          <h2>Form Data</h2>
          <fieldset>
            <input name='name' placeholder="Employee Name" type="text" tabIndex={1} required autoFocus value={this.state.dataForm.name} onChange={this.handleOnChange}/>
          </fieldset>
          <fieldset>
            <input name='email' placeholder="Email Address" type="email" tabIndex={2} required value={this.state.dataForm.email} onChange={this.handleOnChange}/>
          </fieldset>
          <fieldset>
            <input name='phonenumber' placeholder="Phone Number" type="tel" tabIndex={3} required value={this.state.dataForm.phonenumber} onChange={this.handleOnChange}/>
          </fieldset>        
          <fieldset>
            <button name="submit" type="submit" data-submit="...Sending" onClick={(e) => this.handleSubmit(e)}>Submit</button>
          </fieldset>        
        </form> 
        {/* Table */}
        <Table data={this.state.data} update={this.handleUpdate} delete={this.handleRemove}></Table>       
      </div>
    );
  }
}

export default App2;
