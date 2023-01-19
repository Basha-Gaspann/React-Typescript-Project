import React from 'react'
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import Grid from '@mui/material/Grid';
import "../Css/User.css";


interface IFormInput {
  role: string,
  accountname: string,
  enagagementManager: string,
  clientPartner: string,
  tentativeBillingStartDate: string,
  daysPassed: number,
  skillSet: string,
  experience: number,
  costRateCap: number,
  practiceName: string,
  subPractice: string,
  subSubPractice: string,
  numberOfPositions: number,
  positionType: string,
  location: string,
  requestDateToPractice: string,
  duration: number,
  requestDateToHiring: string,
  daysOpen: string,
  numberOfPositionsFullfilled: string,
  numberOfPositionsOffered: string,
  interviewStatus: string,
  status: string,
  clientInterivew: string,
  comment: string,
}

function User() {
  const {
    register,
    handleSubmit,
   
    formState: { errors }
  } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    alert(JSON.stringify(data));
  }; // your form submit function which will invoke after successful validation

  // console.log(watch("example")); // you can watch individual input by pass the name of the input

  return (
    <div className='signup'>
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container className='grid_container' >
        <Grid item xs={6} className="account">
          <label>Account Name</label>
          <input
            type="text"
            placeholder="AccountName"
            {...register("accountname", {
              required: true,
              pattern: /^[A-Za-z]+$/i,
            })}
          />
          {errors?.role?.type === "required" && <p>This field is required</p>}

          <label>EnagagementManager</label>
          <input
            type="text"
            placeholder="EnagagementManager"
            {...register("enagagementManager", {
              required: true,
              pattern: /^[A-Za-z]+$/i,
            })}
          />
          {errors?.role?.type === "required" && <p>This field is required</p>}

          <label>ClientPartner</label>
          <input
            type="text"
            placeholder="ClientPartner"
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

          <label>TentativeBillingStartDate</label>
          <input
            type="text"
            placeholder="TentativeBillingStartDate"
            {...register("tentativeBillingStartDate", {
              required: true,
              pattern: /^[A-Za-z]+$/i,
            })}
          />
          {errors?.role?.type === "required" && <p>This field is required</p>}

          <label>DaysPassed</label>
          <input 
           type="text"
           placeholder="DaysPassed"
           {...register("daysPassed", { min: 2, max: 99 })} />
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
          {...register("experience", { min: 18, max: 99 })} />
          {errors.experience && (
            <p>You Must be older then 18 and younger then 99 years old</p>
          )}

          <label>DaysOpen</label>
          <input
            type="text"
            placeholder="DaysOpen"
            {...register("daysOpen", {
              required: true,
              pattern: /^[A-Za-z]+$/i,
            })}
          />
          {errors?.role?.type === "required" && <p>This field is required</p>}

          <label>NumberOfPositionsFullfilled</label>
          <input
            type="text"
            placeholder="NumberOfPositionsFullfilled"
            {...register("numberOfPositionsFullfilled", {
              required: true,
              pattern: /^[A-Za-z]+$/i,
            })}
          />
          {errors?.role?.type === "required" && <p>This field is required</p>}

          <label>NumberOfPositionsOffered</label>
          <input
            type="text"
            placeholder="NumberOfPositionsOffered"
            {...register("numberOfPositionsOffered", {
              required: true,
              pattern: /^[A-Za-z]+$/i,
            })}
          />
          {errors?.role?.type === "required" && <p>This field is required</p>}

          <label>InterviewStatus</label>
          <input
            type="text"
            placeholder="InterviewStatus"
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
            {...register("costRateCap", { min: 18, max: 99 })}  />
          {errors.costRateCap && (
            <p>You Must be older then 18 and younger then 99 years old</p>
          )}
          <label>PracticeName</label>
          <input
            type="text"
            placeholder="PracticeName"
            {...register("practiceName", {
              required: true,
              pattern: /^[A-Za-z]+$/i,
            })}
          />
          {errors?.role?.type === "required" && <p>This field is required</p>}


          <label>SubPractice</label>
          <input
            type="text"
            placeholder="SubPractice"
            {...register("subPractice", {
              required: true,
              pattern: /^[A-Za-z]+$/i,
            })}
          />
          {errors?.role?.type === "required" && <p>This field is required</p>}

          <label>SubSubPractice</label>
          <input
            type="text"
            placeholder="SubSubPractice"
            {...register("subSubPractice", {
              required: true,
              pattern: /^[A-Za-z]+$/i,
            })}
          />
          {errors?.role?.type === "required" && <p>This field is required</p>}


          <label>NumberOfPositions</label>
          <input
           type="text"
           placeholder="NumberOfPositions"
          {...register("numberOfPositions", { min: 18, max: 99 })} />
          {errors.numberOfPositions && (
            <p>You Must be older then 18 and younger then 99 years old</p>
          )}

          <label>PositionType</label>
          <input
            type="text"
            placeholder="positionType"
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

          <label>RequestDateToPractice</label>
          <input
            type="text"
            placeholder="RequestDateToPractice"
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
           {...register("duration", { min: 18, max: 99 })} />
          {errors.duration && (
            <p>You Must be older then 18 and younger then 99 years old</p>
          )}

          <label>RequestDateToHiring</label>
          <input
            type="text"
            placeholder="RequestDateToHiring"
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
            placeholder="ClientInterivew"
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