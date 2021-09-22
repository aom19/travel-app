import axios from "axios";

export const getPlaces = async (type, { sw, ne }) => {
  const URL = `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`;
  // const { sw, ne } = bounds;
  try {
    //destructuring
    const {
      data: { data },
    } = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        // "x-rapidapi-key": "f8edd6ee7cmshd719902667f424cp13a538jsn09eff252dcbe",
        "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_TRAVEL_API_KEY,
      },
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getWeatherData = async ({ lat, lng }) => {
  console.log(lat);
  try {
    const data = axios.get(
      "https://community-open-weather-map.p.rapidapi.com/find",
      {
        params: {
          lat: lat,
          lon: lng,
        },
        headers: {
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_WEATHER_API_KEY,
        },
      }
    );
    return data;
  } catch (error) {
    console.warn(error);
  }
};
