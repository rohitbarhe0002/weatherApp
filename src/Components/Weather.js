import React, { useEffect, useState } from 'react';
 
export const Weather = () =>{
    const[city,setCity] = useState(null);
    const[search,setSearch] = useState("");

    useEffect( ()=> {
        const fetchApi =async () =>{
            const url =''
            const response = await fetch (url);
            const resjson = await response.json();

            }
        
        fetchApi();
    })
    return (

        <>
        <div className="box">
            <div className="inputData">
            <input type="search" className="inputfeild" onChange={(event) =>{setSearch(event.target.value)}}/>
            </div>
     

        <div className="info">
            <h2 className="location"></h2>
        </div>
        </div>
        </>
    )
}