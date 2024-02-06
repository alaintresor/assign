import { User } from "src/entity/User";
export class UserRepository {
    public findUserById = async (id: string): Promise<any> => {
      return User.findByPk(id);
    };

    public createUser = async (userData: any): Promise<any> => {
      return User.create(userData);
    };
    
  }
  