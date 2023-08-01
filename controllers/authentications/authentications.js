import { prisma } from "../../routes/db.js";

export async function authUser(req, res, next) {
  const user = await prisma.user.findUnique({
    where: {
      userName: req.body,
    },
  });
  if (user.userName == null) {
    res.status(403);
    return res.send("you need to sign in");
  }
  next();
}

export function authRole(role) {
  return (req, res, next) => {
    if (req.user.role !== role) {
      res.status(401);
      return res.send("not allowed");
    } else {
      next();
    }
  };
}
