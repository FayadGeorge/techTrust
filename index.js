import express from "express";
import loginRoutes from "./routes/login.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import staffRoutes from "./routes/staff.routes.js";

const app = express();
const PORT = process.env.PORT || 5200;

app.set("view engine", "ejs");

app.use("/", loginRoutes);
app.use("/api/admin", adminRoutes);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/staff/", staffRoutes);

app.listen(PORT, console.log("Server listening on port: " + PORT));
