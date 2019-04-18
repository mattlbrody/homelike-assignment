import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import ApartmentAmenitiesFilter from './ApartmentAmenitiesFilter';
import { connect } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faChevronDown, faPlusCircle, faMinusCircle)

class ApartmentAmenities extends React.Component {

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
    this.props.dispatch({ type: 'AMENITIES_RESET' });
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
          Amenities
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
                        <ApartmentAmenitiesFilter />
                        <div className="bottommodal">
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
    state
   }
}

export default connect(mapStateToProps)(ApartmentAmenities);