
// const prompt = require("prompt-sync")();

const { errorMonitor } = require("events");

// class secret{
  
//     constructor (username, password,arr){
//         this.username=username;
//         this.password=password;
//         this.arr=arr
//         // let name=this.username+this.password;
//     }
//      friend() {
      
//          console.log("secret code is personal");
//         //   let username=this.username;
//         //   let password=this.password;
//          while(true) {
  
//           let arre=[]
// let characters=["A","B","C","D","E","F"];
// let charc=["a","b","c","e","f"];
// let sym=["*","&","%","$","#"];
// let num=["1","2","3","4","5"];
// // let all=code+character+Symbols+number;

//     let code=characters[Math.floor(Math.random()*characters.length)];
//     let character=charc[Math.floor(Math.random()*charc.length)]
//     let symbols=sym[Math.floor(Math.random()*sym.length)]
//     let number=num[Math.floor(Math.random()*num.length)]
//     let all=code+character+symbols+number
//   arre.push({SecretCode:all})
   

// // arr.push({code:code})
// // console.log(arr)


// let message="hi dear my friend, wanted to check on you and see how you are faring"
// // console.log(message)
//          let username=this.username;
//           let password=this.password;
//        let name=username+password;

//     if(name) {
//       console.log("your secet code is:",code);
//        if(arr===arre) {
//         console.log("encrypted message is:",message)
//        }else{
//         console.log("wrong code")
//        }break
//     }
//     else{
//       console.log("wrong code")
//     }

//         }
//       }
//     }
// let username=prompt("input your username:").toLowerCase();
// let password=prompt("input your password:").toLowerCase();
// let arr=prompt("input your secretCode:")
// let secretMessage=new secret(username,password,arr);
// secretMessage.friend()





// function myError(message) {
//   this.message = message;
//   this.name = "My new Error";
//   this.stack = `${this.name}: ${this.message}`;
// }

class NewError {
  constructor(message) {
    this.message = message;
    this.name = "My new Error";
    this.stack = `${this.name}: ${this.message}`;
  }

  myError() {
    console.log(this.name);
  }

  typeError() {
    console.log(this.message);
  }

  syntaxError() {
    console.log(this.stack);
  }
}

NewError

let theirError = new NewError("I love Error");

theirError. myError();

try {
  throw new myError("Hmm an Error Occured");
} catch (err) {
  console.log(err);
}

// class ErrorClass{
//   constructor(message){
//     this.message = message;
//     this.name = "ErrorClass";
//     this.stack = `${this.name}: ${this.message}`;
//    try {
//     let t="this is me"
//      t="his name is tunde"
//    } catch (error) {
//     console.log(error.name)
//    }

//   }
   
//    Error() {
//     console.log(this.name);
//   }
// }



















