
let users = [];


function addUser(id, name, balance) {
    users.push({ id, name, balance });
    console.log(`${name} is new user added`);
}


function editUserBalanceById(id, newBalance) {
    let user = users.find(u => u.id === id);
    if (user) {
        user.balance = newBalance;
        console.log(`${user.name}'s Balance had changed to ${newBalance}`);
    } else {
        console.log("This user is not exict");
    }
}


function deleteUserById(id) {
    let index = users.findIndex(u => u.id === id);
    if (index !== -1) {
        console.log(`${users[index].name}'s account has been deleted`);
        users.splice(index, 1);
    } else {
        console.log("This user is not exict");
    }
}

/////EX:
addUser(1, "Amir", 500);
addUser(2, "Nayel", 1000);
editUserBalanceById(1, 800);
deleteUserById(2);

console.log(users);
