import React from 'react'

function Dashboard() {
  return (
    <div>
        <h1>Here are some available medicines</h1>
        <div class="card" style={{ "width": "18rem" }}>
            <img src="#" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">Javascript course</h5>
                <p class="card-text">This is the new course and you will learn the new thigs in this. Please enroll to this course. Click enroll button</p>
                <a href="first.html" class="btn btn-primary">Add to cart</a>
            </div>
        </div>
    </div>
  )
}

export default Dashboard