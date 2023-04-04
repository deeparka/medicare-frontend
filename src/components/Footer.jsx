import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter className="text-center" color="white" bgColor="dark">
      <MDBContainer className="p-4">
        <h2 className="mb-4">
          MediCare - The Medicine Application
        </h2>

        <section className="mb-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            distinctio earum repellat quaerat voluptatibus placeat nam, commodi
            optio pariatur est quia magnam eum harum corrupti dicta, aliquam
            sequi voluptate quas.
          </p>
        </section>

        <section>
          <MDBRow className="text-center">
            <MDBCol lg="4" md="6" className="mb-4 mb-md-0">
              <h3>Contacts</h3>

              <p className="text-white">+91-9876543201</p>
              <p className="text-white">medicare3@yahoo.com</p>
            </MDBCol>

            <MDBCol lg="4" md="6" className="mb-4 mb-md-0">
              <h3>Get in touch</h3>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Medium
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="4" md="6" className="mb-4 mb-md-0">
              <h3>Address</h3>
              <p>Pune, Maharashtra, India</p>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2023 Copyright:{" "}
        <a className="text-white" href="#">
          MediCare
        </a>
      </div>
    </MDBFooter>
  );
}
