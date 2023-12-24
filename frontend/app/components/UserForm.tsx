"use client";
import React from "react";
import axios from "axios";
import { Form, Div } from "./semantics";
import { useForm, SubmitHandler } from "react-hook-form";
import { userStructure } from "../types/global";

const UserForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<userStructure>();
  const onSubmit = (data: any) => {
    console.log(process.env.IP_EC2_INSTANCE);
    axios
      .post(`http://${process.env.IP_EC2_INSTANCE}/users`, data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.data);
      });
  };
  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-[20vw] m-2 p-4 items-center"
    >
      <Div className="flex items-center">
        <label>Name:</label>
        <input
          type="text"
          {...register("name", { required: true })}
          className="m-2 text-black"
        />
      </Div>
      <Div className="flex items-center">
        <label>Email:</label>
        <input
          type="email"
          {...register("email", { required: true })}
          className="m-2 text-black"
        />
      </Div>
      <Div className="flex items-center">
        <label>Password:</label>
        <input
          type="password"
          {...register("password", { required: true, minLength: 8 })}
          className="m-2 text-black"
        />
      </Div>
      <Div className="flex items-center">
        <label>Permission Level:</label>
        <input
          type="number"
          {...register("permissionLevel", { required: true })}
          className="m-2 text-black"
        />
      </Div>
      <button type="submit" className="bg-white text-black m-2 w-14">
        Submit
      </button>
    </Form>
  );
};

export default UserForm;
