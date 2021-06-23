import { Request, Response } from "express";
import { UserService } from "../services/UserService"


export class UserController {

  async handle(req: Request, res: Response) {

    try {
      const { name, email, admin } = req.body;

      const userService = new UserService();

      const user = await userService.execute({name, email, admin});
      return res.json(user);
    } catch(err) {
      return res.status(400).json({ error: err.message })
    }

  }

}
