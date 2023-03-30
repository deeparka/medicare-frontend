import http from "../http-common";

class MedicineDataService {

    getAll() {
        return http.get("/medicines")
    }

    create(data) {
        return http.post("/medicine/add", data)
    }

    update(id, data) {
        return http.put(`/medicine/update/${id}`, data)
    }

    // delete(id) {
    //     return http.delete(`/medicine/delete/${id}`)
    // }
}

export default new MedicineDataService();