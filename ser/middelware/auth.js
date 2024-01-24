import jwt from "jsonwebtoken";
export const isLogin = (req, res, next) => {
  if (req.user) {
    return next();
  }

  return res
    .status(401)
    .json({ success: false, message: "Unauthorized - Please log in" });
};

const Auth = (req, res, next) => {
  const token = req.cookie.token;
  if (!token)
    return res
      .status(401)
      .json({ message: "Please Login/Unregister/Unauthorize" });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: "Forbidden" });
    req.decoded = decoded;
    next();
  });
};
export default Auth;
