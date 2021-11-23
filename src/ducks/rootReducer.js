import categoriesReducer from 'ducks/categories/categoriesSlice';
import plantReducer from 'ducks/plant/plantSlice';
import plantsReducer from 'ducks/plants/plantsSlice';
import roomsReducer from 'ducks/rooms/roomsSlice';

import { combineReducers } from 'redux';
import { todos, visibilityFilter } from 'components/account/ducks/reducers';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  plant: plantReducer,
  plants: plantsReducer,
  rooms: roomsReducer,
  visibilityFilter,
  todos

});

export default rootReducer;