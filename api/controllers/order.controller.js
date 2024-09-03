import { Order } from "../models/order.model.js";
import { Gig } from "../models/gig.model.js";
import Stripe from "stripe";

export const intent = async (req, res, next) => {
  try {
    const stripe = new Stripe(process.env.STRIPE_SK); // Initialize Stripe with the secret key

    const gig = await Gig.findById(req.params.id);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: gig.price * 100, // Convert amount to paisa (smallest denomination for INR)
      currency: "inr", // Set currency to INR
    });

    const newOrder = new Order({
      gigId: gig._id,
      img: gig.cover,
      title: gig.title,
      buyerId: req.userId,
      sellerId: gig.userId,
      price: gig.price,
      payment_intent: paymentIntent.id,
    });

    await newOrder.save(); // Save the new order in the database

    res.status(200).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("Error creating payment intent:", error);
    res.status(500).json({ error: "Failed to create payment intent" });
  }
};

export const getOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({
      ...(req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }),
      isCompleted: true,
    });

    res.status(200).send(orders);
  } catch (err) {
    next(err);
  }
};

export const confirm = async (req, res, next) => {
  try {
    const orders = await Order.findOneAndUpdate(
      {
        payment_intent: req.body.payment_intent,
      },
      {
        $set: {
          isCompleted: true,
        },
      }
    );

    res.status(200).send("Order has been confirmed.");
  } catch (err) {
    next(err);
  }
};
