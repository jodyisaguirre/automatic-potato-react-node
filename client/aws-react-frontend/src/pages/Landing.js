import React , {useState,useEffect} from 'react'

const Landing = () => {
    const url ="http://localhost:5001/users"

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [name, setName] = useState("")
 

    const fetchData = async () => {
       try{ const response = await fetch(url)
        if(!response.ok){
            throw new Error(`${response.status}`)
        }
        const data = await response.json()
        setData(data)
        }
        catch(error){
            setError(error.message)
            console.error('Error',error)

        }
    }
    
    useEffect(()=> {
        fetchData()

    },[])

    const handleNameChange = (e) =>{
        setName(e.target.value)
        console.log(e.target.value)

    }

    if(!data){
        return <p>loading</p>
    }

    if(error){
        return <p>{error}</p>
    }

    return(
        <>
         <h1>You are now Reacting </h1>
        {data.map(person => <p key={person.id}>{person.name}</p>)}
        <input value={name} placeholder='name' onChange={handleNameChange}></input>
        </>
       

    )
}

export default Landing 