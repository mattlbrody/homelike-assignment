import {combineReducers} from 'redux';
import apartmentsListReducer from './apartmentsListReducer';
import apartmentReducer from './apartmentReducer';
import priceReducer from './priceReducer';
import sizeReducer from './sizeReducer';
import apartmentDetailsReducer from './apartmentDetailsReducer';
import apartmentAmenitiesReducer from './apartmentAmenitiesReducer';
import apartmentServicesReducer from './apartmentServicesReducer';


export default combineReducers({
    apartmentsList: apartmentsListReducer,
    apartmentItem: apartmentReducer,
    priceReducer,
    sizeReducer,
    apartmentDetailsReducer,
    apartmentAmenitiesReducer,
    apartmentServicesReducer
})
