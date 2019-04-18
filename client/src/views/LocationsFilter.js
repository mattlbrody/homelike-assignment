import React from 'react';
import ApartmentTileView from './ApartmentTileView';

const LocationsFilter = props => {
  return (
    <div>
      <h3>{props.location}</h3>
      <div className="view-apartment-list">
        {props.apartmentsList.apartmentsList.items.filter((item) => {
            return item.location.title === props.location
          }).map((item, index) => (
            <ApartmentTileView key={index} apartment={item} />
        ))}
      </div>
    </div>
  )
}

export default LocationsFilter;