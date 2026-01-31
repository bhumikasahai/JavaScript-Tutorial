class User{
    constructor(usrname){
        this.username = usrname
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username,email,passwword){
        super(username)
        this.email = email
        this.password = passwword
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}
const chai = new Teacher("chai","chai@teacher.com","123")
chai.addCourse()
chai.logMe()

const masalchai = new User("masalachai")
masalchai.logMe()

//console.log(chai==masalchai) //false

