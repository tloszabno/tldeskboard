import http from "http";
import express, { Request, Response } from 'express'
import { TodoController } from "./infrastructure/controllers";

const router = express();
const { PORT = 3001 } = process.env;
const server = http.createServer(router);

router.get("/api/todo", (req : Request, res: Response) => TodoController(req, res));

server.listen(PORT, () =>
  console.log(`Server is running http://localhost:${PORT}...`)
);
