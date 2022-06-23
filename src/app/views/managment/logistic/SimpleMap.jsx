import React, { Component, useEffect,useState } from 'react'
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => ( 
    <div>
        <img
            src="/assets/images/placeholder.png"
            height={'50px'}
            width={'50px'}
            alt="marker"
            onClick={onMarkerClick}
            
        />
    </div>
)
function onMarkerClick(){
  console.log('marker clicked');
}

const SimpleMap = ({vehicles}) => {
  const [locations, setLocations] = useState([])
  useEffect(() => {
    setLocations(vehicles.filter((vehicle) => vehicle.location?.lat ))
     
}, [vehicles])
    return (
       
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: 'AIzaSyAPhLI0pkrJwPXDv6N3yKGGYxF-sseNalc',
                }}
                defaultCenter={{
                    lat: 8.9806,
                    lng: 38.7578,
                }}
                defaultZoom={7}
            >
              {
                locations.map((vehicle)=>{
                  return <AnyReactComponent
                    lat={vehicle.location.lat}
                    lng={vehicle.location.lng}
                    key= {vehicle._id}
                    onClick={onMarkerClick}
                    
                   
                   
                />
                }
                  
                )
              }
                
            </GoogleMapReact>
        </div>
    )
}

export default SimpleMap
