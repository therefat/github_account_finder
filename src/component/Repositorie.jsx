import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext'
import axios from 'axios'

function Repositorie() {
    // Destructuring the values (userData and setUserData) from the context to access the shared state.

    const {userData,setUserData} = useContext(UserContext)
    const [repoData,setRepoData] = useState()
    console.log(userData?.repos_url) 
     // Fetch user repositories data from the GitHub API
    useEffect(() => {
        axios.get(userData?.repos_url)
        .then(resp => {
           
            setRepoData(resp?.data)
        }) 
        .catch(erro => {
            console.log(erro)
        })
    },[])
    console.log(repoData)
  return (
    <div>Repositorie</div>
  )
}

export default Repositorie