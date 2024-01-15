import React, { useContext, useEffect } from 'react'
import Layout from '../layout/Layout'
import { UserContext } from '../context/UserContext'
import "../assets/css/Profile/profile.css"
import Repositorie from '../component/Repositorie'
import Followers from '../component/Followers'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Profile() {
      // Destructuring the values (userData and setUserData) from the context to access the shared state.

      const {userData,setUserData,setUserName,updateUsername} = useContext(UserContext)
      const {username} = useParams()
     
      useEffect(() => {
      
        axios.get('https://api.github.com/users/' + username)
        .then((respose => {
             // If the request is successful, update the user data state
            setUserData(respose.data)
          })) 
          .catch((error) => {
            console.log(error)
            // console.log(error.response.data)

          })

    },[])
      updateUsername(username)
    

      // console.log(userData)
  return (
    <Layout>
       <div className="profile">
       <div className='userinfo'>
{/* Display user's avatar */}
<div className="profile_image">
    <div className="profile_avatar"   style={{
    backgroundColor: '#8f6ed5',
    backgroundImage: `url("${userData?.avatar_url}")`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '12rem',
    height: '12rem',
  }}
    
    ></div>
</div>
<div className="profile_contents">
<h2></h2>

</div>
  {/* Display user's name and link to their GitHub profile */}
<div className="profile_content">
<h2>{userData?.name}</h2> <span><a href={userData?.url}>@{userData?.login}</a></span>
<p>{userData?.location}</p>

</div> 
<div className="profile_items">
  <div className="repositorie">
    <h2>{userData?.public_repos}</h2>
    <h2>Repositorie</h2>

  </div>
  <div className="flower">
    <h2>{userData?.followers}</h2>
    <h2>Followers</h2>
  </div>
  <div className="flowing">
    <h2>{userData?.following}</h2>
    <h2>Following</h2>
  </div>
</div>
    
    
</div> 
   <div className="otherinfo">
   <Repositorie/>
    <Followers/>
   </div>
       </div>
    </Layout>
  )
}

export default Profile