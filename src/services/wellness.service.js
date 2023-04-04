import http from "../http-common";

class WellnessDataService {
  getAll() {
    return http.get("wellnesses");
  }
}

export default new WellnessDataService();
