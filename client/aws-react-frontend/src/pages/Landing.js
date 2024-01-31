import React , {useState,useEffect} from 'react'

const Landing = () => {
    const url ="http://localhost:5001/users"

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [id, setId] = useState("")


 

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
    const handleAgeChange = (e) =>{
        setAge(e.target.value)
        console.log(e.target.value)
        console.log(data)

    }

   

    const handleAddOnSubmit= (e) => {
        e.preventDefault()
        setData([...data,{"name":name,"age":age,"id":4}])
        
    }
    
    const handleIdChange = (e) =>{
        setId(e.target.value)
    }

    const handleDelete = () => {
        const filterPersonById = data.filter(person => person.id != id)
        setData(filterPersonById)
        console.log(filterPersonById)
        setId("")
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
        {data.map((person,index) => 
        < div key={index}>
        <p key={person.name + index}>{person.name}</p>
        <p key={person.id + index}>{person.id}</p>
        </div>

        )}
        <form onSubmit={handleAddOnSubmit}>
        <input value={name} placeholder='name' onChange={handleNameChange}></input>
        <input value={age} placeholder='age' onChange={handleAgeChange}></input>
        <button type='submit'>Add Person</button>
        </form>
        <input value={id} placeholder='Delete Person By ID' onChange={handleIdChange}></input>
        <button onClick={handleDelete}>Delete Person By Id</button>
        </>
       

    )
}

export default Landing 