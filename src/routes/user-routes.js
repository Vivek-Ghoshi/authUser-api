const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../middlewares/authMiddleware");
const { registerController, loginController, searchController } = require("../controllers/UserController");
const { validateUser } = require("../middlewares/validateUser");

router.post("/register",validateUser,registerController);
router.post("/login",loginController);
router.get("/userdetails",isLoggedIn,searchController);

module.exports = router;

