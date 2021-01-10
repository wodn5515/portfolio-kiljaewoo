import { GET_PROJECTS, TOGGLE_MODAL, GET_PROJECT } from "../actions/types";

const initialState = {
  projects: [],
  modal: false,
  project: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      };
    case TOGGLE_MODAL:
      return {
        ...state,
        modal: !state.modal,
      };
    case GET_PROJECT:
      return {
        ...state,
        modal: !state.modal,
        project: action.payload,
      };
    default:
      return state;
  }
}
