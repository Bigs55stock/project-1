//First I have to make index boilerplate, then link files.
//Now create a div box with buttons for question and answers.
//Now work on javascrpit and give functionailty to buttons and questions.
//Need to make questions.
//Display the questions on to the Html page

const submitButton = document.querySelector(".submit")
const resetButton = document.querySelector(".reset")
const mainboxElement = document.querySelector(".mainbox")
const questionElement = document.getElementById("question")
const answersElement = document.querySelector(".answers")





//console.log(questionElement.innerText())
//console.log(showQuestion(question))


// need to get questions seprated into indvidual buttons by making ojects in the array with boolean

let questions10 = [
    { questions: "Who was the first president of the United States ?",
      choices: ["George Bush", "George Washington", "Abraham Lincoln", "John Cena"],
      
    },
    { questions:"what is the largest ocean?",
      choices:[
        {answer:"Atlantic Ocean", right: false }, {answer:"Indian Ocean", right: false}
        , {answer:"Pacific Ocean", right:true }, {answer:"American Ocean",right:false}],
      
    },
    // {Questions:"How many boroughs are in NYC?",
    //  Choices:["1", "10","26","5"],
    //  Answer: Choices[3],
    
    // },
    // {Questions: "What is the largest continent?",
    //  Choices:["Asia", "North America", "South America", "Africa"],
    //  Answer: Choices[0],
    // },
    // {Questions: "what is 2+2",
    //  Choices:["2","5","4","6"],
    //   Answer: Choices[2],
    // },
    // {Questions: "what is 2*2",
    //  Choices:["2","5","4","6"],
    //   Answer: Choices[2],
    // },
    // {Questions: "how many cylinders are in a V6 car",
    //  Choices:["4","6","8","12"],
    //  Answer: Choices[1],
    // },
    // {Questions: "What car is a german",
    //  Choices:["bmw","ford","toyota","honda"],
    //  Answer: Choices[0],
    // },
    // {Questions: "What borough has the biggest buildings",
    //  Choices:["brooklyn", "Queens","Manhattan","New Jersey"],
    //  Answer: Choices[0],
    // },
]


let question
//let currentQuestionIndex = 
//function to show questions on the page
function showQuestion(){
    
    // console.log(questionElement.innerText)
   for(let i=0; i<questions10.length; i++){
      question = questions10[i].questions
      questionElement.innerText= question
   }  

    console.log(question)

  }
showQuestion()

let choice

function showChoices(){
  for(let i=0; i<questions10.length; i++){
    choice = questions10[i].choices
    answersElement.innerText= choice

  }

}
showChoices()
//questionElement.innerText= questions10.Questions




