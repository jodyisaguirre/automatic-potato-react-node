import React , {useState,useEffect} from 'react'

const Landing = () => {
    const [data,setData]=useState(null)
    const url ="http://localhost:5001/users"

    const fetchData = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setData(data)
        console.log(data)
    }
    useEffect(()=> {
        fetchData()

    },[])

    return(
        <h1>You are now Reacting </h1>

    )
}

export default Landing 