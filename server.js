require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const contactRoute = require("./route/contactRoute");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", contactRoute); // Use "/api" as a prefix for the contact route

if (process.env.NODE_ENV === "production") {
  app.use(express.static("sirius-b/build"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "sirius-b", "build", "index.html"))
  );
}

const port = process.env.PORT || 5000;
app.listen(port, console.log(`Server listening on port ${port}`));
