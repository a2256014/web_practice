const IsLogin = () => {
  return localStorage.getItem("accessToken") ? true : false;
};

export default IsLogin;
