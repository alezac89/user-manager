let mongoose = require("mongoose");
require("dotenv").config();

module.exports = mongoose.connect(
    `${process.env.MONGODB_URI}`,
    { useUnifiedTopology: true, useNewUrlParser: true },
    (err: any) => {
        err
            ? console.error(err)
            : console.info("You are successfully connected to MongoDB, Good Coding");
    }
);