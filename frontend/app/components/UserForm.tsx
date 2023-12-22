import React, { FormEventHandler } from "react";
import { Form } from "./semantics";
import { useForm, SubmitHandler } from "react-hook-form";
import { userForm } from "../types/global";

const UserForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<userForm>();
  const onSubmit: SubmitHandler<userForm> = (data) => console.log(data);
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" name="name" />
      <input type="email" name="email" />
      <input type="password" name="password" />
      <input type="number" name="napermissionLevelme" />
      <button type="submit">Submit</button>
    </Form>
  );
};

export default UserForm;
