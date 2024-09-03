import { useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import newRequest from "../../utils/newRequest";
import CheckoutForm from "../../components/checkoutForm/CheckoutForm";
import "./Pay.scss";

const stripePromise = loadStripe(
  "pk_test_51OxN71SHtHiU0hXwaXYXCm0pI0g1FeRPnb7zxCeeSkzjl3FORz5Q83daALq0hVS2yyC3zEggRqG0Po3TMTXxjADZ00X2V2Lzng"
);

const Pay = () => {
  const [clientSecret, setClientSecret] = useState("");

  const { id } = useParams();

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await newRequest.post(
          `/orders/create-payment-intent/${id}`
        );
        setClientSecret(res.data.clientSecret);
      } catch (err) {
        console.log(err);
      }
    };
    makeRequest();
  }, []);

  const appearance = {
    theme: "flat",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="pay">
      {clientSecret && (
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};

export default Pay;
