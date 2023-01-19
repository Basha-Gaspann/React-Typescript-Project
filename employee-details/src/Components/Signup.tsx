import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import Grid from "@mui/material/Grid";
import "../Css/Signup.css";

interface IFormInput {
  role: string;
  accountname: string;
  enagagementManager: string;
  clientPartner: string;
  tentativeBillingStartDate: string;
  daysPassed: number;
  skillSet: string;
  experience: number;
  costRateCap: number;
  practiceName: string;
  subPractice: string;
  subSubPractice: string;
  numberOfPositions: number;
  positionType: string;
  location: string;
  requestDateToPractice: string;
  duration: number;
  requestDateToHiring: string;
  daysOpen: string;
  numberOfPositionsFullfilled: string;
  numberOfPositionsOffered: string;
  interviewStatus: string;
  status: string;
  clientInterivew: string;
  comment: string;
}

function User() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className="signup">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container className="grid_container">
          <Grid item xs={6} className="account">
            <label>Account Name</label>
            <input
              type="text"
              placeholder="Account Name"
              {...register("accountname", {
                required: true,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            {errors?.role?.type === "required" && <p>This field is required</p>}

            <label>Enagagement Manager</label>
            <input
              type="text"
              placeholder="Enagagement Manager"
              {...register("enagagementManager", {
                required: true,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            {errors?.role?.type === "required" && <p>This field is required</p>}

            <label>Client Partner</label>
            <input
              type="text"
              placeholder="Client Partner"
              {...register("clientPartner", {
                required: true,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            {errors?.role?.type === "required" && <p>This field is required</p>}

            <label>Role</label>
            <input
              type="text"
              placeholder="Role"
              {...register("role", {
                required: true,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            {errors?.role?.type === "required" && <p>This field is required</p>}

            <label>Tentative Billing Start Date</label>
            <input
              type="text"
              placeholder="Tentative Billing Start Date"
              {...register("tentativeBillingStartDate", {
                required: true,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            {errors?.role?.type === "required" && <p>This field is required</p>}

            <label>Days Passed</label>
            <input
              type="text"
              placeholder="DaysPassed"
              {...register("daysPassed", { min: 2, max: 99 })}
            />
            {errors.daysPassed && (
              <p>You Must be older then 18 and younger then 99 years old</p>
            )}

            <label>SkillSet</label>
            <input
              type="text"
              placeholder="SkillSet"
              {...register("skillSet", {
                required: true,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            {errors?.role?.type === "required" && <p>This field is required</p>}

            <label>Experience</label>
            <input
              type="text"
              placeholder="Experience"
              {...register("experience", { min: 18, max: 99 })}
            />
            {errors.experience && (
              <p>You Must be older then 18 and younger then 99 years old</p>
            )}

            <label>Days Open</label>
            <input
              type="text"
              placeholder="Days Open"
              {...register("daysOpen", {
                required: true,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            {errors?.role?.type === "required" && <p>This field is required</p>}

            <label>Number Of Positions Full filled</label>
            <input
              type="text"
              placeholder="Number Of Positions Full filled"
              {...register("numberOfPositionsFullfilled", {
                required: true,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            {errors?.role?.type === "required" && <p>This field is required</p>}

            <label>Number Of Positions Offered</label>
            <input
              type="text"
              placeholder="Number Of Positions Offered"
              {...register("numberOfPositionsOffered", {
                required: true,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            {errors?.role?.type === "required" && <p>This field is required</p>}

            <label>Interview Status</label>
            <input
              type="text"
              placeholder="Interview Status"
              {...register("interviewStatus", {
                required: true,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            {errors?.role?.type === "required" && <p>This field is required</p>}

            <label>Comment</label>
            <input
              type="text"
              placeholder="Comment"
              {...register("comment", {
                required: true,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            {errors?.role?.type === "required" && <p>This field is required</p>}
          </Grid>
          <Grid item xs={6} className="account">
            <label>Cost RateCap</label>
            <input
              type="text"
              placeholder="CostRateCap"
              {...register("costRateCap", { min: 18, max: 99 })}
            />
            {errors.costRateCap && (
              <p>You Must be older then 18 and younger then 99 years old</p>
            )}
            <label>Practice Name</label>
            <input
              type="text"
              placeholder="Practice Name"
              {...register("practiceName", {
                required: true,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            {errors?.role?.type === "required" && <p>This field is required</p>}

            <label>Sub Practice</label>
            <input
              type="text"
              placeholder="Sub Practice"
              {...register("subPractice", {
                required: true,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            {errors?.role?.type === "required" && <p>This field is required</p>}

            <label>Sub Sub Practice</label>
            <input
              type="text"
              placeholder="Sub Sub Practice"
              {...register("subSubPractice", {
                required: true,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            {errors?.role?.type === "required" && <p>This field is required</p>}

            <label>Number Of Positions</label>
            <input
              type="text"
              placeholder="Number Of Positions"
              {...register("numberOfPositions", { min: 18, max: 99 })}
            />
            {errors.numberOfPositions && (
              <p>You Must be older then 18 and younger then 99 years old</p>
            )}

            <label>Position Type</label>
            <input
              type="text"
              placeholder="position Type"
              {...register("positionType", {
                required: true,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            {errors?.role?.type === "required" && <p>This field is required</p>}

            <label>Location</label>
            <input
              type="text"
              placeholder=" Enter location"
              {...register("location", {
                required: true,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            {errors?.role?.type === "required" && <p>This field is required</p>}

            <label>Request Date To Practice</label>
            <input
              type="text"
              placeholder="Request Date To Practice"
              {...register("requestDateToPractice", {
                required: true,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            {errors?.role?.type === "required" && <p>This field is required</p>}

            <label>Duration</label>
            <input
              type="text"
              placeholder="Duration"
              {...register("duration", { min: 18, max: 99 })}
            />
            {errors.duration && (
              <p>You Must be older then 18 and younger then 99 years old</p>
            )}

            <label>Request Date To Hiring</label>
            <input
              type="text"
              placeholder="Request Date To Hiring"
              {...register("requestDateToHiring", {
                required: true,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            {errors?.role?.type === "required" && <p>This field is required</p>}

            <label>Status</label>
            <input
              type="text"
              placeholder="status"
              {...register("status", {
                required: true,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            {errors?.role?.type === "required" && <p>This field is required</p>}

            <label>ClientInterivew</label>
            <input
              type="text"
              placeholder="Client Interivew"
              {...register("clientInterivew", {
                required: true,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            {errors?.role?.type === "required" && <p>This field is required</p>}
          </Grid>
        </Grid>
        <input type="submit" />
      </form>
    </div>
  );
}

export default User;
