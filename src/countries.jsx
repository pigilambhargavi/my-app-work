import axios from 'axios';
import React, { useEffect,useState } from 'react'
function Countries(){
    const [countries, setCountries]=useState([])
    useEffect(()=>{
        axios.get("https://restcountries.com/v3/all").then(({data:countries})=>{
        setCountries(countries)
    })
        
    },[]);
    return (
        <div className='border-danger border-3 p-3 m-3'>
            <h1>Countries</h1>
            <ul>
                {
                    countries.length>0 && countries.map((country)=>{
                        return <li>{country.name.common}</li>
                    })
                }
            </ul>
        </div>
    )
}
export default Countries