import React from 'react';
import {fetchApartment} from "../actions/apartmentActions";
import {connect} from "react-redux";
import ListingImage from './ListingImage';
import ListingDetails from './ListingDetails';

export class ApartmentView extends React.Component {
  componentWillMount() {
    const { match: { params } } = this.props;
    const { apartmentId } = params;
    this.props.fetchApartment(apartmentId);
  }

  render() {
    const { apartment } = this.props;
    if (!Object.keys(apartment).length) {
      return <div>Loading...</div>
    }
    let image = 'http://localhost:5000/images/apartments/' + apartment.images[0];
    
    return (
      <div className='container-fl clearfix'>
        <div className='col-12'>
          <div className='view-apartment'>
            <div className="view-apartment-item">
              <div className="view-apartment-item-content">
                <ListingImage apartment={apartment} imageUrl={image}/>
                <ListingDetails apartment={apartment} limit={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  apartment: state.apartmentItem.apartment
});

export default connect(mapStateToProps, {fetchApartment})(ApartmentView)
