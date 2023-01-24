import React from "react";
import "../Css/Login.css";
import { useForm } from "react-hook-form";
interface IFormInput {
  email: string;
  password: string;
  experience: string;
}

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    console.log(data);
  };

  return (
    <div className="loginform  container">
      <div className="row">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="col-xs-12 col-md-6 col-lg-4">
            <label>Email</label>
            <input
              type="email"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors?.email?.type === "required" && (
              <p>This field is required</p>
            )}
          </div>

          <div className="col-xs-12">
            <label>Password</label>
            <input
              type="password"
              {...register("password", {
                required: true,
                pattern: /^[A-Za-z]\w{7,14}$/,
              })}
            />
            {errors?.password?.type === "required" && (
              <p>This field is required</p>
            )}
          </div>

          <input className="btn btn-primary" type="submit" />
        </form>
      </div>
    </div>
  );
}

export default App;
