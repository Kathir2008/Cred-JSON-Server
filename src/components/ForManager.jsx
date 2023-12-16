import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const ForManager = () => {
    const [userData, setUserData] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        axios.get("http://localhost:1000/users")
            .then(response => {
                setUserData(response.data); 
            })
            .catch(error => {
                console.error("Axios error:", error);
            });
    }, [])
    return (
        <>
        
        <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
            <h2>List of Users</h2>
            
            <div className='w-75 rounded bg-white border shadow p-4'>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userData.map((data , id)=>(
                                <tr key={id}>
                                    <td>{data.id}</td>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        <Link to="/" className='btn btn-danger'>Logout</Link>
        </div>
        </>
    )
}

export default ForManager;