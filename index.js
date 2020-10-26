const express = require("express");
const app = express();
const port = 3000;
const bodyParper = require("body-parser");

const { User } = require("./models/User");

//application/x-www-form-urlencoded
app.use(bodyParper.urlencoded({ extended: true }));

//aplication/json
app.use(bodyParper.json());

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://donghoon:qwer1234@reactbasic.6uksf.mongodb.net/<dbname>?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(`MongoDB Error ${err}`));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/register", (req, res) => {
  const user = new User(req.body);

  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
