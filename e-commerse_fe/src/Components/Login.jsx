import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = ({setUsername}) => {
  let navigate = useNavigate();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [user, setUser] = useState({
    userName: '',
    userPassword: ''
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const formHandler = (e) => {
    e.preventDefault();
    axios.get('http://localhost:9015/user/getby/' + user.userName)
      .then((res) => {
        if (res.data.userPassword === user.userPassword) {
          setShowSuccessMessage(true);
          setUsername(user.userName);
          setUser({
            userName: '',
            userPassword: ''
          });
          setTimeout(() => {
            navigate('/home');
          }, 3000);
        } else {
          setShowErrorMessage(true);
          setTimeout(()=>{navigate('/')},2000);
        }
      })
      .catch((error) => {
        console.error('Error during login:', error);
      });
  };

  return (
    <div className='m-2'>
      <h2 className='text-center'>Login Below</h2>
      {showSuccessMessage && <div className=" h5 alert alert-success m-2  d-flex align-items-center justify-content-center">Login successful!</div>}
      {showErrorMessage && <div className="h6 alert alert-danger m-2 d-flex align-items-center justify-content-center">Login failed please check your crediantials...</div>}
      <form onSubmit={formHandler} method="post">
        <div className='d-flex justify-content-center p-2 m-2'>
          <input type="text" name="userName" value={user.userName} onChange={handleChange} className="form-control w-75" placeholder='Enter your Username' required/>
        </div>

        <div className="d-flex justify-content-center p-2 m-2">
          <input type="text" name="userPassword" value={user.userPassword} onChange={handleChange} className="form-control w-75" placeholder='Enter your Password' required/>
        </div>

        <div className='d-flex justify-content-center'>
          <input type="submit" value="Submit" className="btn btn-outline-success form-control w-25 m-2" />
        </div>
        <div className='d-flex justify-content-center'>
          New user? signup here <Link to='/register' className='mx-2'>Register</Link>
        </div>
      </form>
    </div>
  )
}

export default Login;
