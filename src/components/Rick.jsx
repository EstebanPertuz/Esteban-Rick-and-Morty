import axios from 'axios'
import { useState, useEffect } from 'react'


const Rick = ( objUrl ) => {

    const { url } = objUrl
    const [ data, setData ] = useState({})

    useEffect(() => {
        axios
            .get(url)
            .then(({data}) => {
                console.log(data)
                setData(data)
            })
            .catch(error => console.error(error))

    }, [])


    return(
        
        <li className='items border border-success mt-4 rounded-4'>
            
            <img src={data.image} alt="" className='rounded-top-4'/>
            
            <div className='d-flex flex-column text-white border border-secondary bg-dark bg-opacity-50 rounded-bottom-4'>
                <h2>{data.name}</h2>
                <span><b>Status:</b> {data.status}</span>
                <span><b>Origin:</b> {data.origin?.name}</span>
                <span><b>Episodes:</b> {data.episode?.length}</span>
            </div>

        </li>
    )
}

export default Rick