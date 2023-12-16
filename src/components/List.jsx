import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const List = () => {
    const [userData, setUserData] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem("Data")) return navigate('/')
    }, [])
    useEffect(() => {
        axios.get("http://localhost:1000/users")
            .then(response => {
                setUserData(response.data);
            })
            .catch(error => {
                console.error("Axios error:", error);
            });
    }, [])
    const handleDelete = (id) => {
        const confirm = window.confirm(`Do you Delete user ${id}`)
        if (confirm) {

            axios.delete(`http://localhost:1000/users/${id}`)
                .then(response => {
                  
                })
                .catch(error => {
                    console.error("Axios error:", error);
                });
            const filtered = userData?.filter((item) => item?.id !== id)
            setUserData(filtered)
        }
    }
    return (
        <>

            <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
                <h2>List of Users</h2>
                <Link to="/create" className='btn btn-success'>Add New User +</Link>
                {/* Add new user Is Completed */}
                <div className='w-75 rounded bg-white border shadow p-4'>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userData.map((data, id) => (
                                    <tr key={id}>
                                        <td>{data.id}</td>
                                        <td>{data.name}</td>
                                        <td>{data.email}</td>
                                        <td>
                                            <Link to={`/info/${data.id}`} className='btn btn-info' style={{ margin: "5px" }}>More</Link>
                                            <Link to={`/edit/${data.id}`} className='btn btn-primary' style={{ margin: "5px" }}>Edit</Link>
                                            <button onClick={e => handleDelete(data.id)} className='btn btn-danger' style={{ margin: "5px" }}>Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default List