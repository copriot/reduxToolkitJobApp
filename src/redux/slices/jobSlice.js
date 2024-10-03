import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    jobs: [],
    isLoading: false,
    error: false,
}



const jobSlice = createSlice({
    name: 'job',
    initialState: initialState,
    reducers: {
        setLoading: (state) => {
            state.isLoading = true;
        },
        setError: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        },
        setJobs: (state, { payload }) => {
            state.isLoading = false;
            state.error = null;
            state.jobs = payload;
        },
        deleteJob: (state, { payload }) => {
            const index = state.jobs.findIndex((i) => i.id === payload);
            state.jobs.splice(index, 1)
        },
        createJob: (state, { payload }) => {
            state.jobs.push(payload)
        }

    },

})
export const { setError, setJobs, setLoading, deleteJob, createJob } = jobSlice.actions;

export default jobSlice.reducer;


