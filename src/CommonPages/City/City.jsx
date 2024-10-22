import React from 'react'
import { useParams } from 'react-router-dom';
import cityData from "../../../db.json"

const City = () => {
    const { city } = useParams();

    const cityInfo = cityData.cities[city];
  return (
    <div>
       <h1>Welcome to {city}</h1>
       <p>{cityInfo.description}</p> 
       <p>{cityInfo.amenities}</p>

    </div>
  )
}

export default City





// import React from 'react';
// import { useParams } from 'react-router-dom';
// import cityData from "../../../db.json"; // Adjust the path if necessary

// const City = () => {
//     const { city } = useParams();
    
//     // Get the city info
//     const cityInfo = cityData.cities[city]; // This will get the city data

//     // Handle if the city doesn't exist
//     if (!cityInfo) {
//         return (
//             <div>
//                 <h1>City not found</h1>
//             </div>
//         );
//     }

//     return (
//         <div>
//             <h1>Welcome to {city}</h1>
//             <p>{cityInfo.description}</p>
//             <h2>Amenities:</h2>
//             <ul>
//                 {cityInfo.amenities.map((amenity, index) => (
//                     <li key={index}>{amenity}</li>
//                 ))}
//             </ul>

//             <h2>Properties:</h2>
//             {cityInfo.properties && cityInfo.properties.length > 0 ? (
//                 cityInfo.properties.map((property) => (
//                     <div key={property.id}>
//                         <h3>{property.description_Title}</h3>
//                         <img src={property.image} alt={property.name} />
//                         <p>{property.description}</p>
//                         <p>Rating: {property.rating} - {property.rating_description}</p>
//                         <p>Distance from Center: {property.distance_from_center}</p>
//                         <h4>Amenities:</h4>
//                         <ul>
//                             {property.amenities.map((amenity, index) => (
//                                 <li key={index}>{amenity}</li>
//                             ))}
//                         </ul>
//                     </div>
//                 ))
//             ) : (
//                 <p>No properties found for this city.</p>
//             )}
//         </div>
//     );
// };

// export default City;

