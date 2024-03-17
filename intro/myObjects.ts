const User = {
    name: "hassan Ramdan",
    email: "hr456@lco.dev",
    isACtive: true
}

function createUser({name: string, isPaid: boolean}){}

let newUser = {name: "Ramdan", isPaid: false, email: "h@h.com"}

createUser(newUser)



function createCourse():{name: string, price: number}{
    return {name: "reactjs", price: 869}
}













type userTwo = {
    name: string;
    email: string;
    isActive: boolean
}


function createUserTwo(user: userTwo): userTwo{
    return user
}

createUserTwo({name: "", email: "", isActive: true})