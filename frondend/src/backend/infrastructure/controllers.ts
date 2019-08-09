import { Request, Response } from "express";

//TODO: use somehow Todos from frontend
interface Todo {
  name: string;
  dueDate?: string;
}

export const TodoController = (request: Request, response: Response) => {
  const todoList: Todo[] = [
    { name: "Ogarnij kuchnię", dueDate: "2019-08-08" },
    { name: "Ogarnij pokój" }
  ];
  response.send(todoList);
};
