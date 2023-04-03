import http from "../http-common";

class AppointmentsDataService {

    getAll() {
        return http.get("/appointments")
    }

}

export default new AppointmentsDataService();