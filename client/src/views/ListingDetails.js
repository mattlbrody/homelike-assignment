import React from 'react';
import ApartmentAmentityView from "./ApartmentAmentityView";

class ListingDetails extends React.Component {
  
  render() {
    // include the owner details if the page is ApartmentView.js, otherwise don't include them
    if(this.props.limit === 20) {
      return (
        <div className="listing-details-container">
          <div className="listing-details">
              <span className="text-truncate text-first-capitalize">{this.props.apartment.title}</span>
            <div className="apt-size-text text-truncate">
              <span>{this.props.apartment.size} m²</span>
            </div>
            <div className="amenities-container">
              <div className="amenities-text text-truncate">
                <ApartmentAmentityView apartment={this.props.apartment} limit={this.props.limit} />
              </div>
            </div>
            <div className="Owner-Details">
              <div>Email: {this.props.apartment.owner.email}</div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="listing-details-container">
          <div className="listing-details">
              <span className="text-truncate text-first-capitalize">{this.props.apartment.title}</span>
            <div className="apt-size-text text-truncate">
              <span>{this.props.apartment.size} m²</span>
            </div>
            <div className="amenities-container">
              <div className="amenities-text text-truncate">
                <ApartmentAmentityView apartment={this.props.apartment} limit={this.props.limit} />
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default ListingDetails;
