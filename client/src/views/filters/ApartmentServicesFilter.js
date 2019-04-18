import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { connect } from 'react-redux';

class ApartmentAmenitiesFilter extends React.Component {

  handleChange = name => event => {
    this.props.dispatch({ type: name });
  };

  render() {
    return (
      <FormGroup>
        <FormControlLabel
          label="Concierge"
          control={
            <Checkbox
              checked={this.props.concierge}
              onChange={this.handleChange('CONCIERGE')}
              value="concierge"
              color="primary"
            />
          }
        />
        <FormControlLabel
          label="Cleaning"
          control={
            <Checkbox
              checked={this.props.cleaning}
              onChange={this.handleChange('CLEANING')}
              value="cleaning"
              color="primary"
            />
          }
        />
        <FormControlLabel
          label="Full Fridge"
          control={
            <Checkbox
              checked={this.props.fullFridge}
              onChange={this.handleChange('FULL_FRIDGE')}
              value="fullFridge"
              color="primary"
            />
          }
        />
        <FormControlLabel
          label="Laundry"
          control={
            <Checkbox
              checked={this.props.laundry}
              onChange={this.handleChange('LAUNDRY')}
              value="laundry"
              color="primary"
            />
          }
        />
      </FormGroup>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
    concierge: state.apartmentServicesReducer.concierge,
    cleaning: state.apartmentServicesReducer.cleaning,
    fullFridge: state.apartmentServicesReducer.fullFridge,
    laundry: state.apartmentServicesReducer.laundry
   }
}

export default connect(mapStateToProps)(ApartmentAmenitiesFilter);
