import promptSync from "prompt-sync"

const prompt = promptSync()

type User = {
    id: number;
    name: string;
    email: string;
}

let users: User[] = []

let nextId = 1;



//Create

function createUser(): void {
    const name = prompt("Type your name: ")?? "";
    const email = prompt("Type your email: ")?? "";

    const newUser: User = {
        id: nextId++,
        name,
        email,
    }
    users.push(newUser)
    console.log("New user created!!")
    console.log(newUser)
}

//List

function listUsers(): void {
    console.log("\n Users List")
    if (users.length === 0) {
        console.log("Empty users")
    } else {
        users.forEach((u)=>{
            console.log(`Id: ${u.id} | Name: ${u.name} | Email: ${u.email}`)
        })
    }
}

//Update

function updateUser(): void {
    const idInput = prompt("Type the id to update the user: ")
    const id = Number(idInput)
    const user = users.find((u)=>u.id === id)

    if(!user){
        console.log("User not found");
        return;
    }

    const newName = prompt("Type new name or enter to ramain the old one: ")??""
    const newEmail = prompt("Type new email or enter to ramain the old one: ")??""

    if(newName) user.name = newName
    if(newEmail) user.email = newEmail

    console.log("User updated")
}

//Delete

function deleteUser(): void {
    const idInput = prompt("Type the id to delete the user: ")
    const id = Number(idInput)
    const index = users.findIndex((u)=>u.id === id)

    if(!index){
        console.log("User not found")
        return
    }

    users.splice(index, 1)

    console.log("User deleted")
}

createUser()