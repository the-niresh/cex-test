import express from "express";
import routes from "./src/routes/index.ts";

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3000, () => {
  console.log("listening on http://localhost:3000");
});
