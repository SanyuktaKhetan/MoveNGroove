import mongoose from "mongoose";
// import express from "express"; 
// const app= express();

const CartSchema = new mongoose.Schema({
  email: { 
    type: String, 
    required: true 
  },
  Course_d: [{
    name: { 
      type: String, 
      required: true 
    }, // Ensure course name is required
    image: { 
      type: String, 
      default: "" 
    }, 
    price: { 
      type: Number, 
      required: true 
    } // Ensure price is required and a number
  }],
}, { timestamps: true });

const Cart = mongoose.model("cart_courses", CartSchema);

// API endpoint to get all courses
// app.get('http://localhost:4001/cart', async (req, res) => {
//   try {
//     const courses = await Cart.find();
//     res.json(courses);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Error fetching courses');
//   }
// });

// app.listen(port, () => console.log(`Server listening on port ${env.PORT}`));
export default Cart;

// module.exports = Cart = mongoose.model("cart_courses", CartSchema);