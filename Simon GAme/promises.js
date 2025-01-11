// function saveToDb(data){
//     return new Promise ((resolve ,reject )=>{
// let internetSpeed =Math.floor(Math.random()*10 +1);
// if(internetSpeed >4){
//     resolve("Success : data was saved");
// }
// else{
//     reject("Faliure : weak connection");
// }

//     });
// }

// saveToDb("abhishek").then(()=>{
//     console.log(" data 1 promise is resolve");
//     saveToDb("aradhana").then(()=>{
//         console.log("data 2promise is resolve");
//     })
// })
// .catch(()=>{
//     console.log("promise was rejected");

// })

// saveToDb("abhishek")
// .then((result)=>{
//     console.log(" data 1 promise is resolve");
//     console.log(result);
//     // console.log("abhishek");
//     return saveToDb("aradhana");
// })
// .then((result)=>{
//     console.log("data 2 promise is resolve");
//     console.log(result);
//     return saveToDb ("shail");
// })
// .then((result)=>{
//     console.log("data 3 promise is resolve");
//     console.log(result);

// })
// .catch((error)=>{
//     console.log("promise was rejected");
//     console.log(error);


// })


// h1 = document.querySelector("h1");

// function changeColor(color,delay){
//     return new Promise((resolve,reject) =>{
//         setTimeout (()=>{
//             h1.style.color =color;
//             resolve("color change");
//         } ,delay);
//     });
// }

// changeColor("red",1000).then(()=>{
//     console.log("red color was completed ");
//     return changeColor("orange" ,1000);
// })
// .then(()=>{
//     console.log("orange color was completed ");
//     return changeColor("green" ,1000);
// })
// .then(()=>{
//     console.log("green color was completed ");
//    })
// .catch(()=>{
//     console.log("NO color");
// })


// async function great(){
//     throw "some random error";
//     // console.log("hello");
//     return "hello";

// }

// great()
// .then((result)=>{
//     console.log("promise was resolved" );
//     console.log("result was" ,result);
// })
// .catch((error)=>{
// console.log("there is error" , error);
// })

// let demo = async ()=>{
//     return 6;
// }

// function getNum(){
//    return new Promise((resolve , reject)=>{
//     setTimeout(()=>{
//         let num = Math.floor(Math.random()*10)+1;
//         console.log(num);
//         resolve();

//     },1000);
//    });
// }
// async function hello(){
//     await getNum();
//     await getNum();
//     await getNum();
// }


// h1 = document.querySelector("h1");

// function changeColor(color,delay){
//     return new Promise((resolve,reject) =>{
//         setTimeout (()=>{
//             h1.style.color =color;
//             resolve("color change");
//         } ,delay);
//     });
// }

// async function data(){
//     await changeColor("red",1000);
//     await changeColor("orange",1000);
//     await changeColor("green",1000);
//     await changeColor("yellow",1000);
//     await changeColor("blue",1000);
// }

// let url ="https://catfact.ninja/fact";

// fetch(url)
// .then((res)=>{
//     // console.log(res);
//     return res.json();
// })
// .then((data)=>{
// console.log("data1; " ,data.fact);
// return fetch (url);
// })
// .then((res)=>{
//     return res.json();
// })
// .then((data)=>{
//     console.log("data2" ,data.fact);
// })
// .catch((err)=>{
//     console.log("Error" ,err);
// })

let url ="https://dog.ceo/api/breeds/image/random";

let btn =document.querySelector("button");
btn.addEventListener("click" , async ()=>{
   let img = await getsImage();
   let img2= document.querySelector("#result");
   img2.setAttribute("src" ,img);
   console.log(img);
}); 
async function getsImage(){
    try{
        let res =await axios.get(url);
    // let data = await res.json();
    // console.log(data.fact);
    return res.data.message;

    }
    catch(err){
        console.log("error",err);
    }
    console.log("byeeee....")
    
}

// console.log(getsFact());
console.log("this is api facts");