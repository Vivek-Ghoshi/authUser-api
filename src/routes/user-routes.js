const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../middlewares/authMiddleware");
const { registerController, loginController, UserDetails } = require("../controllers/UserController");
const { validateUser } = require("../middlewares/validateUser");

router.post("/register",validateUser,registerController);
router.post("/login",loginController);
router.get("/userdetails",isLoggedIn,UserDetails);

module.exports = router;

