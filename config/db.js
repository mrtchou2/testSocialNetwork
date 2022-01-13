const mongoose = require("mongoose");

mongoose
    .connect(
        "mongodb+srv://" + process.env.DB_USER_PASS + "@dbtest.kzse8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
        {
            /*
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        */
        }
    )
    .then(() => console.log("Connected to mongoDB OK ! "))
    .catch((err) => console.log("Failed to connect to mongoDB ", err));

