import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext';

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
    <div>
        {/* Form for entering the username and submitting the search */}
        <h1>Find Account</h1> 
        <div>
            <form onSubmit={(e) => findAccount(e)}>
                   {/* Input field for entering the username */}
                <label htmlFor="username"></label>
                <input type="text" value={username} name="username" id="" onChange={(e) => setUserName(e.target.value)} /> 
                
                <button>Submit</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default SerachBox