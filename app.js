const questions = [
  {
    question: "What is the capital of Pakistan?",
    option1: "Karachi",
    option2: "Islamabad",
    option3: "Lahore",
    correctOption: "Islamabad",
  },
  {
    question: "Which planet is known as the Red Planet?",
    option1: "Mars",
    option2: "Venus",
    option3: "Jupiter",
    correctOption: "Mars",
  },
  {
    question: "How many days are there in a week?",
    option1: "5",
    option2: "6",
    option3: "7",
    correctOption: "7",
  },
  {
    question: "Which is the largest ocean in the world?",
    option1: "Atlantic Ocean",
    option2: "Pacific Ocean",
    option3: "Indian Ocean",
    correctOption: "Pacific Ocean",
  },
  {
    question: "Which animal is known as the King of the Jungle?",
    option1: "Tiger",
    option2: "Lion",
    option3: "Elephant",
    correctOption: "Lion",
  },
  {
    question: "How many colors are there in a rainbow?",
    option1: "5",
    option2: "6",
    option3: "7",
    correctOption: "7",
  },
  {
    question: "Which is the largest continent?",
    option1: "Asia",
    option2: "Europe",
    option3: "Africa",
    correctOption: "Asia",
  },
  {
    question: "What is the national language of Pakistan?",
    option1: "English",
    option2: "Urdu",
    option3: "Punjabi",
    correctOption: "Urdu",
  },
  {
    question: "Which gas do humans need to breathe?",
    option1: "Carbon Dioxide",
    option2: "Nitrogen",
    option3: "Oxygen",
    correctOption: "Oxygen",
  },
  {
    question: "How many months are there in a year?",
    option1: "10",
    option2: "11",
    option3: "12",
    correctOption: "12",
  },
];

//Get:-
let p= document.querySelector("#Ques");
let label1 = document.querySelector("#labl1")
let label2= document.querySelector("#labl2")
let label3 = document.querySelector("#labl3")
let nextBtn = document.querySelector("#btn");
let startBtn = document.querySelector("#StartBtn");
let div1 = document.querySelector("#card1");
let div2 = document.querySelector("#card2");


console.log(startBtn)
console.log(div1)
console.log(div2)
console.log(nextBtn)


let option1 = document.querySelector("#opt1")
let option2 = document.querySelector("#opt2")
let option3 = document.querySelector("#opt3")




//varaibles:-

let num = 0
let score = 0; 
 let totalMarks;


 p.innerHTML = questions[`${num}`].question
 label1.innerHTML = questions[`${num}`].option1
 label2.innerHTML = questions[`${num}`].option2
 label3.innerHTML = questions[`${num}`].option3

 option1.value = questions[`${num}`].option1
 option2.value = questions[`${num}`].option2
 option3.value = questions[`${num}`].option3




//EVENTS:-


startBtn.addEventListener("click" , () =>{
  console.log("ok")
  div1.className = "none"

div2.classList.remove("d-none");
  div2.classList.add("block");


})



nextBtn.addEventListener("click" , () =>{
let selected = document.querySelector('input[name="r1"]:checked');

if(!selected){
    // alert("enter any option")
}


if(selected.value === questions[`${num}`].correctOption){
   score = score + 10;
    totalMarks = score;
   console.log(`totalMarks : ${totalMarks}`);
}else{
    console.log("ok");
}

if(num === questions.length-1){
    console.log("ok");
     div2.classList.remove("block")
      div2.classList.add("none");
      console.log(div2)
    if(totalMarks > 50){
let div = document.createElement("div");
div.innerHTML = `<div class="card mt-3 d-block py-0" style="width: 18rem;"
id="card1">
<div>
  <img src="./images/great.png" class="card-img-top " alt="..." 
  style="width: 100%;
  border-radius: 19%;">
  </div>
  <div style="width: 100%;
  margin-left: 5%;"
  class="py-3 imgdiv">
    <img src="./images/win.png" alt="win-png"
    style="width: 85%;
      border-radius: 6%;">
  </div>
</div>`

document.body.append(div);

    }else{
      console.log("failure")
      let div = document.createElement("div");
div.innerHTML = `<div class="card mt-3 d-block py-0" style="width: 18rem;"
id="card1">
<div class="imgdiv">
  <img src="./images/ohNO.png" class="card-img-top " alt="..." 
  style="width: 100%;
  border-radius: 20%;">
  </div>
  <div style="width: 100%;
  margin-left: 5%;"
  class="py-3 imgdiv">
    <img src="./images/lost.png" alt="win-png"
    style="width: 85%;
      border-radius: 10%;">
  </div>
</div>`

document.body.append(div);

    }
}
selected.checked = false
   num++; 

 p.innerHTML = questions[`${num}`].question
 label1.innerHTML = questions[`${num}`].option1
 label2.innerHTML = questions[`${num}`].option2
 label3.innerHTML = questions[`${num}`].option3

 option1.value = questions[`${num}`].option1
 option2.value = questions[`${num}`].option2
 option3.value = questions[`${num}`].option3
})


