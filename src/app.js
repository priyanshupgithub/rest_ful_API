const express = require("express");
require("./db/conn");
const Cricket = require("./models/cricket");
const router = require("./routers/router");

const app = express();
const port = process.env.PORT || 3000;
app.use(router);

app.listen(port, () => {
  console.log(`server is live at ${port}...`);
});
