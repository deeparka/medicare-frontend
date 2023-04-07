import http from "../http-common";

class MedicineDataService {
  getAll() {
    return http.get("/medicines");
  }

  getAllByNameSorted() {
    return http.get("/medicines/name");
  }

  getAllByCategorySorted() {
    return http.get("/medicines/category");
  }

  getAllByPriceSorted() {
    return http.get("/medicines/price");
  }

  getMedicineByName(name) {
    return http.get(`/medicine/${name}`);
  }

  create(data) {
    return http.post("/medicine/add", data);
  }

  update(id, data) {
    return http.put(`/medicine/update/${id}`, data);
  }
}

export default new MedicineDataService();
