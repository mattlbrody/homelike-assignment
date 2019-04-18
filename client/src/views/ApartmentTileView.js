import React from 'react';
import ListingImage from './ListingImage';
import ListingDetails from './ListingDetails';

export default class ApartmentTileView extends React.Component {

  render() {
    let {apartment} = this.props;
    let url = '/apartments/' + apartment._id;
    let image = 'http://localhost:5000/images/apartments/' + apartment.images[0];

    return (
      <div className="view-apartment-item">
        <div className="view-apartment-item-content">
          <a target ="_blank" href={url}>
            <ListingImage apartment={apartment} imageUrl={image}/>
            <ListingDetails apartment={apartment} />
          </a>
        </div>
      </div>
    )
  }
}
