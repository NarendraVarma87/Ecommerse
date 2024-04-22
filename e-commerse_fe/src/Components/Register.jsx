import React from 'react'

const Register = () => {
  return (
      <div className='container ' style={{border : '2px solid gray'}}>
      <h2 className='text-center p-2 my-3 mx-2 text-decoration-underline'>New User ? Register Here</h2>
      <form>
        <label htmlFor="" id='userName' className="form-label">Enter UserName : </label>
        <input
          type="text"
          className="form-control p-2 m-2"
          name="userName"
          autoComplete='off'
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
          name="userPassword"
          required
        />
        <br />
        <label htmlFor="" id='userMobileNumber' className="form-label">Enter MobileNumber : </label>
        <input
          type="number"
          className="form-control p-2 m-2"
          placeholder="Mobile Number"
          autoComplete='off'
          name="userMobileNumber"
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
          required
        />
        <br />
        <label htmlFor="" id='userPhoto' className="form-label">Select Photo : </label>
        <input
  type="file"
  className="form-control p-2 m-2"
  placeholder="photo"
  autoComplete="off"
  name="userPhoto"
  required
/>

        <br />
        <input type="submit" value="Register" className="form-control btn btn-outline-info mb-4 p-2 mx-1"/>
      </form>
    </div>
  )
}

export default Register
