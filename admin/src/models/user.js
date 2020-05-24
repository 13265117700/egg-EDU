import request from "./request";
import api from "./api";
export default {
  passwordLogin: function(data = {}) {
    return request.post(api.passwordLogin, data);
  }
};
