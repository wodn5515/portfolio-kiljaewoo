import axios from "axios";

import { GET_SKILLS } from "./types";

export const getSkills = () => dispatch => {
  axios
    .get("/api/skills")
    .then(res => {
      dispatch({
        type: GET_SKILLS,
        payload: res.data,
      });
    })
    .catch(err => console.log(err));
};
