/*destination
country
photo
distance*/
import React from "react";

const Travel = ({ destination, country, photo, distance }) => (
  <figure>
    <img src={photo} alt={destination}   style= {{width : '800px'}} / >
    <figcaption>
      <desti>{destination} - {country} -  {distance}  </desti>
    </figcaption>
  </figure>
);

export default Travel;