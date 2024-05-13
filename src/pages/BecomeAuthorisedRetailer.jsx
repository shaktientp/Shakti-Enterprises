import React, { useState } from "react";
import appwriteService, { Service } from "../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button, Input, Logo } from "../components/index.js";
import "./Authorised.css";

function BecomeAuthorisedRetailer() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();

  const create = async (data) => {
    setError("");
    try {
      const dbPost = await appwriteService.createRetailer({
        ...data,
      });
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-fit bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 text-2xl">
      <div className="w-full max-w-3xl space-y-8 bg-white shadow-lg rounded-2xl p-8">
        <div className="flex justify-center">
          <Logo />
        </div>
        <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
          Become an Authorised Retailer
        </h2>
        {error && (
          <p className="mt-2 text-center text-sm text-red-600">{error}</p>
        )}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(create)}>
          <div className="rounded-md shadow-sm -space-y-px">
            <Input
              label="Full Name"
              placeholder="Enter your full name"
              {...register("name", { required: "Full name is required" })}
              className="mb-10"
            />
            <Input
              label="Contact Number"
              placeholder="Enter your contact number"
              type="tel"
              {...register("contact", {
                required: "Contact number is required",
                pattern: {
                  value: /^\d{10}$/,
                  message: "Contact number must be a valid 10-digit number",
                },
              })}
              className="mb-10"
            />
            <Input
              label="Email"
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Email address must be valid",
                },
              })}
              className="mb-10"
            />
            <Input
              label="Pincode"
              placeholder="Enter your pincode"
              type="text"
              {...register("pincode", {
                required: "Pincode is required",
                pattern: {
                  value: /^\d{6}$/,
                  message: "Pincode must be a valid 6-digit number",
                },
              })}
              className="mb-10"
            />
            <Input
              label="Shop Name"
              placeholder="Enter your shop name"
              type="text"
              {...register("shopName", {
                required: "Shop name is required",
                minLength: {
                  value: 3,
                  message: "Shop name must be at least 3 characters long",
                },
              })}
              className="mb-10"
            />
          </div>
          <Button
            type="submit"
            className="text-center text-2xl group relative flex justify-center py-2 px-4 border border-transparent font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mx-auto">
            Apply
          </Button>
        </form>
      </div>
    </div>
  );
}

export default BecomeAuthorisedRetailer;
