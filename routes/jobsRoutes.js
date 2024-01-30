import express  from "express";
import userAuth from '../middlewares/authMiddlewares.js'
import { createJobController, deleteJobController, getAllJobsController, jobStatsController, updateJobController } from "../controller/jobsController.js";

const router = express.Router()

//routes
// CREATE JOB || post method is used
router.post('/create-job', userAuth ,createJobController)

//GET JOBS || get method is used
router.get('/get-job',userAuth,getAllJobsController)

//UPDATE JOBS || put method is used
router.patch('/update-job/:id',userAuth,updateJobController)

//DELETE JOBS || delete method is used
router.delete('/delete-job/:id',userAuth,deleteJobController)

//DELETE STATS FILTER || get method is used
router.get('/job-stats',userAuth,jobStatsController)

export default router