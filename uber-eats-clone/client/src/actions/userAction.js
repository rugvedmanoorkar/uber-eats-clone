import { GET_USER} from "./types";

import axios from "axios";

export const getUser = (username,password) => (dispatch) => {
  console.log(username, password , " Username password in action")
  axios
    .get("http://localhost:5000/api/v1/customer/login/",{
      params : {
        "username" : username,
        "password" :password

      },
      headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
      
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
