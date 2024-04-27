import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Users = () => {
    const [res, setRes] = useState([]);
    const [formData,setFormData]=useState({name:'',role:'',email:'',password:''})

 const fetchData= async()=>{ 
         axios.get(`http://localhost:8080/retrieve`,{headers:{
            "authorization":`Bearer ${localStorage.getItem("token")}`,
            "Accept":"application/json",
            "Content-Type":"application/json"
         }})
            .then(response => {
                setRes(response.data);
                console.log(response.data);
            })}
            useEffect(()=>{
                fetchData();
            
    }, 
    [])
    const updateData = async (id) => {
        const response = await axios.put(`http://localhost:8080/users/${id}`, formData)
        fetchData();
        console.log(response.data);
}
const handleDelete=async(id)=>{
    await axios.delete(`http://localhost:8080/users/${id}`)
    .then((response)=>{
        console.log(response.data)
    })
    fetchData()
}

const onChangeHandler=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
};

    return ( 
        <center>
            <h1>Registrations</h1>
        <table border={1}>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Email</th>
                    <th>Password</th>
                </tr>
                {res.map((item,index) =>{
                    return(
                        <tr key={index}>
                          <td>{item._id}</td>
                          <td>{item.name}</td>
                          <td>{item.role}</td>
                          <td>{item.email}</td>
                          <td>{item.password}</td>
                        <td>
                        <input type='text' name='name' placeholder='New Name' onChange={onChangeHandler} />
                        <input type='text' name='role' placeholder='New Role' onChange={onChangeHandler} />
                        <input type='text' name='email' placeholder='New Email' onChange={onChangeHandler} />
                        <input type='password' name='password' placeholder='New Password' onChange={onChangeHandler} />
                        <button onClick={()=>updateData(item._id)}>update</button>
                        <button onClick={()=>handleDelete(item._id)}>delete</button>
                        </td>
                    </tr>
                    )
                })}           
        </table>
        </center>
    );
};

export default Users;   