import jwt from "jsonwebtoken";

export const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        message: "User not authenticated",
        success: false,
      });
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    if (!decoded) {
      return res.status(401).json({
        message: "Invalid token",
        success: false,
      });
    }

    // Store user ID on request
    req.id = decoded.userId;

    next(); // MUST BE CALLED
  } catch (error) {
    return res.status(500).json({
      message: "Error verifying token",
      success: false,
      error: error.message,
    });
  }
};
