class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Usernamr: ${this.username}`);
    }
    createId(){
        return `123`
    }
}
const bhumika = new User("bhumika")
console.log(bhumika.createId());

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email    
    }
}
const iphone = new Teacher("iphone","iphone@gmail.com")
console.log(iphone.createId());
