import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext'
import axios from 'axios'

function Followers() {
    // Destructuring the values (userData and setUserData) from the context to access the shared state.

    const {userData,setUserData} = useContext(UserContext)
    const [fllowerData,setFllowerData] = useState()
    console.log(userData?.followers_url) 
     // Fetch user repositories data from the GitHub API 
     useEffect(() => {
      axios.get(userData?.followers_url)
      .then((responses) => {
        setFllowerData(responses?.data)
      })
      .catch((error) => {
        console.log(error)
      })
     },[])
     console.log(fllowerData)
  return (
    // Display the list of followers along with their avatars and usernames
    <div className="fllowers">
      <h1>Followers</h1>
      {
        fllowerData && fllowerData.map((fllower) => (
          <div className="fllowers_info">
              <div className="fllower-avater">
                <img src={fllower?.avatar_url} alt="" />
              </div>
              <p>{fllower?.login}</p>
          </div>
        ))
      }
     
    </div>
  )
}

export default Followers