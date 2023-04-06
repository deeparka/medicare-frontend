import http from "../http-common";

class UserDataService {
  getAll() {
    return http.get(`/users`);
  }
  get(email) {
    return http.get(`/user/${email}`);
  }
  create(data) {
    return http.post("/user/add", data);
  }
}

export default new UserDataService();
