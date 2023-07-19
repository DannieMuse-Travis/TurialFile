//const prompt=require(`prompt-sync`)()
// let c="i am the best, \n"
// // console.log(c.repeat(20));
// for (let i = 1; i < 20; i++) {
//   console.log( "i love js");
  
// }
// let firstName="Godwin"
// let LastName="travis"

// let email=firstName.concat(LastName)
// .concat("@gmail.com").toLowerCase()
// // console.log(email)
  
// let schoolName="Codelab"
// let teacher="tunde"
// let teachersEmail="tunde@gmail.com"
// let teacherschool="codelab intl"
// let teacherimage=""
// // console.log(schoolName.
// //   includes(teacherschool)?
// //   "allow": "go home");

// if (teacherimage) {
//   console.log("show image");
// } else {
//   console.log(teacher.charAt(0).
//   toLocaleUpperCase());
// }

 
// class Error{
//   constructor(message){
//     this.message=message
//     this.name="name"
//     this.stack=`${this.name}: ${this.message}`;
    
//   }

//   myError(){
//     console.log(this.name);
//   }

//   typeError(){
//     console.log(this.message)
//   }

//   syntaxError(){
//     console.log(this.stack);
//   }

// }
// try {
//   throw new myError("Hmm an Error Occured");
// } catch (error) {
//   console.log(error.message);
//   console.log(error.name);
//   console.log(error.stack);
//   let newLetter= new Error()
// newLetter.myError
  
// }
// class  panError{
//   constructor(blend){
//     this.blend=blend
//   }
//   // the function is converted to a method when place in class
//   errorCheck(){
//     try {
//       let working=this.blend
//       // eval help to convert a javascript code to a string
//       eval(working)
//     } catch (error) {
//       // console.log(error.name);
//       // console.log(error.message);
//       console.log(error.stack);
//     }finally{
//       console.log("fix it");
//     }
//   }
// }

// let mineError=new panError("const  a=`frank`; a=`lin`")
// mineError.errorCheck()


// class Error{
//   constructor(people){
//     this.people=people
//   }
//   errorCheck(people){
//     try {
//     let classic=people
//     eval(classic)
//     } catch (error) {
//       console.log(error.name);
//       console.log(error.message);
//       console.log(error.stack);
//     }
//   } 
// }

// let classic= prompt('input error\n')
// let myError= new Error()
// myError.errorCheck(classic)



// class JoggingSession{
//   constructor(distance, timeInMinutes, ){
//     this.distance = distance;
//     this. timeInMinutes = timeInMinutes;
//     this.calories = calories;

//   }
// convertHour(){
//   return this.timeInMinutes / 60;
// }

// inWithinSpeedLimit(){
//   let speedInKph = this.distance / this.convertHour;  
//   let speedInMph = speedInKph / 1.609;
//   let calories = speedInKph / 10;

//   if(speedInMph > 60.1){
//     return false;
//   } else{
//     return true;
//   }

// } 

// printSessionDetails(){
//   console.log(`distance : ${this.distance}`);
//   console.log(`time taken is?: ${this.inWithinSpeedLimit()}`);
//   console.log(`calories burned : ${}}`);
// }

// }

// class Error{
//     constructor(message){
//         this.message=message
//     }
//     errorCheck(message){
//         try {
//             let classic=message
//             eval(classic)
//         } catch (error) {
//             console.log(error.name);
//             console.log(error.message);
//             console.log(error.stack);
//         }
//     }
// }

// let classic=prompt('input error:\n')
// let myError= new Error()
// myError.errorCheck(classic)


const prompt=require('prompt-sync')()
try {
    

    class Ajor{
    constructor(){
        this.house=[]
    }
    addname(name,amount){
        let date=new Date().toDateString()
        let time=new Date().toTimeString().split(' ')[0]
        let user={
            name: name,
            amount:parseInt(amount),
            date: date,
            time: time,
        }
        if(name === null || name === undefined){
            console.log('Wrong Input')
        }
        else if(isNaN(amount)){
            console.log('Wrong ', name, 'Input')
        }else{
            this.house.push(user)
            console.log('added',name,'successfully')
        }
       
        
    }
    static allname(){
        console.log(this.house)
    }
    total(){
        let total=this.house.map(el=>{
            return el.amount
        }).reduce((a,b)=>{
            return a+b
        })
        console.log('the total amount of the contribution is: ₦'+total.toLocaleString())
    }
}
let ajo=new Ajor()
ajo.addname('blessing',4000)
ajo.addname('william',4000)
ajo.addname('Normal', 40000)
ajo.addname('Justin',4000)
console.log(Ajor.allname())
ajo.total()
} catch (error) {
    console.log('Wrong Input')
    console.log(error.message)
}

/**
 * 
 * push
 * pop
 * reduce
 * filter
 * map
 * forEach
 * whileloop
 * forLoop
 * slice
 * split
 * map
 * flat
 * fill
 * shift
 * unshift
 * math.floor
 * math.random
 * math.ceil
 * if else
 * sort
 */ 
