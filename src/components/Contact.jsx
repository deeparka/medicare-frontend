import React from 'react'

function Contact() {
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Contact us</h3>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="e.g John Doe"
              required
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
              required
            />
          </div>
          <div className="form-group mt-3">
            <label>Meassage</label>
            <textarea
              rows={5}
              className="form-control mt-1"
              placeholder="Enter your message"
              required
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </div>
        </div>
      </form>

      {/* <div className=''>
        <div>
            <h3>Address</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae architecto quae quos odit ad illum corrupti iure molestiae ullam soluta.</p>
        </div>
        <div>
            <h3>Phone</h3>
            <p>+91-9876543201</p>
        </div>
        <div>
            <h3>Email</h3>
            <p>helpus@gmail.com</p>
        </div>
        <div>
            <h3>Website</h3>
            <a href='#'>www.demo.medicare.com</a>
        </div>
      </div> */}
    </div>
  )
}

export default Contact