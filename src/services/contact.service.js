import http from "../http-common";

class ContactDataService {
    create(data) {
        return http.post("/contact/add", data)
    }
}

export default new ContactDataService();