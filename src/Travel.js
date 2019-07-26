/*destination
country
photo
distance*/
import React from "react";

const Travel = ({ destination, country, photo, distance }) => (
  <figure>
    <img src={photo} alt={destination}  />
    <figcaption>
      <desti>{destination} - {destination} -  {distance}  </desti>
    </figcaption>
  </figure>
);

export default Travel;