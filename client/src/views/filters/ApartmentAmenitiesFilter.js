import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { connect } from 'react-redux';

class ApartmentAmenitiesFilter extends React.Component {
  state = {
    television: false,
    elevator: false,
    fridge: false,
    heating: false,
    cooker: false,
    microwave: false
  }

  handleChange = (name, currentState) => event => {
    var stateName = name.toLowerCase();
    this.setState({ [stateName]: !currentState  });

    for(let i = 0; i < this.props.amenities.length; i++) {
      if(this.props.amenities[i] === stateName) {
        this.props.dispatch({ type: 'DELETE_' + name });
        return
      }
    }
    this.props.dispatch({ type: name });
  };

  render() {
    return (
      <FormGroup>
        <FormControlLabel
          label="Television"
          control={
            <Checkbox
              checked={this.state.television}
              onChange={this.handleChange('TELEVISION', this.state.television)}
              value="television"
              color="primary"
            />
          }
        />
        <FormControlLabel
          label="Elevator"
          control={
            <Checkbox
              checked={this.state.elevator}
              onChange={this.handleChange('ELEVATOR', this.state.elevator)}
              value="elevator"
              color="primary"
            />
          }
        />
        <FormControlLabel
          label="Fridge"
          control={
            <Checkbox
              checked={this.state.fridge}
              onChange={this.handleChange('FRIDGE', this.state.fridge)}
              value="fridge"
              color="primary"
            />
          }
        />
        <FormControlLabel
          label="Heating"
          control={
            <Checkbox
              checked={this.state.heating}
              onChange={this.handleChange('HEATING', this.state.heating)}
              value="heating"
              color="primary"
            />
          }
        />
        <FormControlLabel
          label="Cooker"
          control={
            <Checkbox
              checked={this.state.cooker}
              onChange={this.handleChange('COOKER', this.state.cooker)}
              value="cooker"
              color="primary"
            />
          }
        />
        <FormControlLabel
          label="Microwave"
          control={
            <Checkbox
              checked={this.state.microwave}
              onChange={this.handleChange('MICROWAVE', this.state.microwave)}
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
    amenities: state.apartmentAmenitiesReducer
   }
}

export default connect(mapStateToProps)(ApartmentAmenitiesFilter);