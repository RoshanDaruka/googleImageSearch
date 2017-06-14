export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('googleImageSearch');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('googleImageSearch', serializedState);
  } catch (err) {
      console.log("errr ocured"), err;
    // Ignore write errors.
  }
};