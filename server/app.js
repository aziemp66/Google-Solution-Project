const express = require("express");
const db = require("./data/database");
const dotenv = require("dotenv");

const authRoutes = require("./router/auth.routes");
const investRoutes = require("./router/invest.routes");

const verifyToken = require("./middleware/verifyToken");

const app = express();

dotenv.config();

app.use(express.json());

app.use(authRoutes);
app.use(verifyToken, investRoutes);

let port = process.env.PORT || 5000;

db.connectToDatabase().then(() => {
	app.listen(port, () => {
		console.log(`Listening on port ${port}`);
	});
});
