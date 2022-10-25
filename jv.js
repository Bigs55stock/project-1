//First I have to make index boilerplate, then link files.
//Now create a div box with buttons for question and answers.
//Now work on javascrpit and give functionailty to buttons and questions.
//Need to make questions.
//Display the questions on to the Html page

const submitButton = document.querySelector(".submit")
const resetButton = document.querySelector(".reset")
const mainboxElement = document.querySelector(".mainbox")
const questionElement = document.getElementById("question")
const answersElement = document.getElementById("answers")





//console.log(questionElement.innerText())
//console.log(showQuestion(question))


// need to get questions seprated into indvidual buttons by making ojects in the array with boolean

let questions10 = [
    { questions: "Who was the first president of the United States ?",
      choices: [{text:"George Bush"},{text: "George Washington"}, {text:"Abraham Lincoln"},{text:"John Cena"}],
     
    },
    { questions:"what is the largest ocean?",
      choices:[{text:"Atlantic Ocean"},{text:"Indian Ocean"},{text:"Pacific Ocean"}, {text:"American Ocean"}],
      
       
    }
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
let choices
let questions
let question
//let currentQuestionIndex = 
//function to show questions on the page
function showQuestion(questions){
  const button= document.getElementsByClassName("button") 
    
    console.log(questionElement.innerText)
   for(let i=0; i<questions10.length; i++){
      question = questions10[i].questions
      questionElement.innerText=question
      for(let j=0; j<questions10[i].choices.length;j++){
        choices=questions10[i].choices[j].text
        console.log(questions10[i].choices[j].text)
        for(let z=0; z<button.length; z++){
          button[z].innerText=questions10[i].choices[j].text
        }
        // button.innerText= choices  
      }
    
    
      console.log(choices)
   
    }   
  
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




// the way i wrote answers to see if it work this way
 // {answer:"Atlantic Ocean", right: false }, {answer:"Indian Ocean", right: false}
        // , {answer:"Pacific Ocean", right:true }, {answer:"American Ocean",right:false}],
      