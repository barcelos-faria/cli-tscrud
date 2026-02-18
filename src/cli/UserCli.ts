import promptSync from "prompt-sync"
import { UserRepository } from "../repository/UserRepository"
import { UserService } from "../service/UserService"

const prompt = promptSync()

export class UserCli {
    private service = new UserService(new UserRepository())
    
    createUser(): void{
        const name = prompt("Type your name: ")
        const email = prompt("Type your email: ")
        console.log("")
        const user = this.service.createUser(name, email)
        console.log(`New user: ${user} created!\n`)
    }
}

