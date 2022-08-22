import './App.css';
import Header from './components/header/header';
import Form from './components/form/form';
import Table from './components/table/table';
import { useEffect, useState } from 'react';
import API from '../src/services/api';

function App() {
  const initialFormState = { 
    id: 1,
    name: '',
    email: '',
    phonenumber: '' 
  };

  //Local init Data Emp
  const dataEmp = [
    {
      id:1,
      name: 'Grand',
      email: 'grabnd@gmail.com',
      phonenumber: '081202011210'
    },
    {
      id:2,
      name: 'Setyo',
      email: 'setyo@gmail.com',
      phonenumber: '081202011210'
    }
  ];

  const [currentDataForm, setCurrentDataForm] = useState(initialFormState);  
  const [isUpdate, setIsUpdate] = useState(false);
  const [data, setData] = useState({});

  //Method
  const getDataEmp = () => {
    API.getData().then((res) => {
      setData(res)
    }).catch((err) => {
      console.log(err)
    })
  }

  const postDataEmp = () => {
    API.postData(currentDataForm).then((res)=> {
      getDataEmp();      
    }).catch((err) => {
      console.log(err)
    })
  }

  const updateDataEmp = () => {
    API.putData(currentDataForm.id, currentDataForm).then((res) => {
      getDataEmp();
    }).catch((err) => {
      console.log(err);
    })
  }

  const removeDataEmp = (id) => {
    API.deleteData(id).then((res) => {
      getDataEmp();
    }).catch((err) => {
      console.log(err);
    })
  }

  // Event Handling
  const handleOnChange = (e) => {
    let dataFormNew = {...currentDataForm}
    let idTime = new Date().getTime();

    if(!isUpdate){
      dataFormNew['id'] = idTime;
    }

    dataFormNew[e.target.name] = e.target.value;
    setCurrentDataForm(dataFormNew);    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(isUpdate){      
      //local state
      // const newData = data.filter(item => item.id !== currentDataForm.id);
      // setData([...newData, currentDataForm]); 
      setCurrentDataForm(initialFormState);
      //api
      updateDataEmp();
    }
    else {    
      //api
      postDataEmp();
      setCurrentDataForm(initialFormState);
      // local state
      // setData([...data, currentDataForm]);            
    }
  }

  const handleEdit = (data) => {
    setIsUpdate(true);
    setCurrentDataForm(data);    
  }

  const handleRemove = (id) => {
    // local state
    // const newData = data.filter(item => item.id !== id);
    // setData(newData);
    //api
    removeDataEmp(id);
  }

  useEffect(() => {
    getDataEmp();
  }, []);

  return (
    <div className='container'>
      {/* Component Header */}
      <Header title='Rekadia Employee' />      
      {/* Component Form */}
      <Form value={currentDataForm} onchange={handleOnChange} onsubmit={handleSubmit} />
      {/* Component Table */}
      <Table data={data} edit={handleEdit} remove={handleRemove} />
    </div>
  );
}

export default App;
