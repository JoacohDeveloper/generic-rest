import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import router from "../Router";
dotenv.config();
const app = express();

//middlewares
app.use(express.json(), cors());

app.use(router);

const PORT = process.env.PORT || 3000;

app.get("/", (request, response) => {
  response.json({ msg: "hello world" });
});

app.listen(PORT, () => {
  console.log(`Development server started on http://localhost:${PORT}`);
});
