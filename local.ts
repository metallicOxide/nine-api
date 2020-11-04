import { app } from "./src/index";
const port = process.env.PORT ? parseInt(process.env.PORT) : 4000;

const server = app.listen(port, () => {
  console.log(`server is starting on port ${port}`);
});
