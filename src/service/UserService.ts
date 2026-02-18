import { User } from "../entity/User";
import { UserRepository } from "../repository/UserRepository";

export class UserService {
    constructor(private repository: UserRepository) { }
    createUser(name: string, email: string): User{
      return this.repository.create(name, email)
    }
}