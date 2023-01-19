import React from "react";
import "../Css/Login.css";
import { useForm } from "react-hook-form";
interface IFormInput {
  email: string;
  password: string;
  experience: string;
  example: string;
}

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    alert(JSON.stringify(data));
  }; // your form submit function which will invoke after successful validation

  console.log(watch("example")); // you can watch individual input by pass the name of the input
  return (
    <div className="loginform">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <input
          type="email"
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
        />
        {errors?.email?.type === "required" && <p>This field is required</p>}
        <label>Password</label>
        <input
          type="password"
          {...register("password", {
            required: true,
            pattern: /^[A-Za-z]\w{7,14}$/,
          })}
        />
        {errors?.password?.type === "required" && <p>This field is required</p>}

        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
