import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function Details() {
  
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:1000/users/${id}`) // Replace with your JSON Server URL
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title mb-4">User Details</h2>
              <ul className="list-group">
                <li className="list-group-item">
                  <strong>ID:</strong> {user.id}
                </li>
                <li className="list-group-item">
                  <strong>Name:</strong> {user.name}
                </li>
                <li className="list-group-item">
                  <strong>Email:</strong> {user.email}
                </li>
                <li className="list-group-item">
                  <strong>Phone Number:</strong> {user.phone}
                </li>
                <li className="list-group-item">
                  <strong>Address:</strong> {user.address}
                </li>
                <li className="list-group-item">
                  <Link to='/user' className='btn btn-primary' style={{float:"left"}}>Back to List</Link>
                  <Link to={`/edit/${user.id}`} className='btn btn-success float-end'>Edit</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details