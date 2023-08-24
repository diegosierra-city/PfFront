export const initialState = {
    Post: [],
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_FORM_DATA':
        return { ...state, Post: action.payload };
      default:
        return state;
    }
  };