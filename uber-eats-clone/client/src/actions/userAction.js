import { GET_USER} from "./types";

import axios from "axios";

export const getUser = (username,password) => (dispatch) => {
  axios
    .get("http://localhost:5000/api/v1/customer/signup/",{
        params : {
          "username" : username,
          "password" : password
        },
        }).then((res) =>
      dispatch({
          type: GET_USER,
          payload: res.data,
        },
        console.log(res.data)
      ))
    .catch((err) =>
    console.log("err: ", err)
    );
};
