import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import Grid from "@mui/material/Grid";
import "../Css/Signup.css";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


interface IFormInput {
  role: string;
  accountname: string;
  enagagementManager: string;
  clientPartner: string;
  tentativeBillingStartDate: Date;
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
  requestDateToPractice: Date;
  duration: number;
  requestDateToHiring: Date;
  daysOpen: number;
  numberOfPositionsFullfilled: number;
  numberOfPositionsOffered: number;
  interviewStatus: string;
  // status: string;
  clientInterivew: string;
  comment: string;
}

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
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
               
              })}
            />
            {errors?.accountname?.type === "required" && <p>This field is required</p>}

            <label>Enagagement Manager</label>
            <input
              type="text"
              placeholder="Enagagement Manager"
              {...register("enagagementManager", {
                required: true,    
              })}
            />
            {errors?.enagagementManager?.type === "required" && <p>This field is required</p>}

            <label>Client Partner</label>
            <input
              type="text"
              placeholder="Client Partner"
              {...register("clientPartner", {
                required: true,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            {errors?.clientInterivew?.type === "required" && <p>This field is required</p>}

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
              type="date"
              placeholder="Tentative Billing Start Date"
              {...register("tentativeBillingStartDate", {
                required: true,
              })}
            />
            {errors?.tentativeBillingStartDate?.type === "required" && <p>This field is required</p>}

            <label>Days Passed</label>
            <input
              type="number"
              placeholder="DaysPassed"
              {...register("daysPassed",{required:true} )}
            />
            {errors.daysPassed && (
              <p>This field is required</p>
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
            {errors?.skillSet?.type === "required" && <p>This field is required</p>}

            <label>Experience</label>
            <input
              type="number"
              placeholder="Experience"
              {...register("experience", )}
            />
            {errors.experience && (
              <p>This field is required</p>
            )}

            <label>Days Open</label>
            <input
              type="number"
              placeholder="Days Open"
              {...register("daysOpen", {
                required: true,
              })}
            />
            {errors?.daysOpen?.type === "required" && <p>This field is required</p>}

            <label>Number Of Positions Full filled</label>
            <input
              type="number"
              placeholder="Number Of Positions Full filled"
              {...register("numberOfPositionsFullfilled", {
                required: true,
              })}
            />
            {errors?.numberOfPositionsFullfilled?.type === "required" && <p>This field is required</p>}

            <label>Number Of Positions Offered</label>
            <input
              type="number"
              placeholder="Number Of Positions Offered"
              {...register("numberOfPositionsOffered", {
                required: true,
              })}
            />
            {errors?.numberOfPositionsFullfilled?.type === "required" && <p>This field is required</p>}

            <label>Comment</label>
            <input
              type="text"
              placeholder="Comment"
              {...register("comment", {
                required: true,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            {errors?.interviewStatus?.type === "required" && <p>This field is required</p>}


            <div>
      <FormControl className="formcontrol">
      <label> Interview </label>
        <Select  {...register(" Interview ", 
              )}>
          <MenuItem value={"offline"}>Offline</MenuItem>
          <MenuItem value={"online"}>Online</MenuItem>
         
        </Select>
      </FormControl>
    </div>
    
          </Grid>
          <Grid item xs={6} className="account">
            <label>Cost RateCap</label>
            <input
              type="number"
              placeholder="CostRateCap"
              {...register("costRateCap", )}
            />
            {errors.costRateCap && (
              <p>This field is required</p>
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
            {errors?.costRateCap?.type === "required" && <p>This field is required</p>}

            <label>Sub Practice</label>
            <input
              type="text"
              placeholder="Sub Practice"
              {...register("subPractice", {
                required: true,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            {errors?.subPractice?.type === "required" && <p>This field is required</p>}

            <label>Sub Sub Practice</label>
            <input
              type="text"
              placeholder="Sub Sub Practice"
              {...register("subSubPractice", {
                required: true,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            {errors?.subSubPractice?.type === "required" && <p>This field is required</p>}

            <label>Number Of Positions</label>
            <input
              type="number"
              placeholder="Number Of Positions"
              {...register("numberOfPositions", )}
            />
            {errors.numberOfPositions && (
              <p>This field is required</p>
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
            {errors?.positionType?.type === "required" && <p>This field is required</p>}

            <label>Location</label>
            <input
              type="text"
              placeholder=" Enter location"
              {...register("location", {
                required: true,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            {errors?.location?.type === "required" && <p>This field is required</p>}

            <label>Request Date To Practice</label>
            <input
              type="Date"
              placeholder="Request Date To Practice"
              {...register("requestDateToPractice", {
                required: true,
            
              })}
            />
            {errors?.requestDateToPractice?.type === "required" && <p>This field is required</p>}

            <label>Duration</label>
            <input
              type="number"
              placeholder="Duration"
              {...register("duration", { required:true })}
            />
            {errors.duration && (
              <p>This field is required</p>
            )}

            <label>Request Date To Hiring</label>
            <input
              type="Date"
              placeholder="Request Date To Hiring"
              {...register("requestDateToHiring", {
                required: true,
              
              })}
            />
            {errors?.requestDateToHiring?.type === "required" && <p>This field is required</p>}

         
            

<div>
      <FormControl className="formcontrol">
      <label>Status</label>
        <Select {...register("status", 
              )}>
          <MenuItem value={"open"}>Open</MenuItem>
          <MenuItem value={"close"}>Close</MenuItem>
          
        </Select>
      </FormControl>
    </div>

    <div>
      <FormControl className="formcontrol">
      <label>Client Interview</label>
        <Select  {...register("clientInterview", 
              )}>
          <MenuItem value={"yes"}>yes</MenuItem>
          <MenuItem value={"no"}>No</MenuItem>
        </Select>
      </FormControl>
    </div>

    <div>
      <FormControl className="formcontrol">
      <label>InterviewStatus</label>
        <Select  {...register("interviewStatus", 
              )}>
          <MenuItem value={"selected"}>Selected</MenuItem>
          <MenuItem value={"pending"}>Pending</MenuItem>
          <MenuItem value={"sheduled"}>Sheduled</MenuItem>
        </Select>
      </FormControl>
    </div>


    

   

          </Grid>
         
        </Grid>
        <input type="submit" />
      </form>
    </div>
  );
}

export default Signup;
