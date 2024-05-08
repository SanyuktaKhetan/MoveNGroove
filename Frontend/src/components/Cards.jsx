import React, { useState } from "react";
import axios from "axios"; // Library for API calls
function Cards({ item }) {
  // const handleAddToCart = async (course) => {
  //   const courseData = {
  //     name: course.name,
  //     price: course.price,
  //     image: course.image, 
  //     category: course.category,
  //     title: course.title, 
  //   };
  //   try {
  //     const response = await axios.post('http://localhost:4001/cart', course); // API endpoint for enrollment
  //     if (response.status === 200 || response.status === 201){
  //       console.log("Course Enrolled Successfully:", response.data); // Handle successful response
  //     }
  //     else {
  //       console.error("Enrollment Failed", response.status,response.data)
  //     }
  //   } catch (error) {
  //     console.error('Error enrolling course:', error);
  //     alert('Failed to enroll! Please try again later.');
  //   }
  // };
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div
          className={`card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border`}
        >
          <figure>
            <img src={item.image} alt="Dance" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <a href="Cart.jsx">
                <button
                  className={`cursor-pointer px-2 py-1 rounded-full border-[2px] duration-200 btn_go`}
                > Enroll Now </button>
              </a>
              {/* <button
                className={`cursor-pointer px-2 py-1 rounded-full border-[2px] duration-200 btn_go`}
                onClick={() => handleAddToCart(item)}
              >
                Go to Cart
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
