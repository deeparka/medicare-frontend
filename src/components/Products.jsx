import React, { useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import MedicineDataService from "../services/medicine.service";

function Products() {

  const [medicines, setMedicines] = useState([]);

  MedicineDataService.getAll().then((response) => {
    setMedicines(response.data)
    console.log(response.data);
  });

  return (
    <Container>
      <h2 id="productHeading">
        Here are all the medicines available on our site
      </h2>
      <Table id="productTable" striped bordered hover>
        <thead>
          <tr>
            <th>Sl. No.</th>
            <th>Medicine Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Buy</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
                <td>1</td>
                <td>Paracetomol</td>
                <td>Allopathic</td>
                <td>25$</td>
                <td>Add to cart</td>
                <td>edit btn</td>
                </tr> */}
          {
            medicines.map((med, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{med.name}</td>
                <td>{med.category}</td>
                <td>{med.price}</td>
                <td><Button className="btn-primary">Add to cart</Button></td>
                <td><Link to="/manageproduct"><Button className="btn-secondary">Edit</Button></Link></td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </Container>
  );
}

export default Products;
