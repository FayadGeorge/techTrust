import { prisma } from "../routes/db.js";

export const getServices = async (req, res) => {
  const services = await prisma.services.findUnique({
    where: {
      employee: req.body.userId,
    },
  });
  res.json(services);
  console.log(services);
};

export const createService = async (req, res) => {
  const createdService = await prisma.services.create({
    data: req.body,
  });
  res.json(createdService);
  console.log(createdService);
};
