import React, { useContext } from 'react'
import Layout from '../layout/Layout'
import { UserContext } from '../context/UserContext'
import "../assets/css/Profile/profile.css"

function Profile() {
      // Destructuring the values (userData and setUserData) from the context to access the shared state.

      const {userData,setUserData} = useContext(UserContext)

      console.log(userData)
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
    <h2>repositorie</h2>

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
       </div>
    </Layout>
  )
}

export default Profile