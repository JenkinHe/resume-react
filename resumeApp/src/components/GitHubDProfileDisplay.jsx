import React, { useEffect, useState } from 'react'

export default function GitHubDProfileDisplay() {

    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchGithubUserData() {
        setLoading(true)
        const response = await fetch('https://api.github.com/users/JenkinHe')
        const data = await response.json()
        if (data) {
            setUserData(data)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchGithubUserData()
    }, [])

    if (loading) {
        return <h1>LOADING PLEASE WAIT</h1>
    }


    return (
        <div className=' flex flex-row justify-center mt-10'>
            
            <div className='box-content h-40 w-40 bg-green-200 '>
                <img src={userData?.avatar_url} alt='Image' />
            </div>
            <div className='ml-10'>
                <h1>Name: {userData?.login}</h1>

                <h2>Repos: {userData?.public_repos}</h2>
                <a href={userData?.html_url}>
                    <u className='text-blue-500'>
                    LinkToMyGithub
                    </u>
                </a>

            </div>

        
        </div>
    )
}
