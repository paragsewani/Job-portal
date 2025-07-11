import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const jobSlice = createSlice({
  name: "jobs",
  initialState: {
    jobs: [],
    loading: false,
    error: null,
    message: null,
    singleJob: {},
    myJobs: [],
  },
  reducers: {
    requestForAllJobs(state) {
      state.loading = true;
      state.error = null;
    },
    successForAllJobs(state, action) {
      state.loading = false;
      state.jobs = action.payload;
      state.error = null;
    },
    failureForAllJobs(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    requestForSingleJob(state) {
      state.message = null;
      state.error = null;
      state.loading = true;
    },
    successForSingleJob(state, action) {
      state.loading = false;
      state.error = null;
      state.singleJob = action.payload;
    },
    failureForSingleJob(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    requestForPostJob(state) {
      state.message = null;
      state.error = null;
      state.loading = true;
    },
    successForPostJob(state, action) {
      state.message = action.payload;
      state.error = null;
      state.loading = false;
    },
    failureForPostJob(state, action) {
      state.message = null;
      state.error = action.payload;
      state.loading = false;
    },
    requestForDeleteJob(state) {
      state.loading = true;
      state.error = null;
      state.message = null;
    },
    successForDeleteJob(state, action) {
      state.loading = false;
      state.error = null;
      state.message = action.payload;
    },
    failureForDeleteJob(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.message = null;
    },
    requestForMyJobs(state) {
      state.loading = true;
      state.myJobs = [];
      state.error = null;
    },
    successForMyJobs(state, action) {
      state.loading = false;
      state.myJobs = action.payload;
      state.error = null;
    },
    failureForMyJobs(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    clearAllErrors(state) {
      state.error = null;
    },
    resetJobSlice(state) {
      state.error = null;
      state.loading = false;
      state.message = null;
      state.singleJob = {};
    },
  },
});

export const fetchJobs = (city, niche, searchKeyword = "") => async (dispatch) => {
  try {
    dispatch(jobSlice.actions.requestForAllJobs());

    let queryParams = [];
    if (searchKeyword) queryParams.push(`searchKeyword=${searchKeyword}`);
    if (city && city !== "All") queryParams.push(`city=${city}`);
    if (niche && niche !== "All") queryParams.push(`niche=${niche}`);

    const queryString = queryParams.join("&");
    const url = `https://job-portal-x0lu.onrender.com/api/v1/job/getall?${queryString}`;

    const response = await axios.get(url, { withCredentials: true });
    dispatch(jobSlice.actions.successForAllJobs(response.data.jobs));
    dispatch(jobSlice.actions.clearAllErrors());
  } catch (error) {
    dispatch(jobSlice.actions.failureForAllJobs(error.response?.data?.message || "Failed to fetch jobs."));
  }
};

export const fetchSingleJob = (jobId) => async (dispatch) => {
  dispatch(jobSlice.actions.requestForSingleJob());
  try {
    const response = await axios.get(
      `https://job-portal-x0lu.onrender.com/api/v1/job/get/${jobId}`,
      { withCredentials: true }
    );
    dispatch(jobSlice.actions.successForSingleJob(response.data.job));
    dispatch(jobSlice.actions.clearAllErrors());
  } catch (error) {
    dispatch(jobSlice.actions.failureForSingleJob(error.response?.data?.message || "Failed to fetch job."));
  }
};

export const postJob = (data) => async (dispatch) => {
  dispatch(jobSlice.actions.requestForPostJob());
  try {
    const response = await axios.post(
      `https://job-portal-x0lu.onrender.com/api/v1/job/post`,
      data,
      {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      }
    );
    dispatch(jobSlice.actions.successForPostJob(response.data.message));
    dispatch(jobSlice.actions.clearAllErrors());
  } catch (error) {
    dispatch(jobSlice.actions.failureForPostJob(error.response?.data?.message || "Failed to post job."));
  }
};

export const getMyJobs = () => async (dispatch) => {
  dispatch(jobSlice.actions.requestForMyJobs());
  try {
    const response = await axios.get(
      `https://job-portal-x0lu.onrender.com/api/v1/job/getmyjobs`,
      { withCredentials: true }
    );
    dispatch(jobSlice.actions.successForMyJobs(response.data.myJobs));
    dispatch(jobSlice.actions.clearAllErrors());
  } catch (error) {
    dispatch(jobSlice.actions.failureForMyJobs(error.response?.data?.message || "Failed to fetch my jobs."));
  }
};

export const deleteJob = (id) => async (dispatch) => {
  dispatch(jobSlice.actions.requestForDeleteJob());
  try {
    const response = await axios.delete(
      `https://job-portal-x0lu.onrender.com/api/v1/job/delete/${id}`,
      { withCredentials: true }
    );
    dispatch(jobSlice.actions.successForDeleteJob(response.data.message));
    dispatch(clearAllJobErrors());
  } catch (error) {
    dispatch(jobSlice.actions.failureForDeleteJob(error.response?.data?.message || "Failed to delete job."));
  }
};

export const clearAllJobErrors = () => (dispatch) => {
  dispatch(jobSlice.actions.clearAllErrors());
};

export const resetJobSlice = () => (dispatch) => {
  dispatch(jobSlice.actions.resetJobSlice());
};

export default jobSlice.reducer;
