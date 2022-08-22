import axios from "axios";
const url = 'http://localhost:3001';

const GET = (path) => {
    const promise = new Promise((resolve, reject) => {
        axios.get(`${url}/${path}`)
        .then((res)=>{
            resolve(res.data);
        }, (err) => {
            reject(err);
        })
    })
    return promise;
}
const POST = (path, data) => {
    const promise = new Promise((resolve, reject) => {
        axios.post(`${url}/${path}`, data)
        .then((res)=>{
            resolve(res.data);
        }, (err) => {
            reject(err);
        })
    })
    return promise;
}
const PUT = (path, id, data) => {
    const promise = new Promise((resolve, reject) => {
        axios.put(`${url}/${path}/${id}`, data)
        .then((res)=>{
            resolve(res.data);
        }, (err) => {
            reject(err);
        })
    })
    return promise;
}
const DELETE = (path, id) => {
    const promise = new Promise((resolve, reject) => {
        axios.delete(`${url}/${path}/${id}`)
        .then((res)=>{
            resolve(res.data);
        }, (err) => {
            reject(err);
        })
    })
    return promise;
}
const getData = () => GET('employees');
const postData = (data) => POST('employees',data);
const putData = (id, data) => PUT('employees', id, data);
const deleteData = (id) => DELETE('employees', id);

// const getDataUser = () => GET('users');
// const postDataUser = (data) => POST('users',data);
// const putDataUser = (id, data) => PUT('users', id, data);
// const deleteDataUser = (id) => DELETE('users', id);

const API = {
    getData,
    postData,
    putData,
    deleteData,    
}

export default API;