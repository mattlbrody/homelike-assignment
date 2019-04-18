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
          label="Television"
          control={
            <Checkbox
              checked={this.props.television}
              onChange={this.handleChange('TELEVISION')}
              value="television"
              color="primary"
            />
          }
        />
        <FormControlLabel
          label="Elevator"
          control={
            <Checkbox
              checked={this.props.elevator}
              onChange={this.handleChange('ELEVATOR')}
              value="elevator"
              color="primary"
            />
          }
        />
        <FormControlLabel
          label="Fridge"
          control={
            <Checkbox
              checked={this.props.fridge}
              onChange={this.handleChange('FRIDGE')}
              value="fridge"
              color="primary"
            />
          }
        />
        <FormControlLabel
          label="Heating"
          control={
            <Checkbox
              checked={this.props.heating}
              onChange={this.handleChange('HEATING')}
              value="heating"
              color="primary"
            />
          }
        />
        <FormControlLabel
          label="Cooker"
          control={
            <Checkbox
              checked={this.props.cooker}
              onChange={this.handleChange('COOKER')}
              value="cooker"
              color="primary"
            />
          }
        />
        <FormControlLabel
          label="Microwave"
          control={
            <Checkbox
              checked={this.props.microwave}
              onChange={this.handleChange('MICROWAVE')}
              value="microwave"
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
    television: state.apartmentAmenitiesReducer.television,
    elevator: state.apartmentAmenitiesReducer.elevator,
    fridge: state.apartmentAmenitiesReducer.fridge,
    heating: state.apartmentAmenitiesReducer.heating,
    cooker: state.apartmentAmenitiesReducer.cooker,
    microwave: state.apartmentAmenitiesReducer.microwave
   }
}

export default connect(mapStateToProps)(ApartmentAmenitiesFilter);