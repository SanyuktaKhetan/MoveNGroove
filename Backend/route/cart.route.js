import express from "express";
import { getCart} from "../controller/cart.controller.js";
// import { Cart} from "../model/cart.model.js";

//Creating a new express router instance 
const router = express.Router();
// const Cart = require('../model/cart.js');

//defines the POST route 
router.post("/cart", getCart);
// router.get("/cart", getCart);

router.get('/', async (req, res) => {
  try {
    const courses = await Cart.find();
    console.log("Getting the course");
    res.json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching courses');
  }
});

// router.post("/cart", getCart)

export default router;