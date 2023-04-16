import React, { useContext, useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import MedicineDataService from "../services/medicine.service";
import AppContext from "../context/AppContext";
import { HiArrowsUpDown } from "react-icons/hi2";

function Products() {
  const navigate = useNavigate();

  const useValue = useContext(AppContext);

  const [defaultMedicines, setDefaultMedicines] = useState(false);
  const [medicines, setMedicines] = useState([]);

  const [nameSort, setNameSort] = useState(false);
  const [medicinesNameSort, setMedicinesNameSort] = useState([]);

  const [categorySort, setCategorySort] = useState(false);
  const [medicinesCategorySort, setMedicinesCategorySort] = useState([]);

  const [priceSort, setPriceSort] = useState(false);
  const [medicinesPriceSort, setMedicinesPriceSort] = useState([]);

  const token = sessionStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      // Redirect to the login page
      navigate("/login");
    }
  }, [navigate, token]);

  useEffect(() => {
    MedicineDataService.getAll().then((response) => {
      setDefaultMedicines(true);
      setMedicines(response.data);
      // console.log(response.data);
    }, []);
  });

  const handleAddToCart = (med) => {
    if (useValue.cartItems.some((item) => item.id === med.id)) {
      alert("Already added to cart");
    } else {
      useValue.addItemsToCart(med);
      alert("Added to cart");
    }
    // console.log(useValue.cartItems);
  };

  const handleEdit = ({ id, name, category, price }) => {
    navigate("/updateproduct", {
      state: {
        medId: id,
        medName: name,
        medCategory: category,
        medPrice: price,
      },
    });
  };

  const handleNameSort = (e) => {
    e.preventDefault();
    MedicineDataService.getAllByNameSorted().then((response) => {
      setMedicinesNameSort(response.data);
    });
    setNameSort(true);
    setCategorySort(false);
    setPriceSort(false);
    setDefaultMedicines(false);
  };

  const handleCategorySort = (e) => {
    e.preventDefault();
    MedicineDataService.getAllByCategorySorted().then((response) => {
      setMedicinesCategorySort(response.data);
    });
    setCategorySort(true);
    setNameSort(false);
    setPriceSort(false);
    setDefaultMedicines(false);
  };

  const handlePriceSort = (e) => {
    e.preventDefault();
    MedicineDataService.getAllByPriceSorted().then((response) => {
      setMedicinesPriceSort(response.data);
    });
    setPriceSort(true);
    setCategorySort(false);
    setNameSort(false);
    setDefaultMedicines(false);
  };

  return (
    <Container style={{ marginTop: "90px", marginBottom: "50px" }}>
      <h2 id="productHeading">
        Here are all the medicines available on our site
      </h2>
      <Table id="productTable" striped bordered hover>
        <thead>
          <tr>
            <th id="productTableHeads">Sl. No.</th>
            <th>
              <div id="productTableHeads">
                <p>Medicine Name</p>
                <HiArrowsUpDown
                  onClick={handleNameSort}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </th>
            <th>
              <div id="productTableHeads">
                <p>Category</p>
                <HiArrowsUpDown
                  onClick={handleCategorySort}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </th>
            <th>
              <div id="productTableHeads">
                <p>Price</p>
                <HiArrowsUpDown
                  onClick={handlePriceSort}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </th>
            <th id="productTableHeads">Buy</th>
            <th>
              <p id="productTableHeads">Edit</p>
            </th>
          </tr>
        </thead>
        <tbody>
          {/* default table data */}
          {!nameSort &&
            !categorySort &&
            !priceSort &&
            defaultMedicines &&
            medicines.map((med, index) => (
              <tr key={med.id}>
                <td>{index + 1}</td>
                <td>{med.name}</td>
                <td>{med.category}</td>
                <td>₹{med.price}</td>
                <td>
                  <Button
                    className="btn-primary"
                    onClick={(e) => {
                      e.preventDefault();
                      handleAddToCart(med);
                    }}
                  >
                    Add to cart
                  </Button>
                </td>
                <td>
                  {useValue.userType === "user" ||
                  useValue.userType === undefined ? (
                    <Button className="btn-secondary" disabled>
                      Edit
                    </Button>
                  ) : (
                    <Button
                      className="btn-secondary"
                      onClick={(e) => {
                        e.preventDefault();
                        handleEdit(med);
                      }}
                    >
                      Edit
                    </Button>
                  )}
                </td>
              </tr>
            ))}

          {/* Table data sorted by name */}
          {nameSort &&
            medicinesNameSort.map((med, index) => (
              <tr key={med.id}>
                <td>{index + 1}</td>
                <td>{med.name}</td>
                <td>{med.category}</td>
                <td>₹{med.price}</td>
                <td>
                  <Button
                    className="btn-primary"
                    onClick={(e) => {
                      e.preventDefault();
                      handleAddToCart(med);
                    }}
                  >
                    Add to cart
                  </Button>
                </td>
                <td>
                  {useValue.userType === "user" ||
                  useValue.userType === undefined ? (
                    <Button className="btn-secondary" disabled>
                      Edit
                    </Button>
                  ) : (
                    <Button
                      className="btn-secondary"
                      onClick={(e) => {
                        e.preventDefault();
                        handleEdit(med);
                      }}
                    >
                      Edit
                    </Button>
                  )}
                </td>
              </tr>
            ))}

          {/* Table data sorted by category */}
          {categorySort &&
            medicinesCategorySort.map((med, index) => (
              <tr key={med.id}>
                <td>{index + 1}</td>
                <td>{med.name}</td>
                <td>{med.category}</td>
                <td>₹{med.price}</td>
                <td>
                  <Button
                    className="btn-primary"
                    onClick={(e) => {
                      e.preventDefault();
                      handleAddToCart(med);
                    }}
                  >
                    Add to cart
                  </Button>
                </td>
                <td>
                  {useValue.userType === "user" ||
                  useValue.userType === undefined ? (
                    <Button className="btn-secondary" disabled>
                      Edit
                    </Button>
                  ) : (
                    <Button
                      className="btn-secondary"
                      onClick={(e) => {
                        e.preventDefault();
                        handleEdit(med);
                      }}
                    >
                      Edit
                    </Button>
                  )}
                </td>
              </tr>
            ))}

          {/* Table data sorted by price */}
          {priceSort &&
            medicinesPriceSort.map((med, index) => (
              <tr key={med.id}>
                <td>{index + 1}</td>
                <td>{med.name}</td>
                <td>{med.category}</td>
                <td>₹{med.price}</td>
                <td>
                  <Button
                    className="btn-primary"
                    onClick={(e) => {
                      e.preventDefault();
                      handleAddToCart(med);
                    }}
                  >
                    Add to cart
                  </Button>
                </td>
                <td>
                  {useValue.userType === "user" ||
                  useValue.userType === undefined ? (
                    <Button className="btn-secondary" disabled>
                      Edit
                    </Button>
                  ) : (
                    <Button
                      className="btn-secondary"
                      onClick={(e) => {
                        e.preventDefault();
                        handleEdit(med);
                      }}
                    >
                      Edit
                    </Button>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default Products;
