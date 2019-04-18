import React from 'react';
import {connect} from 'react-redux';
import Input from '@material-ui/core/Input';
import {fetchApartmentsList} from '../actions/apartmentsListActions';
import SizeSlider from './filters/SizeSlider';
import PriceSlider from './filters/PriceSlider';
import ApartmentAmenities from './filters/ApartmentAmenities';
import ApartmentDetails from './filters/ApartmentDetails';
import ApartmentServices from './filters/ApartmentServices';
import ApartmentTileView from "./ApartmentTileView";

class SearchPage extends React.Component {
  state = { city: 'berlin' };

  componentWillMount() {
    this.props.fetchApartmentsList();
  }

  handleInput = (input) => {
    this.setState({ city: input.toLowerCase()})
  }

  render() {
    let {apartmentsList} = this.props;
    let apartmentListItems = apartmentsList.items;
    
    if (!Object.keys(apartmentsList).length) {
        return <div>Loading...</div>
    }

    // City filter
    const apartmentsByName = apartmentListItems.filter(item => item.location.title.toLowerCase() === this.state.city)

    // Size filter
    const apartmentsSize = apartmentsByName.filter(item => item.size <= this.props.size )

    // Price filter
    const apartmentsPrice = apartmentsSize.filter(item => item.price <= this.props.price * 100 )
    
    const apartmentsAmenities = apartmentsPrice.amenities
    //const apartmentsAmenities = apartmentsPrice.filter(item => item.amenities.filter( amenity => 
    //     console.log(amenity)
    //   )
    // )
    console.log(this.props.amenities)
    console.log(apartmentsAmenities)
    console.log(apartmentsPrice)
      
    return (
      <div>
        <div className="container-list container-lg clearfix">
          <div className="search">
            <div className="input">
              <form onSubmit={(event) => {
                event.preventDefault()
                let input = event.target.userInput.value
                this.handleInput(input)
                event.target.userInput.value = ''
              }}>
                <Input type="text" name="userInput" placeholder="Search by city" />
              </form>
            </div>
          </div>
          <div className="filters">
            <SizeSlider />
            <PriceSlider />
            <ApartmentAmenities />
            <ApartmentDetails />
            <ApartmentServices />
          </div>
        </div>
        <div className="container-list container-lg clearfix">
          <div className="col-12 float-left searchList">
            <h3 className="capitalize">{this.state.city}</h3>
            <div className="view-apartment-list">
              {apartmentsPrice.map((item, index) => (
                  <ApartmentTileView key={index} apartment={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  apartmentsList: state.apartmentsList.apartments,
  size: state.sizeReducer.size,
  price: state.priceReducer.price,
  amenities: state.apartmentAmenitiesReducer
});

export default connect(mapStateToProps, {fetchApartmentsList})(SearchPage)
