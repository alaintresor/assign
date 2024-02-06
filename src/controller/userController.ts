// src/controller/UserController.ts
import { Request, Response } from 'express';
import { UserService } from '../service/userService';

export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  public getUser = async (req: Request, res: Response): Promise<void> => {
    const userId = req.params.id;
    const user = await this.userService.getUserById(userId);
    res.json(user);
  };
}
