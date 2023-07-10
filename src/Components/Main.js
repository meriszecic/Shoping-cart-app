import { useEffect, useState } from 'react'
import '../Style/Main.css'

export default function Main (){
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(json => setData(json))
    }, [])

    return (
        <>
        <div className='container'>
            
        </div>
        </>
    )
}