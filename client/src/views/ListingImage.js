import React from 'react';

const ListingImage = props => {
  return (
    <div className="listing-image">
      <div className="media-cover" style={{backgroundImage: `url(${props.imageUrl})`, backgroundPosition: 'center', backgroundSize: 'cover'}}></div>
      <div className="price-overlay">
        <span>{props.apartment.price} €</span>
        <span className="price-overlay-monat">
        <span className="prive-overlay-monat-text">/ Monat</span>
        </span>
      </div>
    </div>
  )
}

export default ListingImage;
