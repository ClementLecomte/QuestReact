/*destination
country
photo
distance*/
import React from "react";

const Travel = ({ destination, country, photo, distance }) => (
  <figure>
    <img src={photo} alt={destination}   style= {{width : '800px'}} / >
    <figcaption>
      <p>{destination} - {country} -  {distance}  </p>
    </figcaption>
  </figure>
);

export default Travel;