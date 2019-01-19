const express = require("express");
var bodyParser = require("body-parser");
const app = express();

const utils = require("./utilities");

// app.use(bodyParser.json()); // to support JSON-encoded bodies
// app.use(
//   bodyParser.urlencoded({
//     // to support URL-encoded bodies
//     extended: true
//   })
// );

const port = 4000;

app.get("/api", async (req, res) => {
  const link = await req.query.link;
  const width = await req.query.width;
  const height = await req.query.height;
  const result = await utils.seleniumScreen(link, width, height);
  res.send(JSON.stringify({ screenshot: result, link, width, height }));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
