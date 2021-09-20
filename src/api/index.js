import axios from "axios";

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlaces = async ({sw, ne}) => {
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
        "x-rapidapi-key": "57ccbee603msh6b258efba2c29cbp18925cjsne26b8b3cfc51",
      },
    });
    return data;
  } catch (err) {
    alert(err);
  }
};
