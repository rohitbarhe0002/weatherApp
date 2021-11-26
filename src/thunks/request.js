import { setcity } from "../action";
import axios from "axios";


export const requestWeather = (Search) => async (dispatch) => {


    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${Search}&appid=7e8ba1e744c64067f9367c59ec604f52`)
        console.log(response.data)

        dispatch(setcity([response.data]));
        const citySearches= [];
        localStorage.setItem('citySearches' ,JSON.stringify(response.data.name))
    } catch (err) {
        // logs the error whatever error occured in try block
        console.log(err);
    }
  
}
