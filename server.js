let express = require("express");
let bodyParser = require("body-parser");
const path = require("path");

let PORT = process.env.PORT || 5000;
let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// const routes = require("./routes");
// const agreement = require("./agreement");
// app.use(routes);

if (process.env.NODE_ENV === "production") {
  console.log("I made to prod!!");
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));
}
// Handle React routing, return all requests to React app
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "index.html"));
// });

app.get("*", function(req, res) {
  res.sendFile(path.resolve(__dirname, "index.html"), function(err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});
// }

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
