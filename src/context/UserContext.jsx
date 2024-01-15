import axios from "axios";
import { createContext, useEffect, useState } from "react";
// This UserContext can be used to share state (userData and setUserData in this case) among different components in the application.
export const UserContext = createContext('')
const UserProvider = ({children}) => {
    const [userData,setUserData] = useState()
     // State variables to store the username and user data
     const [username,setUserName] =useState('')
    // useEffect(() => {
    //     axios.get('https://api.github.com/users/' + username)
    //     .then((respose => {
    //          // If the request is successful, update the user data state
    //         setUserData(respose.data)
    //       })) 
    //       .catch((error) => {
    //         console.log(error)
    //         console.log(error.response.data)

    //       })

    // },[])
    const updateUsername = (newUserName) => {
        setUserName(newUserName)
    }
    console.log(username)
    return (
        <UserContext.Provider value={{userData,setUserData,username,setUserName,updateUsername}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider