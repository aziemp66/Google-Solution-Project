const express = require("express");
const db = require("./data/database");
const dotenv = require("dotenv");

const authRoutes = require("./router/auth.routes");
const investRoutes = require("./router/invest.routes");
const userRoutes = require("./router/user.routes");
const profileRoutes = require("./router/profile.routes");

const corsMiddleware = require("./middlewares/cors");
const verifyTokenMiddleware = require("./middlewares/verifyToken");

const app = express();

dotenv.config();

app.use(corsMiddleware);

app.use(express.json());

app.use(authRoutes);
app.use(investRoutes);
app.use(userRoutes);
app.use(verifyTokenMiddleware, profileRoutes);

let port = process.env.PORT || 5000;

db.connectToDatabase().then(() => {
	app.listen(port, () => {
		console.log(`Listening on port ${port}`);
	});
});
