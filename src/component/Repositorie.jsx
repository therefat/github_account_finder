import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext'
import '../assets/css/Repositorie/repositorie.css'
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
            const sortedRepositories = resp?.data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
            setRepoData(sortedRepositories)
        }) 
        .catch(erro => {
            console.log(erro)
        })
    },[])
    console.log(repoData)
  return (
    <div>
        <div>
        {/* Displaying a list of repositories with their information. */}
            {
                repoData && repoData.map((repositorie) => <>
                <div className='repo-info'>
                    <div className="repo_name">
                        <h2>{repositorie?.name}</h2>
                    </div>
                    <div className="other-infof">
                        <p>{repositorie?.language}</p>
                        <p>{repositorie?.forks_count}</p>
                        <p>{repositorie?.stargazers_count}</p>

                    </div>
                </div>
                </>)
            }
        </div>
    </div>
  )
}

export default Repositorie