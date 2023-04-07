import http from "../http-common";

class WellnessDataService {
  getAll() {
    return http.get("wellnesses");
  }

  // getWellnessByName(name) {
  //   return http.get(`/wellness/${name}`);
  // }
}

export default new WellnessDataService();
