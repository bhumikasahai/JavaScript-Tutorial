//const coding = ["js","java","python","ruby","cpp"]

//const values = coding.forEach((item) => {
    //console.log(item);
    //return item       // for each doesnt returns an item
//})
//console.log(values);

//const myNums = [1,2,3,4,5,6,7,8,9,10]

//--------using filter

// newNums = myNums.filter((num) => {
    //return num>4
//})
//console.log(newNums);

//--------using forEach

//const newNums = [];
//myNums.forEach( (num) => {
    //if(num > 4){
        //newNums.push(num)
    //}
//})
//console.log(newNums);



/************Map***************/


//const myNumbers = [1,2,3,4,5,6,7,8,9,10]
//const newNums = myNumbers.map((num)=> {return num +10 })  // when u open a scope u need to use return keyword

//const newNums =  myNumbers
                //.map((num)=> num*10)
                //.map((num)=> num+1)
                //.filter((num)=> num>40)  //chaining can be done as much u want 
//console.log(newNums);



/*************Reduce***************/
const myNums = [1,2,3]
const myTotal = myNums.reduce(function(acc,currval){
    console.log(`accumulator: ${acc} and current value: ${currval}`);
    return acc+currval
},5)
console.log(myTotal);






