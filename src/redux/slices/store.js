import { configureStore } from "@reduxjs/toolkit";
import job from "./jobSlice";



export default configureStore({ reducer: { job } })