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


    //////////////////////////////////////////////////////////////////////////////////////////////
    // Important note: I ran out of time and had to think quick to filter through all of the Data
    // this is the best option I was able to come up with quickly, and I'm sure there's a much 
    // better way to do this that I'm just not aware of yet
    //////////////////////////////////////////////////////////////////////////////////////////////

    // City filter
    apartmentListItems = apartmentListItems.filter(item => item.location.title.toLowerCase() === this.state.city)
    // Size filter
    apartmentListItems = apartmentListItems.filter(item => item.size <= this.props.size)
    // Price filter
    apartmentListItems = apartmentListItems.filter(item => item.price <= this.props.price * 100)
    // Bedroom filter
    apartmentListItems = apartmentListItems.filter(item => item.details.bedrooms >= this.props.details.bedroomCount)
    // Room filter
    apartmentListItems = apartmentListItems.filter(item => item.details.rooms >= this.props.details.roomCount)
    // Floors filter
    apartmentListItems = apartmentListItems.filter(item => item.details.floor >= this.props.details.floorCount)
    // Bathrooms filter
    apartmentListItems = apartmentListItems.filter(item => item.details.bathrooms >= this.props.details.bathroomCount)

    // Amenities filter
    if(this.props.amenities.television === true) {
      apartmentListItems = apartmentListItems.filter(item => item.amenities.includes('television'));
    }
    if(this.props.amenities.elevator === true) {
      apartmentListItems = apartmentListItems.filter(item => item.amenities.includes('elevator'));
    }
    if(this.props.amenities.fridge === true) {
      apartmentListItems = apartmentListItems.filter(item => item.amenities.includes('fridge'));
    }
    if(this.props.amenities.heating === true) {
      apartmentListItems = apartmentListItems.filter(item => item.amenities.includes('heating'));
    }
    if(this.props.amenities.cooker === true) {
      apartmentListItems = apartmentListItems.filter(item => item.amenities.includes('cooker'));
    }
    if(this.props.amenities.microwave === true) {
      apartmentListItems = apartmentListItems.filter(item => item.amenities.includes('microwave'));
    }
    
    // Services filter
    if(this.props.services.concierge === true) {
      apartmentListItems = apartmentListItems.filter(item => item.services.includes('concierge'));
    }
    if(this.props.services.cleaning === true) {
      apartmentListItems = apartmentListItems.filter(item => item.services.includes('elevator'));
    }
    if(this.props.services.fullFridge === true) {
      apartmentListItems = apartmentListItems.filter(item => item.services.includes('fridge'));
    }
    if(this.props.services.laundry === true) {
      apartmentListItems = apartmentListItems.filter(item => item.services.includes('laundry'));
    }

    //////////////////////////////////////////////////////////////////////////////////////////////
    // Phew, end of the super long...definitely wasteful code. I'd love to know the best 
    // solution for this which I'm sure you have :)
    //////////////////////////////////////////////////////////////////////////////////////////////
      

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
              {apartmentListItems.map((item, index) => (
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
  amenities: state.apartmentAmenitiesReducer,
  details: state.apartmentDetailsReducer,
  services: state.apartmentServicesReducer,
});

export default connect(mapStateToProps, {fetchApartmentsList})(SearchPage)
