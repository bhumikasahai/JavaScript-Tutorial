const user = {
    username : "bhumika",
    loginCount : 8,
    signesIn : true,

    getUserDetails : function(){
        //console.log("Got user details from database");
        //console.log( `username ${this.username}`);
        console.log(this);
    }
}

console.log(user.username);
//console.log(user.getUserDetails());
console.log(this); //empty brackets 

//const promiseOne = new Promise()
//const date = new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    return this
}
const userOne = User("bhumika",12, true)
const userTwo = User("ojasvi",12,true)
console.log(userTwo);
console.log(userOne);


