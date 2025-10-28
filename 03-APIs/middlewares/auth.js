import jwt from "jsonwebtoken";
import StudentUser from "../models/user.model.js";

const auth = (req, res, next) => {
  try {
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader != "undefined") {
      const token = bearerHeader.split(" ")[1];
      const isVerifyedUser = jwt.verify(token, process.env.JWT_SECRET);
      console.log("✅ Verified User:", isVerifyedUser);
      req.user = token;
      next();
    } else {
      return res.status(404).json({ message: "No Token Providede!" });
    }
  } catch (error) {
    return res.status(401).json({
      message: "Unothrized Access! or Invalid Token or Expired Token",
    });
  }
};

export default auth