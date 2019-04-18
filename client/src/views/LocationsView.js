import React from 'react';
import {connect} from 'react-redux';
import {fetchApartmentsList} from './../actions/apartmentsListActions';
import LocationsFilter from './LocationsFilter';

class LocationsView extends React.Component {
  componentWillMount() {
    this.props.fetchApartmentsList();
  }

  render() {
    let {apartmentsList} = this.props;
    if (!Object.keys(apartmentsList).length) {
        return <div>Loading...</div>
    }
    
    //remove duplicate cities from the returned list so we can create a 
    //unique LocationsFilter tag for any new city that is added to the DB
    let locationList = apartmentsList.items.map(function(item) {
      return item.location.title
    })
    let uniqueLocation = locationList.filter(function(item, index) {
      return locationList.indexOf(item) >= index;
    })

    return (
      <div className="container-list container-lg clearfix">
        <div className="col-12 float-left locations">
          {uniqueLocation.map((item, index) => (
            <LocationsFilter key={index} apartmentsList={this.props} location={item} />
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  apartmentsList: state.apartmentsList.apartments
});

export default connect(mapStateToProps, {fetchApartmentsList})(LocationsView)