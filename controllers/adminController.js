import { prisma } from "../routes/db.js";
import bcrypt from "bcryptjs";
export const registerView = (req, res) => {
  res.render("register", {});
};

export const createUser = async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const userParams = {
    name: req.body.name,
    lastName: req.body.lastName,
    userName: req.body.userName,
    email: req.body.email,
    roleId: req.body.roleId,
    password: hashedPassword,
  };
  try {
    const newUser = await prisma.user.create({
      data: userParams,
    });
    res.send("user successfully created");
    console.log(newUser);
  } catch {
    res.send("couldnot create new user.... check params on console");
    console.log(userParams);
  }
};

export const deleteUser = async (req, res) => {
  try {
    await prisma.user.delete({
      where: {
        id: parseInt(req.params.id),
      },
    });
    res.send("user successfully deleted");
  } catch {
    res.status(501).send("couldnot delete user");
  }
};

export const getStaff = async (req, res) => {
  const users = await prisma.user.findMany({
    where: {
      roleId: 2,
    },
  });
  res.json(users);
};
