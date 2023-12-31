import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext';
import '../assets/css/serachbox/serachbox.css'

function SerachBox() {
  // Destructuring the values (userData and setUserData) from the context to access the shared state.

    const {userData,setUserData} = useContext(UserContext)
     // State variables to store the username and user data
    const [username,setUserName] =useState('')
   
    // Function to handle the form submission
      const findAccount = (e) => {
        e.preventDefault();
          // Make a GET request to the GitHub API using axios
        axios.get('https://api.github.com/users/' + username)
        .then((respose => {
             // If the request is successful, update the user data state
            setUserData(respose.data)
          })) 
          .catch((error) => {
            console.log(error.response.data)
          })
        
            
            
       
    
        
    }
  console.log(userData)
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