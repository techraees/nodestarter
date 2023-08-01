const router = require("express").Router();
const {
  getAllUsers,
  deleteSingleUser,
  updateUserProfile,
  getSingleUser,
  createNewUser,
} = require("../controllers/userCtrl");

router.route("/").get().post();
router.route("/:id").put().delete().get();

module.exports = router;
