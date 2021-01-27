module.exports = app => {
    const user = require("../controller/user.controller.js");
    const auth = require("../middleware/checkUserType");
    var router = require("express").Router();

    // Create a new user
    router.post("/create",auth, user.create);

    // // Retrieve all users
    router.get("/", auth,user.findAll);

    // Retrieve a single user with id

    // Update a user with id
    router.put("/:id",auth, user.update);

    // Delete a user with id
    router.delete("/:id",auth, user.delete);


    app.use('/api/user', router);
};