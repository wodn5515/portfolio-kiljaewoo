import axios from "axios";

import { GET_PROJECT, GET_PROJECTS, TOGGLE_MODAL } from "./types";

export const getProjects = () => dispatch => {
  axios
    .get("/api/projects")
    .then(res => {
      dispatch({
        type: GET_PROJECTS,
        payload: res.data,
      });
    })
    .catch(err => console.log(err));
};

export const getProject = pk => dispatch => {
  axios
    .get("/api/projects/" + pk)
    .then(res => {
      dispatch({
        type: GET_PROJECT,
        payload: res.data,
      });
    })
    .catch(err => console.log(err));
};

export const modalToggle = () => ({
  type: TOGGLE_MODAL,
});
