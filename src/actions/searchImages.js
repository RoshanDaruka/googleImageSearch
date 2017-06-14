import { SearchImages } from '../api/searchApi.js';

export const searchImages = (searchTerm) => (
  dispatch => (
    SearchImages(searchTerm)
      .then((json) => {
        if (json.items) {
          dispatch(addItems(json.items, searchTerm));
          dispatch(removeLoader());
        } else {  
          dispatch(showError());
          dispatch(removeLoader());
        }
      })
  )
);

export const addItems = (items, searchTerm) => {
    return {
        type: "ADD_ITEMS",
        items,
        searchTerm
    }
}

export const removeLoader = () => {
    return {
        type:" REMOVE_LOADER"
    }
}

export const addLoader = () => {
    return {
        type: "ADD_LOADER"
    }
}

export const showError = () => {
    return {
        type: "SHOW_ERROR"
    }
}

export const newImageId = (index) => {
    return {
        type: "NEW_IMAGE_ID",
        index
    }
}

export const collapseModal = () => {
    return {
        type: "COLLAPSE_MODAL",
    }
}

