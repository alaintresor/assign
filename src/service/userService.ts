// src/service/UserService.ts
import { UserRepository } from '../repository/userRepository';

export class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  public getUserById = async (id: string): Promise<any> => {
    return this.userRepository.findUserById(id);
  };
}
