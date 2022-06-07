export const SET_MACH_NAME = 'SET_MACH_NAME';
export const SET_MACH_READ = 'SET_MACH_READ';
export const SET_COUNT = 'SET_COUNT';
export const RESET_COUNT = 'RESET_COUNT';
export const SET_GALLERY_COUNT = 'SET_GALLERY_COUNT';
export const SET_MACH_OBJ = 'SET_MACH_OBJ';
// export const REMOVE_LIST_OBJ = 'REMOVE_LIST_OBJ';

export const setMachName = name => dispatch => {
  dispatch({
    type: SET_MACH_NAME,
    payload: name,
  });
};

export const setMachRead = reading => dispatch => {
  dispatch({
    type: SET_MACH_READ,
    payload: reading,
  });
};

export const setCount = count => dispatch => {
  dispatch({
    type: SET_COUNT,
    payload: count,
  });
};

export const reSetCount = () => dispatch => {
  dispatch({
    type: RESET_COUNT,
    payload: 0,
  });
};

export const setGalleryCount = gcount => dispatch => {
  dispatch({
    type: SET_GALLERY_COUNT,
    payload: gcount,
  });
};

export const setMachObj = machObj => dispatch => {
  dispatch({
    type: SET_MACH_OBJ,
    payload: machObj,
  });
};

/*export const removeListObj = index => dispatch => {
  dispatch({
    type: REMOVE_LIST_OBJ,
    payload: index,
  });
};*/
