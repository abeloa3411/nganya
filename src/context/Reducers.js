export const vanreducer = (state, action) => {
  switch (action.type) {
    case "ADD_VAN":
      return { ...state, van: [...state.van, { ...action.payload }] };
    case "REMOVE_VAN":
      return {
        ...state,
        van: state.van.filter((item) => item.id !== action.payload.id),
      };
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

export const userReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
