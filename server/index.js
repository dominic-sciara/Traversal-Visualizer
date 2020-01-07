const express = require("express");
const app = express();
const server = require("http").createServer(app);

server.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

app.use(express.static(__dirname + "/../client/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/../client/public/index.html");
});