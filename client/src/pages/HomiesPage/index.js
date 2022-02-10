import axios from 'axios'
import {useEffect, useState} from 'react'

const backendAPI = "http://localhost:4000/api"


export default function Homies() {

    const [homies, setHomies] = useState([])
    
    const fetchHomies = async () => {
        await axios.get(`${backendAPI}/users`)
        .then((res) => {
            setHomies(res.data.data)
        })
    }

    useEffect(() => {
        fetchHomies()
    }, [])


    return(
        <div>
            {homies.map(user => {
                return <h3>{user.firstName}</h3>
            })}
        </div>
    )
}