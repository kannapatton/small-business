export const addListings = (listings) => {
    return {
      type: "ADD_LISTINGS",
      value: listings,
    };
  };
  
  
  export const removeListings = (index) => {
    return {
      type: "REMOVE_LISTINGS",
      value: index,
    };
  };