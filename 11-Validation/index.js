import express from "express";
import { body, validationResult } from "express-validator";
const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var validationRegistration = [
  body("userName")
    .notEmpty()
    .withMessage("Username Must be Reqired.")
    .isLength({ min: 3 })
    .withMessage("Username must be long than 3 character.")
    .trim()
    .isAlpha()
    .withMessage("Only Aplaphbets Allowed.")
    .custom((value) => {
      if (value === "admin") {
        throw new Error("User name 'admin' not allowed.");
      }
      return true;
    })
    .customSanitizer((value) => {
      value.toLowerCase();
    }),
  body("email")
    .isEmail()
    .withMessage("Please Enter Valid Email Id.")
    .normalizeEmail(),
  body("password")
    .isLength({ min: 3, max: 10 })
    .withMessage("Password must be Between 3 to 10 character.")
    .isStrongPassword()
    .withMessage("Password must be strong."),
  body("age")
    .isNumeric()
    .withMessage("Age Must be Numeric Value")
    .isInt({ min: 18 })
    .withMessage("Age must be above to the 18"),
  body("city")
    .isIn(["newyork", "losangeles", "chicago", "houston", "miami"])
    .withMessage(
      "City must be from the newyork,losangeles,chicago,houston or miami."
    ),
];

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

app.get("/myform", (req, res) => {
  res.render("myform", { error: 0 });
});

app.post("/saveform", validationRegistration, (req, res) => {
  const error = validationResult(req);
  if (error.isEmpty()) {
    res.send(req.body);
  }
  res.render("myform", { error: error.array() });
});
