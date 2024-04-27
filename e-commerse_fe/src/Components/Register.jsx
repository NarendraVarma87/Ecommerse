import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Register = () => {
  let navigate = useNavigate();
  const [showRegisterMessage,  setShowRegisterMessage] = useState(false);
  const [register , setRegister] = useState({
        userName: '',
        userPassword: '',
        userMobile:'',
        userEmail: '',
        profilePicture:''
  });
  const handleChange = (event) => {
    setRegister({ ...register, [event.target.name]: event.target.value });
};
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:9015/user/add-user', register);
      console.log(response.data);
      setShowRegisterMessage(true);
      setTimeout(()=>{ navigate('/login');},3000)
    } catch (error) {
      console.error('Error during registration:', error.response?.data || error.message);
    }
  };

  return (
      <div className='container ' style={{border : '2px solid gray'}}>
      <h2 className='text-center p-2 my-3 mx-2 text-decoration-underline'>New User ? Register Here</h2>
      {showRegisterMessage && <div className='alert alert-success'>Registration Successful...</div>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="" id='userName' className="form-label">Enter UserName : </label>
        <input
          type="text"
          className="form-control p-2 m-2"
          name="userName"
          autoComplete='off'
          value={register.userName}
          onChange={handleChange}
          placeholder="Username"
          required
        />
        <br />
        <label htmlFor="" id='userPassword' className="form-label">Enter Password : </label>
        <input
          type="password"
          className="form-control p-2 m-2"
          placeholder="Password"
          autoComplete='off'
          value={register.userPassword}
          onChange={handleChange}
          name="userPassword"
          required
        />
        <br />
        <label htmlFor="" id='userMobile' className="form-label">Enter MobileNumber : </label>
        <input
          type="number"
          className="form-control p-2 m-2"
          placeholder="Mobile Number"
          autoComplete='off'
          name="userMobile"
          value={register.userMobile}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="" id='userEmail' className="form-label">Enter Email Id : </label>
        <input
          type="text"
          className="form-control p-2 m-2"
          placeholder="Email Address"
          autoComplete='off'
          name="userEmail"
          value={register.userEmail}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="" id='profilePicture' className="form-label">Image URL : </label>
        <input
           type="text"
           className="form-control p-2 m-2"
           placeholder="profilePicture"
           autoComplete="off"
           name="profilePicture"
           value={register.profilePicture}
           onChange={handleChange}
           required
         />
        <br />
        <div className='d-flex justify-content-center'>
          <input type="submit" value="Register" className="form-control btn btn-outline-info mb-4 p-2 mx-1 w-50"/>
        </div>
        
      </form>
    </div>
  )
}

export default Register
