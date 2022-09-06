import jwtDecode from "jwt-decode";

const setToken = (token) => localStorage.setItem("token", token);
const removeToken = () => localStorage.removeItem("token");
const getToken = () => localStorage.getItem("token");

const isAuthenticated = () => (!getToken() ? false : true);

const getUser = () => {
  const user = jwtDecode(getToken());

  return user;
};

const getUserType = () => {
  const user = getUser();

  if (user.studentId) return "student";
  else if (user.teachingYear) return "instructor";
  else if (user.departmentHeadOf) return "departmentHead";
  else return "dummy";
};

const auth = {
  isAuthenticated,
  getToken,
  removeToken,
  setToken,
  getUser,
  getUserType,
};

export default auth;
