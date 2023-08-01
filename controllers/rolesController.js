import { prisma } from "../routes/db.js";

export const getRoles = async (req, res) => {
  const roles = await prisma.role.findMany();
  res.json(roles);
};
