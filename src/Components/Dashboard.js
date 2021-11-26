import { Button } from "react-bootstrap"
import React from "react"
import { useHistory } from "react-router"
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setcity, setsearch } from '../action';
import { requestWeather } from "../thunks/request"
import { ListGroup } from "react-bootstrap"


export const Dashboard = () => {

  const dispatch = useDispatch();
  // const [city, setCity] = useState([]);
  // const [search, setSearch] = useState("");
  // const API_KEY="e0ebbdf0bb164c30ae9cd100f3a7a86a";


  const city = useSelector((state) => state.citySet.fetchapi)
  const Search = useSelector((state) => state.searchSet.city);


  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    } else {
      setStatus('Locating...');
      navigator.geolocation.getCurrentPosition((position) => {
        setStatus(null);
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      }, () => {
        setStatus('Unable to retrieve your location');
      });
    }
  }, []);
  let history = useHistory();

  const Logout = () => {
    history.push('/Home');

  }

  const searchApi = async () => {

    dispatch(requestWeather(Search))
  }

  const OnSearchchange = (event) => {
    dispatch(setsearch(event.target.value));
  }

  const getHistory = () => {
    history.push('/history');
  }

  return (
    <>

      <h1>Welcome to Dashboard</h1> <Button varient="danger" onClick={getHistory}>History</Button>
      <Button onClick={Logout}> Logout </Button><br />
      <input type="search" name="city" className="inputfeild" placeholder="enter city" onChange={OnSearchchange} autoComplete="off" />

      <Button varient="primary" onClick={searchApi}>search</Button><br />
      <br />


      <ListGroup.Item variant="primary"><h2>{Search} Weather</h2><hr /></ListGroup.Item>
      {city.map((data) => (
        <>

          <ListGroup>

            <ListGroup.Item variant="primary">City={data.name}</ListGroup.Item>
            <ListGroup.Item variant="secondary">mintemp={data.main.temp_min}</ListGroup.Item>
            <ListGroup.Item variant="success">maxtemp={data.main.temp_max}</ListGroup.Item>
            <ListGroup.Item variant="danger">speed={data.wind.speed}r</ListGroup.Item>
            <ListGroup.Item variant="warning">feels like:{data.main.feels_like}</ListGroup.Item>
            <ListGroup.Item variant="info">country:{data.sys.country}</ListGroup.Item>
            <ListGroup.Item variant="light">sunrise:{data.sys.sunrise}</ListGroup.Item>
            <ListGroup.Item variant="dark">weather:{data.weather[0].description}</ListGroup.Item>

          </ListGroup>

        </>
      ) )}

      <div>

        <h1>Coordinates</h1>
        <p>{status}</p>
        {lat && <p>Latitude: {lat}</p>}
        {lng && <p>Longitude: {lng}</p>}
      </div>







    </>


  )

}

