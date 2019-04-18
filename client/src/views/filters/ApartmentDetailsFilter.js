import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faChevronDown, faPlusCircle, faMinusCircle)

class ApartmentDetailsFilter extends React.Component {

  //action to handle incrementing
  increment = (value) => {
    this.props.dispatch({ type: `${value}_INCREMENT` });
  }

  //action to handle decrementing
  decrement = (value) => {
    if(this.props.detailItem > 0 ) {
      this.props.dispatch({ type: `${value}_DECREMENT` });
    }
  }

  render() {
    return (
      <div className="detailFilter">
        <div>{this.props.detailTitle}</div>
        <div>
          <Button onClick={() => this.decrement(this.props.actionTitle)} disableTouchRipple>
            <FontAwesomeIcon className="minusbtn minus" icon="minus-circle" />
          </Button>
          <span>{this.props.detailItem}</span>
          <Button onClick={() => this.increment(this.props.actionTitle)} disableTouchRipple>
            <FontAwesomeIcon className="plusbtn plus" icon="plus-circle" />
          </Button>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(ApartmentDetailsFilter);