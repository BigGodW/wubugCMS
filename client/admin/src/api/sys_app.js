import http from "../utils/http.js";
import API from "../config/index.js";

export let find = () => {
  return http({
    url: `${API.BASE_API}/api/sysApp/find`,
    method: "get",
  });
};

export let update = (data) => {
  return http({
    url: `${API.BASE_API}/api/sysApp/update`,
    method: "post",
    data,
  });
};
