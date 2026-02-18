import { User } from "../entity/User";

export class UserRepository {
    private users: User[] = []
    private nexId: number = 1
    
    public create(name: string, email: string): User {
        const user = new User(this.nexId++, name, email)
        this.users.push(user)
        return user
    }
} 