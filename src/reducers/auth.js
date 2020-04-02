import ActionTypes from "../constants/actionTypes";

let token = localStorage.getItem("token");
let id = localStorage.getItem("id");
let name = localStorage.getItem("name");
let email = localStorage.getItem("email");
let role = localStorage.getItem("role");

const initialState = token
  ? {
      authenticated: true,
      id: id,
      name: name,
      email: email,
      token: token,
      role: role,
      profile_completion: "",
      reset_password:[]
      // appointment:[]
    }
  : {
      authenticated: false,
      id: "",
      token: "",
      name: "",
      email: "",
      role: "",
      profile_completion: "",
      reset_password:[]
    };

export default function auth(state = initialState, action) {
  let { payload } = action;
  switch (action.type) {
    case ActionTypes.AUTH_LOGIN.SUCCESS:
      return {
        ...state,
        token: payload.token,
        name: payload.name,
        email: payload.email,
        role: payload.role,
        id: payload.id,
        authenticated: true,
        profile_completion: payload.profile_completion
      };
    // case ActionTypes.AUTH_FORGOT_PASSWORD.SUCCESS:
    //   return {
    //     ...state,
    //     reset_password:payload

    //   };
    case ActionTypes.AUTH_REGISTER.SUCCESS:
      return {
        ...state,
        token: payload.token,
        name: payload.name,
        email: payload.email,
        role: payload.role,
        id: payload.id,
        authenticated: true,
        profile_completion: payload.profile_completion
      };
    // case ActionTypes.AUTH_LOGOUT.SUCCESS:
    //   return {
    //     ...state,
    //     authenticated: false,
    //     token: "",
    //     name: "",
    //     email: "",
    //     role: "",
    //     id: "",
    //     profile_completion: ""
    //   };

    default:
      return state;
  }
}
