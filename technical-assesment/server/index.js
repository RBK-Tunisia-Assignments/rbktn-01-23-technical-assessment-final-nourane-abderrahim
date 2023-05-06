const express = require("express");
const connection=require("./database-mysql/index.js")
const router= require('./routes/recipiesRoute.js')
const cors=require('cors')
const app = express();
app.use(cors())
const PORT = 4000;
app.use("/api",router)
// TODO - add additional route handlers as necessary
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
