import React from 'react'
import { Container, Table } from 'react-bootstrap'

function Products() {
  return (
    <Container>
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>Sl. No.</th>
                <th>Medicine Name</th>
                <th>Image</th>
                <th>Category</th>
                <th>Price</th>
                <th>Buy</th>
                <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Paracetomol</td>
                <td>paracetomol-img</td>
                <td>Allopathic</td>
                <td>25$</td>
                <td>Add to cart</td>
                <td>edit btn</td>
                </tr>
            </tbody>
        </Table>
    </Container>
  )
}

export default Products