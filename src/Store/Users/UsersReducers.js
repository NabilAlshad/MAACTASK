import { REGISTER_SUCCESSFULL } from "./UsersAction";

const usersState = {
  isLoggedIn: false,
  users: {
    name: "",
    email: "",
    jwt: ""

  }
}

const authReducer = (state = usersState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESSFULL:
      const newAuthState = {
        isLoggedIn: true,
        users: action.payload
      }
      return newAuthState;

    default:
      return usersState;
  }
}

export default authReducer;
