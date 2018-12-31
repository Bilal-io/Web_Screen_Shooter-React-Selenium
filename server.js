const express = require("express");
var bodyParser = require("body-parser");
const app = express();

const utils = require("./utilities");

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true
  })
);

const port = 4000;

app.post("/", async (req, res) => {
  const link = req.body.link;
  const width = req.body.width;
  const height = req.body.height;
  res.send(await utils.seleniumScreen(link, width, height));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
