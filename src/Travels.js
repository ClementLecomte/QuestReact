import React from "react";

import Travel from "./Travel.js";
// src/Quotes.js
const travels = [
  {
      photo : "https://fr.unesco.org/creative-cities/sites/creative-cities/files/styles/creative_city_940_420/public/sydney_2.jpg?itok=WifGdDtX",
      country : "Australia",
      distance : "far Away",
      destination : "Sydney"
  },
  {
      photo : "https://cdn.civitatis.com/alemania/berlin/berlin.jpg",
      country : "Germany",
      distance :"far",
      destination : "Berlin",
  },
  {
      photo : "//images.sudouest.fr/2017/03/31/58de606066a4bdf81d7bc120/widescreen/1000x500/l-ouvrage-de-franchissement-de-la-garonne-a-besoin-de-travaux-d-urgence.jpg?v1",
      country : "France",
      distance : "here",
      destination : "Bordeaux"

  },
  {
      photo : "https://i.ytimg.com/vi/YHIKeo7z_BI/maxresdefault.jpg",
      country : "New-Zealand",
      distance : "Far Away",
      destination : "Aukland"
  },
  {
        photo : "https://www.comptoir.fr/voyages/AfficheDBImage.aspx?IdPaysGuide=74",
        country : "Latvia",
        distance : "Far",
        destination : "Riga"
  }
];

const Travels = () => (
  <div>
    {travels.map(travel => (
        <Travel country={travel.country} photo={travel.photo} destination={travel.destination} distance={travel.distance} />
      )
    )}
  </div>
);

export default Travels;