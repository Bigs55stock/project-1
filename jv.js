//First I have to make index boilerplate, then link files.
//Now create a div box with buttons for question and answers.
//Now work on javascrpit and give functionailty to buttons and questions.
//Need to make questions.
//Display the questions on to the Html page
//Need start button and also make instruction page too

const submitButton = document.getElementById("submit")
const resetButton = document.getElementById("reset")
const mainboxElement = document.querySelector(".mainbox")
const questionElement = document.getElementById("question")
const answersElement = document.getElementById("answers")
const buttons= document.querySelectorAll(".button") 
const startButton = document.getElementById("start")
const resultDisplay = document.getElementById("results")





// need to get questions seperated into individual buttons and making objects in the array with boolean for right or wrong answers

let questions10 = [
    { questions: "Who was the first president of the United States ?",
      choices: [{text:"George Bush",right: false},{text: "George Washington", right:true}, {text:"Abraham Lincoln", right:false},{text:"John Cena", right:false}],
     
    },
    { questions:"what is the largest ocean?",
      choices:[{text:"Atlantic Ocean", right: false},{text:"Indian Ocean", right:false},{text:"Pacific Ocean", right:true}, {text:"American Ocean", right:false}],
      
       
    },
    {questions:"How many boroughs are in NYC?",
     choices:[{text:"1", right: false},{text: "10", right:false},{text:"26", right: false},{text:"5", right:true}],
     
    
    },
    {questions: "What is the largest continent?",
     choices:[{text:"Asia", right:true}, {text:"North America", right:false}, {text:"South America",right:false}, {text:"Africa", right:false}],
    
    },
    {questions: "what is 2+2",
     choices:[{text:"2", right: false},{text:"5", right:false},{text:"4",right:true},{text:"6",right:false}],
      
    },
    {questions: "what is 2*2?",
     choices:[{text:"2", right: false},{text:"5", right:false},{text:"4", right:true},{text:"6", right:false}],
     
    },
    {questions: "how many cylinders are in a V6 car?",
     choices:[{text:"4",right: false},{text:"6", right:true},{text:"8",right:false},{text:"12",right:false}],
     
    },
    {questions: "What car is a german?",
     choices:[{text:"bmw", right:true},{text:"ford", right:false},{text:"toyota",right:false},{text:"honda",right:false}],
    
    },
    {questions: "What car is a american?",
     choices:[{text:"bmw", right:false},{text:"ford", right:true},{text:"toyota",right:false},{text:"honda",right:false}],
    
    },

    {questions: "What borough has the biggest buildings ?",
     choices:[{text:"brooklyn", right:false}, {text:"Queens",right:false},{text:"Manhattan",right:true},{text:"New Jersey",right:false}],
  
    },
    {questions: "Game Over if you have 5 correct you win ",
    choices:[{text:"to", right: false}, {text:"try",right:false},{text:"again",right:false},{text:"click reset",right:false}],
  }
]
let choices
let questions
let question
let currentQuestionIndex =0
let shuffledQuestions 
let result =0
let point = 0
//function to show questions on the page
//within the same function need the answers to show
//now need to get different answers to show up
//got different Questions too






//next question also cleans up from last question
submitButton.addEventListener("click", () => {
  currentQuestionIndex++
  clearAnswerClass()
  nextQuestion()
  answersElement.classList.remove("disabled")
  answersElement.classList.add("enabled")
})

function nextQuestion(){
  showQuestion([currentQuestionIndex])
  
  
}

//reset button working
resetButton.addEventListener("click", () =>
resetState()
)

function resetState(){
window.location.reload()
}


//Questions shown/ answers shown on button 
function showQuestion(questions){
 console.log(questionElement.innerText)
      question = questions10[currentQuestionIndex].questions
      questionElement.innerText=question
      for(let j=0; j<questions10[currentQuestionIndex].choices.length;j++){
        choices=questions10[currentQuestionIndex].choices[j].text
        console.log(questions10[currentQuestionIndex].choices[j].text)
        buttons[j].innerText=questions10[currentQuestionIndex].choices[j].text
      }
    questionElement.innertext=questions10.questions
    questions=questions10
  
}
showQuestion()
//Now I am going to try to make the answers be pickable, and see if the answer picked is correct

buttons.forEach(button =>{ 
  button.addEventListener("click", function (evt) {
       const selectedbutton= parseInt(evt.target.id[1])
       console.log(selectedbutton)
       const correct = questions10[currentQuestionIndex].choices[selectedbutton].right  
       setTheAnswerClass(evt.target,correct)

       //shows the current score of the game while being played
       if (correct ) {
         console.log ("you are correct")
         result +=1
        }else{ console.log("you are wrong")
          point +=1

        }
       
        resultDisplay.innerHTML = `<p> wrong ${point} of 10 questions<br /> right ${result} of 10 </p>`
        //allows the button to be clicked only once for each question
        answersElement.classList.remove("enabled")
        answersElement.classList.add("disabled")
        
       
        console.log("abc")
      })
     
    })
  // the result display ontop is showing question we are getting right.


//highlights the choices if they are right or wrong 
function setTheAnswerClass(element, correct){
      clearAnswerClass(element)
      if (correct) {
        element.classList.add("arecorrect")
      }else{ element.classList.add("arewrong")
        

      }
    }

function clearAnswerClass(){
  buttons.forEach(button => {
    button.classList.remove("arecorrect")
    button.classList.remove("arewrong")

      })
     
    }

