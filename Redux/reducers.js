import {
  SET_MACH_NAME,
  SET_MACH_READ,
  SET_COUNT,
  SET_GALLERY_COUNT,
  SET_MACH_OBJ,
  RESET_COUNT,
  REMOVE_LIST_OBJ,
} from './actions';

const initialState = {
  name: '',
  reading: '',
  count: 0,
  gcount: 0,
  machObj: [],
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_MACH_NAME:
      return {...state, name: action.payload};
    case SET_MACH_READ:
      return {...state, reading: action.payload};
    case SET_COUNT:
      return {...state, count: action.payload};
    case RESET_COUNT:
      return {...state, count: action.payload};
    case SET_GALLERY_COUNT:
      return {...state, gcount: action.payload};
    case SET_MACH_OBJ:
      return {...state, machObj: [...state.machObj, action.payload]};
    /* case REMOVE_LIST_OBJ:
      return {
        ...state,
        machObj: [...state.machObj.splice(action.payload, 1)],
      };*/
    default:
      return state;
  }
}

export default userReducer;
