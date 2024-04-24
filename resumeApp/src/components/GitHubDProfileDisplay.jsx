import React, { useEffect, useState } from 'react'

export default function GitHubDProfileDisplay() {

    const [userData,setUserData] =useState(null);
    const [loading,setLoading] =useState(false);

    async function fetchGithubUserData(){
        setLoading(true)
        const response =await fetch('https://api.github.com/users/JenkinHe')
        const data=await response.json()
        if(data){
            setUserData(data)
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchGithubUserData()
    },[])

    if(loading){
        return <h1>LOADING PLEASE WAIT</h1>
    }


  return (
    <div>
        
    </div>
  )
}
