import auth from "../services/auth";

function Logout(props) {
  auth.removeToken();
  window.location.href = "/";

  return null;
}

export default Logout;
