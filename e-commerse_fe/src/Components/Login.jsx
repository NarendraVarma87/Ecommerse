import React from 'react'
import { Link } from 'react-router-dom';
const Login = () => {
    const formHandler = (e) =>{
        e.preventDefault();
    }
  return (
    <div className='m-2'>
        <h2 className='text-center'>Login Below</h2>
      <form onSubmit={formHandler} method="post">
        <div  className='d-flex justify-content-center p-2 m-2'>
             <input type="text" name="username" className="form-control w-75" placeholder='Enter your Username'/>
        </div>
        
        <div className="d-flex justify-content-center p-2 m-2">
            <input type="text" name="username" className="form-control w-75" placeholder='Enter your Password' />
        </div>
        
        <div className='d-flex justify-content-center'>
            <input type="submit" value="Submit" className="btn btn-outline-success form-control w-25 m-2"  />
        </div>
        <div className='d-flex justify-content-center'>
            New user? signup here <Link to='/register' className='mx-2'>Register</Link>
        </div>
      </form>
    </div>
  )
}

export default Login
