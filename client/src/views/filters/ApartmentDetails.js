import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import ApartmentDetailsFilter from './ApartmentDetailsFilter';
import { connect } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faChevronDown, faPlusCircle, faMinusCircle)

class ApartmentDetails extends React.Component {

  state = {
    open: false,
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  //action to handle reseting the filter
  filterReset = () => {
    this.props.dispatch({ type: 'RESET' });
  }

  render() {
    const { open } = this.state;
    return (
      <div className="seperatordiv">
        <Button
          buttonRef={node => {
            this.anchorEl = node;
          }}
          aria-owns={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={this.handleToggle}
          className="button"
          disableTouchRipple
        >
          Details
          <FontAwesomeIcon className="chevron" icon="chevron-down" />
        </Button>
          <Popper className="detailmodal" placement="bottom-start" open={open} anchorEl={this.anchorEl} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="menu-list-grow"
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
              >
                <ClickAwayListener onClickAway={this.handleClose}>
                  <Paper square className="detailspaper">
                    <div>
                    {open ? (
                      <div>
                        <ApartmentDetailsFilter detailTitle='Bedrooms' actionTitle='BEDROOM' detailItem={this.props.bedroomCount}/>
                        <ApartmentDetailsFilter detailTitle='Rooms' actionTitle='ROOM' detailItem={this.props.roomCount}/>
                        <ApartmentDetailsFilter detailTitle='Floors' actionTitle='FLOOR' detailItem={this.props.floorCount}/>
                        <ApartmentDetailsFilter detailTitle='Bathrooms' actionTitle='BATHROOM' detailItem={this.props.bathroomCount}/>
                        <div className="bottommodal">
                          <Button 
                            disableTouchRipple
                            className="resetbtn"
                            onClick={this.filterReset}
                          >
                            Reset Filter
                          </Button>
                          <div className="right">
                          <Button 
                            disableTouchRipple
                            className="cancelbtn"
                            onClick={this.handleClose}
                          >
                            Cancel
                          </Button>
                          </div>
                        </div>
                      </div>
                    ) : null}
                    </div>
                  </Paper>
                </ClickAwayListener>
              </Grow>
            )}
          </Popper>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
    bedroomCount: state.apartmentDetailsReducer.bedroomCount,
    roomCount: state.apartmentDetailsReducer.roomCount,
    floorCount: state.apartmentDetailsReducer.floorCount,
    bathroomCount: state.apartmentDetailsReducer.bathroomCount
   }
}

export default connect(mapStateToProps)(ApartmentDetails);