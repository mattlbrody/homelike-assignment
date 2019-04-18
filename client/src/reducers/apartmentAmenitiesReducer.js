const initialState = {
  television: false,
  elevator: false,
  fridge: false,
  heating: false,
  cooker: false,
  microwave: false
}

export default (state = initialState, action) => {
    switch(action.type) {
      case 'TELEVISION':
        return {
          ...state,
          television: !state.television
        }
      case 'ELEVATOR':
        return {
          ...state,
          elevator: !state.elevator
        }
      case 'FRIDGE':
        return {
          ...state,
          fridge: !state.fridge
        }
      case 'HEATING':
        return {
          ...state,
          heating: !state.heating
        }
      case 'COOKER':
        return {
          ...state,
          cooker: !state.cooker
        }
      case 'MICROWAVE':
        return {
          ...state,
          microwave: !state.microwave
        }
      case 'AMENITIES_RESET':
        return {
          ...state,
          television: initialState.television,
          elevator: initialState.elevator,
          fridge: initialState.fridge,
          heating: initialState.heating,
          cooker: initialState.cooker,
          microwave: initialState.microwave
        }
      default:
        return state;
    }
  }