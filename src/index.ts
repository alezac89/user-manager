const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require("body-parser");
const cors = require("cors");
dotenv.config();
require('./config/db-connection.ts');

const app = express();
const port = process.env.PORT;

//middleware
app.use(cors({ credentials: true }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.get('/', (req: any, res: any) => {
    res.send('Welcome to user-manager API');
});

app.use("/auth", require("./controller/authorization.ts"));
app.use("/users", require("./controller/user.ts"));

app.listen(port, () => {
    console.info(`Server is running at https://localhost:${port}`);
});

export default express;