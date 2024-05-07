import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserProfile = ({ username }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:9015/user/getby/${username}`)
      .then(response => {
        setUserData(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
        setUserData(null);
      });
  }, [username]);

  return (
    <div>
        {userData ? (
            <div className='text-center'>
                <h2 className='text-center'>User Profile</h2>
                <h5 className='text-center m-2'>Welcome {userData.userName}</h5>
                <div className='d-flex justify-content-center'>
                    <img src={userData.profilePicture} alt="Profile" style={{ borderRadius: '50%', width: '300px', height: '300px', objectFit: 'cover' }} />
                </div>
                <p>Username: {userData.userName}</p>
                <p>Email: {userData.userEmail}</p>
                <p>Mobile: {userData.userMobile}</p>
            </div>
        ) : (
            <p>Loading user data...</p>
        )}
    </div>
  );
};

export default UserProfile;
