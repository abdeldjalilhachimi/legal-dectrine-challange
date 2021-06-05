const petCounter = (state = 0, action) => {
  switch (action.type) {
    case "PET_INCE":
      return state + 1;
    case "PET_INCE":
      return state - 1;
    default: 
      return state;
  }
};
