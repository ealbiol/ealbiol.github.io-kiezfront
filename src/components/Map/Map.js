import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import './Map.scss'
import { useHistory } from "react-router-dom";



const containerStyle = {
  width: '100%',
  height: '550px'
};

const center = {
  lat: 52.520293238779665,
  lng: 13.404886059421093
};


export default function Map({ NeighborhoodsDynamic }) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBCLSS1e5yeO7V971FtyawrFW6peO8-B2c"
  })





  //History Button
  const historyIrABarrio = useHistory();

  //History Function
  function irABarrio(barrio) {
    historyIrABarrio.push(`/neighborhoodprofile/${barrio}`);
  }



  return isLoaded ? (

    <div className="map">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        options={{
          styles: [{
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "off"
              },
              {
                "color": "#f49f53"
              }
            ]
          },
          {
            "featureType": "landscape",
            "stylers": [
              {
                "color": "#f9ddc5"
              },
              {
                "lightness": -7
              }
            ]
          },
          {
            "featureType": "road",
            "stylers": [
              {
                "color": "#813033"
              },
              {
                "lightness": 43
              }
            ]
          },
          {
            "featureType": "poi.business",
            "stylers": [
              {
                "color": "#645c20"
              },
              {
                "lightness": 38
              }
            ]
          },
          {
            "featureType": "water",
            "stylers": [
              {
                "color": "#1994bf"
              },
              {
                "saturation": -69
              },
              {
                "gamma": 0.99
              },
              {
                "lightness": 43
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#f19f53"
              },
              {
                "weight": 1.3
              },
              {
                "visibility": "on"
              },
              {
                "lightness": 16
              }
            ]
          },
          {
            "featureType": "poi.business"
          },
          {
            "featureType": "poi.park",
            "stylers": [
              {
                "color": "#645c20"
              },
              {
                "lightness": 39
              }
            ]
          },
          {
            "featureType": "poi.school",
            "stylers": [
              {
                "color": "#a95521"
              },
              {
                "lightness": 35
              }
            ]
          },
          {},
          {
            "featureType": "poi.medical",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#813033"
              },
              {
                "lightness": 38
              },
              {
                "visibility": "off"
              }
            ]
          },
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {
            "elementType": "labels"
          },
          {
            "featureType": "poi.sports_complex",
            "stylers": [
              {
                "color": "#9e5916"
              },
              {
                "lightness": 32
              }
            ]
          },
          {},
          {
            "featureType": "poi.government",
            "stylers": [
              {
                "color": "#9e5916"
              },
              {
                "lightness": 46
              }
            ]
          },
          {
            "featureType": "transit.station",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "transit.line",
            "stylers": [
              {
                "color": "#813033"
              },
              {
                "lightness": 22
              }
            ]
          },
          {
            "featureType": "transit",
            "stylers": [
              {
                "lightness": 38
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#f19f53"
              },
              {
                "lightness": -10
              }
            ]
          },
          {},
          {},
          {}]
        }}
      >
        { /* Child components, such as markers, info windows, etc. */}


        {
          NeighborhoodsDynamic.map((neighborhood, index) => {
            return (
              < Marker
                key={index}
                position={{ lat: neighborhood.lat, lng: neighborhood.lng }}
                name={neighborhood.name}
                onClick={() => irABarrio(neighborhood.name)}
                label={neighborhood.name.toUpperCase()}
                scaledSize={new window.google.maps.Size(90, 90)}
                className="marker"
              />
            )
          })
        }
      </GoogleMap>
    </div>
  ) : <></>
}





//https://mapstyle.withgoogle.com/
//https://snazzymaps.com/
