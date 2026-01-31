//for


/*for(let index=0;index<10;index++){
    const element = index
    console.log(element);
}*/

/*for(let i=0;i<10;i++){
    const elm = i
    if(elm==5){
        console.log(`5 is best number`);
    }
    console.log(elm);
}*/

/*for(let i=0;i<=10;i++){
    console.log(`outer loop ${i}`);
    for(let j=0;j<=10;j++){
        console.log(`inner loop ${i}`);
    }
}*/

/*let myArray = ["flashman","spiderman","batman","jaatman"];
for(let i=0;i<myArray.length;i++){
    console.log(myArray[i]);
}*/

// do-while

//let index = 0;
//while(index<=10){
    //console.log(`value of index is ${index}`);
//    //index = index+2;
//}

//let  myArr = ["bhumi","ojasvi","harry","kellen"];
//let arr=0
//while(arr<myArr.length){
    //console.log(myArr[arr]);
    //arr++;
//}

/*do{

}while(condition)*/

/*let score=1
do{
    console.log(`score is ${score}`)
    score++
}while(score<=10)*/

const arr = [1,2,3,4,5]

//for-of

//for(const num of arr){
    //console.log(num)
//}

const greetings = "Hello World!"
//for(const greet of greetings){
    //console.log(greet);
//}

//MAPS

/*const map = new Map()
map.set('IN',"India")
map.set('USA',"united states")
map.set('Fr',"France")
console.log(map)

for(const[key,value] of map){
    console.log(key,':-',value);
}*/

//const myObj = {
    //'game1' : 'NFS',
    //'game2' : 'Spiderman'
//}
//for(const[key,value] of myObj){
    //console.log(key,':-',value);   // Map is not iterable so this will lead to and error//
//}  

/*const myObj = {
    js : 'javascript',
    cp : 'C++',
    rb : 'ruby',
    swift : 'swift by apple'
}
for(const key in myObj){
    //console.log(key);
    console.log(myObj[key]);
}*/

/*const programming = ["js","rb","py","java"]
for(const key in programming){
    console.log(key);
}*/

const coding = ["js","ruby","java","python","cpp"]

//coding.forEach(function(val){
    //console.log(val);
//})

//coding.forEach((item)=>{
    //console.log(item);
//})

//function printMe(item){
    //console.log(item)
//}
//coding.forEach(printMe)

coding.forEach((item,indexedDB,arr)=>{
    console.log(item,index,arr);
})

