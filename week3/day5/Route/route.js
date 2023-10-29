//route(student)

const express=require("express");
const router=express.Router();

const StudentController=require("../Controllers/studentcontroller")
router.post("/register",StudentController.createStudent);
module.exports=router;



//route(course)

// const express=require("express");
// const router=express.Router();

// const CourseController=require("../Controllers/courseController")
// router.post("/register",CourseController.createCourse);
// module.exports=router;