const initialState = {
  roomCount: 0,
  bedroomCount: 0,
  floorCount: 0,
  bathroomCount: 0
}

export default (state = initialState, action) => {
    switch(action.type) {
      case 'ROOM_DECREMENT':
        return {
          ...state,
          roomCount: state.roomCount - 1
        }
      case 'ROOM_INCREMENT':
        return {
          ...state,
          roomCount: state.roomCount + 1
        }
      case 'BEDROOM_DECREMENT':
        return {
          ...state,
          bedroomCount: state.bedroomCount - 1
        }
      case 'BEDROOM_INCREMENT':
        return {
          ...state,
          bedroomCount: state.bedroomCount + 1
        }
      case 'FLOOR_DECREMENT':
        return {
          ...state,
          floorCount: state.floorCount - 1
        }
      case 'FLOOR_INCREMENT':
        return {
          ...state,
          floorCount: state.floorCount + 1
        }
      case 'BATHROOM_DECREMENT':
        return {
          ...state,
          bathroomCount: state.bathroomCount - 1
        }
      case 'BATHROOM_INCREMENT':
        return {
          ...state,
          bathroomCount: state.bathroomCount + 1
        }
      case 'RESET':
        return {
          ...state,
          bedroomCount: initialState.bedroomCount,
          roomCount: initialState.roomCount,
          floorCount: initialState.floorCount,
          bathroomCount: initialState.bathroomCount
        }
      default:
        return state;
    }
  }