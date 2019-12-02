import { ADD_JOB, DELETE_JOB, GET_JOBS, UPDATE_JOB } from "../actions/types";

const jobInitial = {
  jobs: []
};

export default function(state = jobInitial, action) {
  switch (action.type) {
    case ADD_JOB:
      return { ...state, jobs: [...state.jobs, action.payload] };
    case DELETE_JOB:
      return {
        ...state,
        jobs: state.jobs.filter(job => job._id !== action.payload._id)
      };
    case UPDATE_JOB:
      return {
        ...state,
        jobs: [...state.jobs.filter(
          job => job._id !== action.payload._id
        ), action.payload]
      };
    case GET_JOBS:
      return { ...state, jobs: [...action.payload] };
    default:
      return state;
  }
}
