import express from "express";
import { authoriser } from "../middleware/authorisation";
import AddAssignment from "../controllers/teachercontollers/addAssignments";
import AddCourse from "../controllers/teachercontollers/addCourse";
import AddScore from "../controllers/teachercontollers/addScore";

const router = express.Router();

router.post("/addAssignment", authoriser, AddAssignment);
router.post("/addCourse", authoriser, AddCourse);
router.post("/addScore", authoriser, AddScore);

export default router;
