import { Router } from "express";

const router = Router();

router.get("/users/:uuid", (request, response) => {
  return response.send(`Hello ${request?.params?.uuid}`);
});

export default router;
