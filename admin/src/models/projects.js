import request from "./request";
import api from "./api";

export default {
  index: function(data){
    return request.get(api.projects,data)
  },
  created: function(data){
    return request.post(api.projects,data)
  }
}