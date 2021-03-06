import React from 'react';

import GoogleMapReact from 'google-map-react';
import {Paper , Typography , useMediaQuery  } from "@material-ui/core";
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating'

import useStyles from  './styles'
import { getWeatherData } from '../../api';

const Map = ({setCoordinates ,setBounds,coordinates,places ,setChildClicked,weatherData}) => {

    const classes = useStyles();
    const isMobile = useMediaQuery('min-width:600px');
    // const coordinates = {lat:27, lng :40}
    console.log(weatherData)
    
 
    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{key:'AIzaSyDKAIWbkM0JwPKv5CVcIvM_iYsj5c7XtMs'}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin ={[50,50,50,50]}
                options={''}
                onChange={(e)=>{
                    console.log(e);
                    setCoordinates({lat:e.center.lat , lng:e.center.lng})
                    setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
                }}
                onChildClick={(child)=>
                    setChildClicked(child)

                }
            >
                {places?.map((place,i)=>(
                    <div className={classes.markerContainer} lat = {Number(place.latitude)} lng={Number(place.longitude)} key={i}>
                        {isMobile ? (
                            <LocationOnOutlinedIcon  color="primary" fontSize="large"/>
                        ):(
                            <Paper elevation={3} className={classes.paper}>
                                <Typography className={classes.typography} variant ="subtitle2" gutterBottom>
{place.name}
                                </Typography>
                                <img  alt ={place.name} className={classes.pointer} src ={place.photo ? place.photo.images.large.url :'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}/>
                               <Rating size='small' value={Number(place.rating)} readOnly />
                                </Paper>
                        )}

                    </div>
                ))}
                {weatherData?.data?.list?.map((data,index)=>(
                    <div key={index} lat ={data.coord.lat} lng={data.coord.lon}>
                        <img src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`} />
                    </div>
                ))}

            </GoogleMapReact>
        </div>
    )
}

export default Map
