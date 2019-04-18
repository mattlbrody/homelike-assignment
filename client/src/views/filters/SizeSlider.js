import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import Slider from '@material-ui/lab/Slider';
import { SizeFilter } from '../../actions/sizeActions';
import { connect } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown} from '@fortawesome/free-solid-svg-icons';

library.add(faChevronDown)

class SizeSlider extends React.Component {

  state = {
    open: false,
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = (event, value) => {
    this.setState({ value });
    this.props.dispatch(SizeFilter(value))
  };

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
          Size
        <FontAwesomeIcon className="chevron" icon="chevron-down" />
        </Button>
          <Popper className="slidemodal" placement="bottom-start" open={open} anchorEl={this.anchorEl} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="menu-list-grow"
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
              >
              <ClickAwayListener onClickAway={this.handleClose}>
                <Paper square className="sliderpaper">
                  <div>
                  {open ? (
                    <div>
                    <h2 className="sliderdisplay">0 m² - {this.props.size.toFixed(0)} m²</h2>
                    <Slider className="slider"
                      value={this.props.size}
                      aria-labelledby="label"
                      onChange={this.handleChange}
                    />
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
  return { size: state.sizeReducer.size }
}

export default connect(mapStateToProps)(SizeSlider);