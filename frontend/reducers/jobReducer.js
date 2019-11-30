import { ADD_JOB, DELETE_JOB } from '../actions/types';

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
        jobs: state.jobs.filter(job => job.name !== action.payload.name)
      };
    default:
      return state;
  }
}
