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



//console.log(questionElement.innerText())
//console.log(showQuestion(question))


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
    {questions: "What borough has the biggest buildings ?",
     choices:[{text:"brooklyn", right:false}, {text:"Queens",right:false},{text:"Manhattan",right:true},{text:"New Jersey",right:true}],
  
    },
]
let choices
let questions
let question
let currentQuestionIndex =0
let shuffledQuestions 

//function to show questions on the page
//within the same function need the answers to show
//now need to get different answers to show up
//got different Questions too

//makes us go to next question when clicking submit button


// startButton.addEventListener("click", runGame)
//   function runGame(){
//     console.log(startButton)
//     startButton.classList.add("hide")
    

//   }




submitButton.addEventListener("click", () => {
  currentQuestionIndex++
  clearAnswerClass()
  nextQuestion()  
})

function nextQuestion(){
  
  showQuestion([currentQuestionIndex])

}

function resetState(){
window.location.reload()
}


//Questions shown/ answers shown on button 
function showQuestion(questions){
 
    
    console.log(questionElement.innerText)
  //  for(let i=0; i<questions10.length; i++){
      question = questions10[currentQuestionIndex].questions
      questionElement.innerText=question
      for(let j=0; j<questions10[currentQuestionIndex].choices.length;j++){
        choices=questions10[currentQuestionIndex].choices[j].text
        console.log(questions10[currentQuestionIndex].choices[j].text)
        buttons[j].innerText=questions10[currentQuestionIndex].choices[j].text
        // button.innerText= choices  
      }
     
    
      console.log(choices)
   



    
    
    
    
    
    
      // }   
  
  questionElement.innertext=questions10.questions
  questions=questions10
  // 
  //   button.innerText=questions.choices.text
  // questions.questions.choices.forEach(choices => {
    // const button = document.createElement("button")
    //    button.innerText=choices.text
    //   button.classList.add("btn") 
    //   if(choices.correct){
    //     button.dataset.correct= choices.correct
    //   }
    //    button.addEventListener("click", selectChoices)
    //   answersElement.appendChild(button)
    // })
  // for(let j=0; j<questions10.length; j++){
   

  //  }
}
showQuestion()
//Now I am going to try to make the answers be pickable, and see if the answer picked is correct

buttons.forEach(button =>{ 


  button.addEventListener("click", function (evt) {
       const selectedbutton= parseInt(evt.target.id[1])
       console.log(selectedbutton)
       const correct = questions10[currentQuestionIndex].choices[selectedbutton].right  
       setTheAnswerClass(evt.target,correct)
      //  Array.from(answersElement.children).forEach(button => {
        setTheAnswerClass(button, selectedbutton.data.correct)
      //  })
       
       if (correct) {
         console.log ("you are correct")
        }else{ ("you are wrong")
          

        }
      })

    })
  



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
// let choice

// function showChoices(){
//   for(let i=0; i<questions10.length; i++){
//     choice = questions10[i].choices
//      console.log(choice)
//     const button = document.createElement("button")
   
    
//      answersElement.innerText=choice
   
//      for(let j=0; j<choice.length; j++){
      
//       console.log(choice[j])
    
    
//     }

    

//   }

//  }
//  showChoices()
// //questionElement.innerText= questions10.Questions

// function rightAnswer(){

// }




