import { prisma } from "../routes/db.js";
import bcrypt from "bcryptjs";

//Post Request for Register
export const createUser = async (req, res) => {
  const newUser = await prisma.user.create({
    data: req.body,
  });
  res.json(newUser);
  console.log(req.body);
};

//Login
export const userLogin = async (req, res) => {
  // const registeredUserNames = prisma.user.findUnique({
  //   data: { userName: req.body.userName },
  // });
  // if (registeredUserNames === null) {
  //   return res.status(404).send("no user found");
  // }
  const loggedUser = await prisma.user.findUnique({
    where: {
      userName: req.body.userName,
    },
  });
  const checkedPassword = await bcrypt.compare(
    req.body.password,
    loggedUser.password
  );
  try {
    !checkedPassword
      ? res.send("Wrong password")
      : loggedUser.roleId === 1
      ? res.redirect("/api/admin/dashboard")
      : loggedUser.roleId === 2
      ? res.redirect("/api/staff/dashboard")
      : res.redirect("/api/client/dashboard");
  } catch {
    res.status(500).send("internal error");
  }
};

// For View
export const loginView = (req, res) => {
  res.render("login", {});
};
