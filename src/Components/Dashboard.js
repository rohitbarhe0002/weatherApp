import Button from "@restart/ui/esm/Button"
import React from "react"
import { useHistory } from "react-router"
import { useState,useEffect } from "react"
import axios from "axios"

export const Dashboard = () =>{

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("");
    const API_KEY="e0ebbdf0bb164c30ae9cd100f3a7a86a";
    
  useEffect(() => {
    
  }, []);

    const getWeather = () => {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY}`).
        then((response) => {
            console.log(response.data)
          setCity(response.data);
     
    
        })
      };

    let history =useHistory();
    const Logout=()=>{
        history.push('/Home');

    }
    const searchApi=()=>{
      getWeather();
      console.log(city)

    }
    return (
        <>
        <h1>Welcome to Dashboard</h1>  <Button onClick={Logout}> Logout </Button>


        <div className="box">
                <div className="inputData">
                    <input type="search" className="inputfeild" onChange={(event) => { setSearch(event.target.value) }} /> <i>{search}</i>
                </div>

             <Button varient="info" onClick={searchApi}>search</Button>
                <div className="info">
                    <h2 className="location"></h2>
                </div>
            </div>
        
        </>
    )
}