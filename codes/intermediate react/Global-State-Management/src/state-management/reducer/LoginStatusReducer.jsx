const LoginStatusReducer = (name, dispatch) => {
  // if(dispatch.type==="LOGIN") {
  //     name = "Parivesh is logged in yay!!"
  //     return name
  // }
  switch (dispatch.type) {
    case "LOGIN":
      name = "Parivesh is logged in yay!!";
      return name;
    
    case "LOGOUT":
      name = "Parivesh is logged out bye :)";
      return name;

    default:
      return "! oops error !";
  }
};

export default LoginStatusReducer;
