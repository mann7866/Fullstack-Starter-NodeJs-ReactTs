const router = require("express").Router();
const userController = require("../http/controllers/user.controller");
const auth = require("../http/middlewares/auth.middleware");
const role = require("../http/middlewares/role.middleware");
const UserRequest = require("../http/requests/user.request");

router.get("/", auth, role(["admin"]), userController.index);
router.get("/show/:id", auth, userController.show);
router.post("/", auth, UserRequest.create(), userController.store);
router.put("/:id", auth, UserRequest.update(), userController.update);
router.delete("/:id", auth, role(["admin"]), userController.destroy);

module.exports = router;
