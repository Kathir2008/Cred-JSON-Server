import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function Edit() {
  const[newData , setNewData]=useState({name : '',email:'',phone:'',address:''})

  const { id } = useParams();
  // const [user, setUser] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`http://localhost:1000/users/${id}`) // Replace with your JSON Server URL
      .then((response) => {
        setNewData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  if (!newData) {
    return <div>User not found</div>;
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    axios.put(`http://localhost:1000/users/${id}` , newData)
            .then(response => {
                console.log(response);
                navigate('/user')
            })
            .catch(error => {
                console.error("Axios error:", error);
            });
}
  return (
    <div className="container mt-5">
        <div className="card mx-auto" style={{ maxWidth: '400px' }}>
            <div className="card-body">
                <h5 className="card-title">Update User {newData.name}</h5>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Enter your name"
                            required
                            value={newData.name}
                            onChange={(e)=>setNewData({...newData , name : e.target.value})}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter your email"
                            value={newData.email}
                            required
                            onChange={(e)=>setNewData({...newData , email : e.target.value})}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">
                            Phone Number
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            id="phone"
                            placeholder="Enter your Phone Number"
                            value={newData.phone}
                            required
                            onChange={(e)=>setNewData({...newData , phone : e.target.value})}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Address
                        </label>
                        <textarea class="form-control" id="exampleFormControlTextarea3" rows="3"
                            type="email"
                            placeholder="Enter your Address"
                            value={newData.address}
                            required
                            onChange={(e)=>setNewData({...newData , address : e.target.value})}
                        />
                    </div>
                    <div className="mb-3">
                        <div className="form-group">
                            <label htmlFor="exampleSelect">Position</label>
                            <select disabled className="form-control" id="exampleSelect">
                                <option>Manager</option>
                                <option>Staff</option>
                            </select>
                        </div>
                    </div>
                    <Link  to="/user"  className="btn btn-danger " style={{float:"left"}}>
                        Back
                    </Link>
                    <button type="submit" className="btn btn-primary float-end">
                        Update
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Edit