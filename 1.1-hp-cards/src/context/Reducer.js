export const initialState = {
  house: "",
  selectedCharacter: null,
  search: "",
};

export function appReducer(state, action) {
  switch (action.type) {
    case "SET_HOUSE":
      return {
        ...state,
        house: action.payload,
      };
    case "SET_SELECTED_CHARACTER":
      return {
        ...state,
        selectedCharacter: action.payload,
      };
    case "SET_SEARCH":
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
}
