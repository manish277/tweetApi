module.exports = app => {
    const tweet = require("../controller/tweet.controller.js");
    const auth = require("../middleware/checkUserType");
    var router = require("express").Router();

    // Create a new tweet
    router.post("/create",auth, tweet.create);

    // // Retrieve all tweets
    router.get("/:id",auth, tweet.findAll);

    // Retrieve a single tweet with id

    // Update a tweet with id
    router.put("/:id",auth, tweet.update);

    // Delete a tweet with id
    router.delete("/:id",auth, tweet.delete);


    app.use('/api/tweet', router);
};