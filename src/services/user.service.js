import http from "../http-common";

class UserDataService {
  get(email) {
    return http.get(`/user/${email}`);
  }

  create(data) {
    return http.post("/user/add", data);
  }
}

export default new UserDataService();
