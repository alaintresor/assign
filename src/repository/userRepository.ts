import { User } from "src/entity/User";
export class UserRepository {
    public findUserById = async (id: string): Promise<any> => {
      return User.findByPk(id);
    };
  }
  