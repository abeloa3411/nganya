export const vanreducer = (state, action) => {
  switch (action.type) {
    case "ADD_VAN":
      return { ...state, van: [...state.van, { ...action.payload }] };
    default:
      return state;
  }
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case "FILTER_BY_RATE":
      return { ...state, byRating: action.payload };
    case "FILTER_BY_SEARCH":
      return { ...state, searchQuery: action.payload };
    case "CLEAR_FILTERS":
      return {
        byBooked: false,
        byRating: 0,
        searchQuery: "",
      };
    default:
      return state;
  }
};
