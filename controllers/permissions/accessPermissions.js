import { prisma } from "../../routes/db.js";

const user = await prisma.user.findUnique({
  where: {
    userName: req.body.userName,
  },
});

function canAccesAdminDashboard(user) {
  return user.role === ROLE.ADMIN || project.userId === user.id;
}
if (req.user == null) {
  res.status(403);
  return res.send("you need to sign in");
}
next();
