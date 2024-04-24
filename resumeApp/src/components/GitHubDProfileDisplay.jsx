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
    <div className='bg-yellow-200 flex flex-row'>
       <h1>{userData?.login}</h1>
       <div className='box-content h-40 w-40 bg-green-200 '>
        <img src={userData?.avatar_url} alt='Image'/>
       </div>
      <h2>{userData?.public_repos}</h2>
      <a href={userData?.html_url}>wanna burger</a>
        
    </div>
  )
}
