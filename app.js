const questions = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    option1: "script",
    option2: "javascript",
    option3: "js",
    correctOption: "script",
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    option1: "The head section",
    option2: "The body section",
    option3: "Both the head and body section are correct",
    correctOption: "Both the head and body section are correct",
  },
  {
    question:
      'What is the correct syntax for referring to an external script called "xxx.js"?',
    option1: "script href=xxx.js",
    option2: "script name=xxx.js",
    option3: "script src=xxx.js",
    correctOption: "script src=xxx.js",
  },
];

//Get:-
let p= document.querySelector("#Ques");
// console.log(p);

// console.log(questions[0].question)

// let option1 = document.querySelector("#opt1")
// let option2 = document.querySelector("#opt2")
// let option3 = document.querySelector("#opt2")
// console.log(option1)
// console.log(option2)
// console.log(option3)


let label1 = document.querySelector("#labl1")
let label2= document.querySelector("#labl2")
let label3 = document.querySelector("#labl3")


console.log(labl1)
console.log(labl2.innerHTML)
console.log(labl3.textContent )



let nextBtn = document.querySelector("#btn");
console.log(nextBtn)


let num = 0
let cretedBTn = false;
let selected = document.querySelector('input[name="r1"]:checked')
// let selected0 = document.querySelector('#opt1["name=r1"]:checked')

// console.log(selected0)

nextBtn.addEventListener("click" , () =>{
    console.log("ok")

if(!cretedBTn){
let prebtn = document.createElement("button");
prebtn.innerHTML = "previous";
document.body.append(prebtn);
cretedBTn = true;
}


 p.innerHTML = questions[`${num}`].question
 label1.innerHTML = questions[`${num}`].option1
 label2.innerHTML = questions[`${num}`].option2
 label3.innerHTML = questions[`${num}`].option3
 num++;

if(selected == questions[`${num}`].question){
    console.log("thekk")
}


})

