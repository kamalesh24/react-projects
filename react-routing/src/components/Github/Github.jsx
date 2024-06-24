import {useEffect, useState} from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data, setData] = useState({});

    // useEffect(() => {
    //     fetch('https://api.github.com/users/kamalesh24')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])

    const data = useLoaderData()
    const [repos, setRepos] = useState([])

    useEffect(() => {
        fetch(data.repos_url)
        .then( res => res.json())
        .then( data => setRepos(data))
    }, [data])

  return (
    <div className='bg-orange-700 text-white text-3xl text-center py-4'>
      Github Repositories: {repos.length}
      <img src={data.avatar_url} />
    </div>
  )
}

export default Github

export const getGithubInfo = async () => {
    const resp = await fetch('https://api.github.com/users/kamalesh24')
    return resp.json()
}
