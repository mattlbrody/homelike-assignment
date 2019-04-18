const initialState = {
  concierge: false,
  cleaning: false,
  fullFridge: false,
  laundry: false
}

export default (state = initialState, action) => {
    switch(action.type) {
      case 'CONCIERGE':
        return {
          ...state,
          concierge: !state.concierge
        }
      case 'CLEANING':
        return {
          ...state,
          cleaning: !state.cleaning
        }
      case 'FULL_FRIDGE':
        return {
          ...state,
          fullFridge: !state.fullFridge
        }
      case 'LAUNDRY':
        return {
          ...state,
          laundry: !state.laundry
        }
      case 'SERVICES_RESET':
        return {
          ...state,
          concierge: initialState.concierge,
          cleaning: initialState.cleaning,
          fullFridge: initialState.fullFridge,
          laundry: initialState.laundry
        }
      default:
        return state;
    }
  }