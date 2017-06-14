
const initialState = {
    items: null,
    loader: false,
    searchTerm: null,
    showError: false,
    flag: false,
    imageId: -1
};

export const searchImages = (state = initialState, action) => {
  switch(action.type){
    case "ADD_ITEMS":
      return Object.assign({}, state, {
          items: action.items,
          searchTerm: action.searchTerm
      })
    case "REMOVE_LOADER":
      return Object.assign({}, state, {
          loader: false
      })
    case "ADD_LOADER":
      return Object.assign({}, state, {
          loader: true
      })
    case "SHOW_ERROR":
      return Object.assign({}, state, {
          showError: true
      })
    case "REMOVE_ERROR":
      return Object.assign({}, state, {
          showError: false
      })
    case "NEW_IMAGE_ID":
      return Object.assign({}, state, {
          flag: true,
          imageId: action.index
      })
    case "COLLAPSE_MODAL":
      return Object.assign({}, state, {
          flag: !state.flag
      })
    default:
      return state;
  }
};


