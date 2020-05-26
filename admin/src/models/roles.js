import request from "./request";
import api from "./api";

export default {
  index: function(){
    return request.get(api.roles)
  },
  permission: function(){
    return request.get(api.permission)
  },
  created: function(data) {
    return request.post(api.roles,data)
  },
}