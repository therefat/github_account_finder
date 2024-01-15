import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext';
import '../assets/css/serachbox/serachbox.css'
import { useNavigate } from 'react-router-dom';

function SerachBox() {
  // Destructuring the values (userData and setUserData) from the context to access the shared state.

    const {userData,setUserData,username,setUserName,updateUsername} = useContext(UserContext)
     // State variables to store the username and user data
    // const [username,setUserName] =useState('')

    const navigates = useNavigate()
   
    // Function to handle the form submission
      const findAccount = (e) => {
        e.preventDefault();
          // Make a GET request to the GitHub API using axios
      
          navigates(`/profile/${username}`)
        
            
            
       
    
        
    }
  console.log(username)
  return (
    <>
    <div className='searchbox'>
        {/* Form for entering the username and submitting the search */}
        <h2>Find Account</h2> 
        <div>
            <form onSubmit={(e) => findAccount(e)}>
                   {/* Input field for entering the username */}
                <label htmlFor="username"></label>
                <input type="text" value={username} name="username" id="" onChange={(e) => setUserName(e.target.value)} placeholder='Enter Your Username'/> 
                
               
                <input type="submit" value="Find" />
            </form>
        </div>
    </div>
    </>
  )
}

export default SerachBox