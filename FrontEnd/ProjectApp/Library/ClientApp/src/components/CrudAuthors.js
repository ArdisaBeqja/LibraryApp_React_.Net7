import React,{useState,useEffect} from "react";
import Table from 'react-bootstrap/Table';


const CRUD=()=>{
    
    const authordata=[
        {   id:1,
            name:'ardisa',
            bio:'20 yo',
            createdBy:'dis',
            createdAt:1
        },
        {   id:2,
            name:'dis',
            bio:'20 yo',
            createdBy:'dis',
            createdAt:1,
        }
  

    ]
    const[data,setData]=useState([]);
    useEffect(()=>{
        setData(authordata);
    },[])
    return(
      <table border={1}>
      <thead>
        <tr>
          <th>#</th>
          <th>id</th>
          <th>name</th>
          <th>bio</th>
          <th>createdBy</th>
          <th>createdAt</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>dis</td>
          <td>7/11/2023</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>dis</td>
          <td>7/11/2023</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>dis</td>
          <td>7/11/2023</td>
        </tr>
      
      
      </tbody>
    </table>
    );
}
export default CRUD;