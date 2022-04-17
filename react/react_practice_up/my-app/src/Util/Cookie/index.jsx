import { useCookies } from "react-cookie";

const Cookie = (AccessToken) => {
  const [cookies, setCookie, getCookie] = useCookies(["AccessToken"]);
};
