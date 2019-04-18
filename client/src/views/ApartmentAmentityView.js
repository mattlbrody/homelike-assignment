import React from 'react';

export default class ApartmentAmentityView extends React.Component {
  render() {
    let {apartment, limit = 3} = this.props;
    let amenitiesList = [];
    apartment.amenities.map((item, index) => {
      if (index < limit) {
        amenitiesList.push(<span key={index} className="amenities-item"><i></i><span>{item}</span></span>);
      }
      return amenitiesList
    });
    return amenitiesList
  }
}
