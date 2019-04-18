const initialState = []

export default (state = initialState, action) => {
    switch(action.type) {
      case 'TELEVISION':
        return [...state, 'television']
      case 'ELEVATOR':
        return [...state, 'elevator']
      case 'FRIDGE':
        return [...state, 'fridge']
      case 'HEATING':
        return [...state, 'heating']
      case 'COOKER':
        return [...state, 'cooker']
      case 'MICROWAVE':
        return [...state, 'microwave']
      case 'DELETE_TELEVISION':
        return state.filter(element => element !=='television');
      case 'DELETE_ELEVATOR':
        return state.filter(element => element !=='elevator');
      case 'DELETE_FRIDGE':
        return state.filter(element => element !=='fridge');
      case 'DELETE_HEATING':
        return state.filter(element => element !=='heating');
      case 'DELETE_COOKER':
        return state.filter(element => element !=='cooker');
      case 'DELETE_MICROWAVE':
        return state.filter(element => element !=='microwave');
      case 'AMENITIES_RESET':
        return {
          initialState: []
        }
      default:
        return state;
    }
  }