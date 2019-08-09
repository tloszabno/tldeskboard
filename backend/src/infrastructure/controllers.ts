import { Request, Response } from "express";
import { Todo } from '../../../common/domainTypes'


export const TodoController = (request: Request, response: Response) => {
  const todoList: Todo[] = [
    { name: "Ogarnij kuchnię", dueDate: "2019-08-08" },
    { name: "Ogarnij pokój" }
  ];
  response.send(todoList);
};
