import React from 'react';

const Table = (props) => { 
  return (
    <table>   
      <caption>Data Employee</caption>     
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">E-mail</th>
          <th scope="col">Phone Number</th>
          <th scope="col"></th>
        </tr>
      </thead>       
      <tbody>
        { props.data.length > 0 ? 
        props.data.map((item, idx) => (
          <tr key={idx}>
            <th scope="row">{item.name}</th>
            <td>{item.email}</td>
            <td>{item.phonenumber}</td>
            <td className="action">
              <button onClick={()=> props.edit(item)} className="edit" title="Edit Data Nick Pettit?">Edit</button>
              <button onClick={()=> props.remove(item.id)} className="delete" title="Delete Data Nick Pettit?">Delete</button>
            </td>
          </tr>
          ))
        :
        <tr>
          <td colSpan={4}>Data Empty</td>
        </tr>
        }                       
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="3">Data Rekadia Employee</td>
        </tr>
      </tfoot>
    </table>
  );
};

export default Table;